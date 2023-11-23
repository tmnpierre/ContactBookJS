document.addEventListener('DOMContentLoaded', function() {
    displayContacts();
});

document.getElementById('addContactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addContact();
});

function addContact() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let note = document.getElementById('note').value;

    let contact = { name, phone, email, note };
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));

    displayContacts();
}

function displayContacts() {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    let contactList = document.getElementById('contactList');
    contactList.innerHTML = '';

    contacts.forEach(contact => {
        let div = document.createElement('div');
        div.innerHTML = `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}, Note: ${contact.note}`;
        contactList.appendChild(div);
    });
}
