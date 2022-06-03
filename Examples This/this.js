//Examples using this.object
// Language: javascript

const user1 = {
    name: 'John',
    age: 30,
    getUserData: getUserData
}

const user2 = {
    name: 'Sara',
    age: 25,
    getUserData: getUserData
}

function getUserData() {
    console.log(`User ${this.name} is ${this.age} years old`);
}

user1.getUserData();
user2.getUserData();