import {Cheque, BankTransfer} from './payment-methods';

class Employee {
    makePayment(amount) {
        let paymentMethod = this.createPaymentMethod();
        paymentMethod.credit(amount);
    }
}

export class PartTimeEmployee extends Employee {
    createPaymentMethod() {
        return new Cheque();
    }
}

export class FullTimeEmployee extends Employee {
    createPaymentMethod() {
        return new BankTransfer();
    }
}
