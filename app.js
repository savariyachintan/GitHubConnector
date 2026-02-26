// app.js

// This function will hold user information
let users = [];

// Function to store user information
function storeUser(userInfo) {
    users.push(userInfo);
    console.log('User information saved.');
}

// Function to retrieve user information
function retrieveUsers() {
    return users;
}

// Function to display user information
function displayUsers() {
    users.forEach((user, index) => {
        console.log(`User ${index + 1}:`, user);
    });
}

// Function to delete user information by index
function deleteUser(index) {
    if (index >= 0 && index < users.length) {
        users.splice(index, 1);
        console.log('User information deleted.');
    } else {
        console.log('Invalid index.');
    }
}

// Example Usage
storeUser({name: 'John Doe', age: 30});
displayUsers();
deleteUser(0);