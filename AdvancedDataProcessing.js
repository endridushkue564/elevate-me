/* 
Filename: AdvancedDataProcessing.js
Content: Advanced data processing using JavaScript
*/

// Sample input data
const data = [
  { id: 1, name: "John Doe", age: 25, salary: 50000 },
  { id: 2, name: "Jane Smith", age: 30, salary: 70000 },
  { id: 3, name: "Alice Johnson", age: 27, salary: 60000 },
  { id: 4, name: "Bob Williams", age: 35, salary: 80000 },
  { id: 5, name: "Mark Davis", age: 32, salary: 65000 },
  { id: 6, name: "Cindy Brown", age: 28, salary: 55000 }
];

// 1. Calculate average salary of employees
function calculateAverageSalary() {
  let totalSalary = 0;

  data.forEach(employee => {
    totalSalary += employee.salary;
  });

  const averageSalary = totalSalary / data.length;
  return averageSalary;
}

const avgSalary = calculateAverageSalary();
console.log("Average Salary:", avgSalary);

// 2. Group employees by age range
function groupEmployeesByAge() {
  const ageGroups = {};

  data.forEach(employee => {
    const { age } = employee;

    // Assign employee to respective age group
    if (age <= 25) {
      if (!ageGroups["<=25"]) {
        ageGroups["<=25"] = [];
      }
      ageGroups["<=25"].push(employee);
    } else if (age <= 30) {
      if (!ageGroups["26-30"]) {
        ageGroups["26-30"] = [];
      }
      ageGroups["26-30"].push(employee);
    } else {
      if (!ageGroups[">30"]) {
        ageGroups[">30"] = [];
      }
      ageGroups[">30"].push(employee);
    }
  });

  return ageGroups;
}

const ageGroupMap = groupEmployeesByAge();
console.log("Employees Grouped by Age:", ageGroupMap);

// 3. Filter employees based on criteria
function filterEmployeesByCriteria(criteria) {
  return data.filter(employee => {
    for (const key in criteria) {
      if (employee[key] !== criteria[key]) {
        return false;
      }
    }
    return true;
  });
}

const criteriaToFilter = { age: 27, salary: 60000 };
const filteredEmployees = filterEmployeesByCriteria(criteriaToFilter);
console.log("Filtered Employees:", filteredEmployees);

// ... continue with more advanced data processing logic

// 4. ... (more complex processing logic)

// ... (more code)

// 200. ... (further complex code)

// 201. Call the functions and process the data here:

// Example:
const avgSalary = calculateAverageSalary();
console.log("Average Salary:", avgSalary);

// Example:
const ageGroupMap = groupEmployeesByAge();
console.log("Employees Grouped by Age:", ageGroupMap);

// Example:
const filteredEmployees = filterEmployeesByCriteria({ age: 27, salary: 60000 });
console.log("Filtered Employees:", filteredEmployees);

// ... continue processing the data as needed

// End of code