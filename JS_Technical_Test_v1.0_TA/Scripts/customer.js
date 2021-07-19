class Customer {
    constructor(firstName, lastName, emailAddress) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    getEmailAddress() {
        return this.emailAddress;
    }
}

export { Customer };