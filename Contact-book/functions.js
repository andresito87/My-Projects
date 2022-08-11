const saveContact = (db, contact) => {
    db.setItem(contact.id, JSON.stringify(contact))
    window.location.reload()
}

const loadContacts = (db, parentNode) => {
    let keys = Object.keys(db)

    for (key of keys) {
        let contact = JSON.parse(db.getItem(key))
        createContact(parentNode, contact, db)
    }
}

const createContact = (parentNode, contact, db) => {

    let divContact = document.createElement('div')
    let nameContact = document.createElement('h3')
    let numberContact = document.createElement('p')
    let addressContact = document.createElement('p')
    let iconDelete = document.createElement('span')

    nameContact.innerHTML = contact.name
    numberContact.innerHTML = contact.number
    addressContact.innerHTML = contact.address
    iconDelete.innerHTML = 'delete_forever'

    divContact.classList.add('task')
    iconDelete.classList.add('material-icons', 'icon')

    iconDelete.onclick = () => {
        db.removeItem(contact.id)
        window.location.reload()
    }

    divContact.appendChild(nameContact)
    divContact.appendChild(numberContact)
    divContact.appendChild(addressContact)
    divContact.appendChild(iconDelete)

    parentNode.appendChild(divContact)

}