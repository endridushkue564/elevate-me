/*
* Filename: advanced_data_processing.js
* Content: Advanced data processing code
* Description: This code demonstrates sophisticated techniques for processing data in JavaScript.
*/

// Import external libraries
const fs = require('fs');
const axios = require('axios');
const moment = require('moment');

// Define global variables
let data = [];

// Load data from a JSON file
function loadDataFromFile() {
  try {
    const fileContent = fs.readFileSync('data.json');
    data = JSON.parse(fileContent);
    console.log('Data loaded successfully!');
  } catch (error) {
    console.error('Error loading data from file:', error);
  }
}

// Fetch data from an API
async function fetchDataFromAPI() {
  try {
    const response = await axios.get('https://api.example.com/data');
    data = response.data;
    console.log('Data fetched successfully!');
  } catch (error) {
    console.error('Error fetching data from API:', error);
  }
}

// Process the data
function processData() {
  // Add a timestamp to each data item
  data.forEach(item => {
    item.timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  });

  // Filter out data items with a low value
  data = data.filter(item => item.value > 10);

  // Calculate the average value
  const sum = data.reduce((total, item) => total + item.value, 0);
  const average = sum / data.length;

  console.log('Data processed successfully!');
  console.log('Average value:', average);
}

// Save the processed data to a file
function saveDataToFile() {
  try {
    const processedData = JSON.stringify(data);
    fs.writeFileSync('processed_data.json', processedData);
    console.log('Data saved to file successfully!');
  } catch (error) {
    console.error('Error saving data to file:', error);
  }
}

// Run the data processing pipeline
function runDataProcessingPipeline() {
  loadDataFromFile();
  fetchDataFromAPI();
  processData();
  saveDataToFile();
}

runDataProcessingPipeline();
