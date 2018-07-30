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