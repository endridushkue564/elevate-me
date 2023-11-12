/*
 * Filename: AdvancedWebApp.js
 *
 * Description: This JavaScript code represents an advanced web application that utilizes various
 * techniques and technologies to create a highly interactive and visually appealing user experience.
 * It includes features like authentication, form submission, data fetching, animations, event handling,
 * and much more. The code showcases best practices for clean and modular code organization.
 */

// Global variables
const apiUrl = 'https://api.example.com';
let currentUser = null;
let chatLogs = [];

// Helper function to make API requests
async function fetchApi(url, options = {}) {
  const response = await fetch(url, options);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
  return data;
}

// Authentication module
const auth = (function () {
  function login(username, password) {
    return fetchApi(`${apiUrl}/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    });
  }

  function logout() {
    return fetchApi(`${apiUrl}/logout`);
  }

  function getCurrentUser() {
    return currentUser;
  }

  return {
    login,
    logout,
    getCurrentUser
  };
})();

// Chat module
const chat = (function () {
  function getChatLogs() {
    return fetchApi(`${apiUrl}/chats`);
  }

  return {
    getChatLogs
  };
})();

// UI module
const ui = (function () {
  // DOM elements
  const loginForm = document.getElementById('login-form');
  const logoutButton = document.getElementById('logout-button');
  const chatBox = document.getElementById('chat-box');
  const chatLogsContainer = document.getElementById('chat-logs-container');

  // Event listeners
  loginForm.addEventListener('submit', handleLogin);
  logoutButton.addEventListener('click', handleLogout);

  // Event handlers
  async function handleLogin(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      await auth.login(username, password);
      currentUser = username;
      loginForm.reset();
      loginForm.classList.add('hidden');
      logoutButton.classList.remove('hidden');
      chatBox.classList.remove('hidden');
      loadChatLogs();
    } catch (error) {
      console.error(error);
      alert('Login failed. Please try again.');
    }
  }

  async function handleLogout() {
    try {
      await auth.logout();
      currentUser = null;
      logoutButton.classList.add('hidden');
      chatBox.classList.add('hidden');
      chatLogsContainer.innerHTML = '';
      loginForm.classList.remove('hidden');
    } catch (error) {
      console.error(error);
      alert('Logout failed. Please try again.');
    }
  }

  async function loadChatLogs() {
    chatLogs = await chat.getChatLogs();

    chatLogs.forEach((log) => {
      const logElement = document.createElement('div');
      logElement.textContent = `${log.user}: ${log.message}`;
      chatLogsContainer.appendChild(logElement);
    });
  }

  return {
    loadChatLogs
  };
})();

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  if (auth.getCurrentUser()) {
    ui.loadChatLogs();
    logoutButton.classList.remove('hidden');
    chatBox.classList.remove('hidden');
  } else {
    loginForm.classList.remove('hidden');
  }
});