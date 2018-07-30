(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function createContacts(name, phone, address){
    return `<h1>${name}</h1>
            <p>${phone}</p>
            <p>${address}</p>`;
};

module.exports = createContacts;
},{}],2:[function(require,module,exports){
"use strict";

let contacts = [
    {
        name: "Aaron Keen",
        phone: "1111111111",
        address: "500 Interstate Blvd S",
    },
    {
        name: "Jacob Keen",
        phone: "2222222222",
        address: "Brentwood, TN",
    },
    {
        name: "Keith Rutkowski",
        phone: "3333333333",
        address: "Dresden, TN",
    },
]

localStorage.setItem("contacts", JSON.stringify(contacts));

function getContacts() {
    return JSON.parse(localStorage.getItem("contacts"));
}

module.exports = getContacts
},{}],3:[function(require,module,exports){

},{}],4:[function(require,module,exports){
let createContact = require("./Contact");
let getContacts = require("./ContactCollection");

function listContacts() {
    getContacts().forEach(contact => {
        let contactComponent = createContact(contact.name, contact.phone, contact.address)
        writeContactsToDOM(contactComponent)
    })
}


function writeContactsToDOM(contact){
    document.querySelector("#contactList").innerHTML += contact;
}
module.exports = listContacts;
},{"./Contact":1,"./ContactCollection":2}],5:[function(require,module,exports){
let listContacts = require("./ContactList");
let contactForm = require("./ContactForm");

listContacts();

},{"./ContactForm":3,"./ContactList":4}]},{},[5]);
