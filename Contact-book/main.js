const name = document.querySelector('.name')
const number = document.querySelector('.number')
const address = document.querySelector('.address')
const btnAddTask = document.querySelector('.btn-add-task')

const listTasks = document.querySelector('.list-tasks')

const db = window.localStorage


btnAddTask.onclick = () => {
    let contact = {
        id: Math.random(1, 100),
        name: name.value,
        number: number.value,
        address: address.value,
    }
    saveContact(db, contact)
}

loadContacts(db, listTasks)
