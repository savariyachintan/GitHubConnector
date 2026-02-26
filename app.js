// A class to manage customer records using localStorage
class CustomerManager {
    constructor() {
        this.customers = this.loadCustomers();
    }

    loadCustomers() {
        const customers = localStorage.getItem('customers');
        return customers ? JSON.parse(customers) : {};
    }

    saveCustomers() {
        localStorage.setItem('customers', JSON.stringify(this.customers));
    }

    addCustomer(id, name, email) {
        this.customers[id] = { name, email };
        this.saveCustomers();
    }

    getCustomer(id) {
        return this.customers[id];
    }

    displayCustomers() {
        const customerList = document.getElementById('customerList');
        customerList.innerHTML = '';
        for (const id in this.customers) {
            const customer = this.customers[id];
            const customerItem = document.createElement('li');
            customerItem.textContent = `ID: ${id}, Name: ${customer.name}, Email: ${customer.email}`;
            customerList.appendChild(customerItem);
        }
    }

    deleteCustomer(id) {
        delete this.customers[id];
        this.saveCustomers();
    }
}

// Example usage
const customerManager = new CustomerManager();

// Add event listeners or UI interactions here (e.g., on form submit)

// Call displayCustomers to show existing customers when the page loads
window.onload = () => customerManager.displayCustomers();