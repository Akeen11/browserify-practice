"use strict";

function createContacts(name, phone, address){
    return `<h1>${name}</h1>
            <p>${phone}</p>
            <p>${address}</p>`;
};

module.exports = createContacts;