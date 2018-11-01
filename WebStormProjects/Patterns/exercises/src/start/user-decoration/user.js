export class User {
    constructor(firstName, lastName, password) {
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.password = password;
    }

    get name() {
        return `${this._firstName} ${this._lastName}`;
    }

    setFirstName(firstName) {
        this._firstName = firstName;
    }

    setLastName(lastName) {
        this._lastName = lastName;
    }

    login() {
        console.log('Logging in');
    }
}
