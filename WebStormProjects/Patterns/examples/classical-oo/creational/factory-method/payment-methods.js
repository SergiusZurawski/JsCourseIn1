export class Cheque {
    credit(amount) {
        console.log(`Paying £${amount} via cheque`);
    }
}

export class BankTransfer {
    credit(amount) {
        console.log(`Paying £${amount} via bank transfer`);
    }
}
