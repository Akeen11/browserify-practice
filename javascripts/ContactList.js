let createContact = require("./Contact");
let database = require("./ContactCollection");


let outputEl = document.querySelector("#contactList");


function listContacts(){
    outputEl.innerHTML = "";
    database.getContacts().forEach(contact => {
        let contactComponent = createContact(contact.name, contact.phone, contact.address);
        writeContactsToDOM(contactComponent);
    });
}


function writeContactsToDOM(contact){
    outputEl.innerHTML += contact;
}


module.exports = listContacts;