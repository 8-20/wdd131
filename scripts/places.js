const currentTemperature = document.getElementById('userInfo');

// Accessing the data attributes
const userId = userInfoDiv.getAttribute('data-user-id');
const userRole = userInfoDiv.getAttribute('data-user-role');

console.log('User ID:', userId);     // Output: 12345
console.log('User Role:', userRole); // Output: admin