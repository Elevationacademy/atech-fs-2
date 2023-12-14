class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
        this.transactions = [];
    }

    deposit(amount) {
        if (amount <= 0) {
            console.error('Deposit amount must be positive.');
            return;
        }
        this.balance += amount;
        this.logTransaction(amount, 'deposit');
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log('Withdrawal amount must be positive.');
            return;
        }
        if (amount > this.balance) {
            console.log('Insufficient funds.');
            return;
        }
        this.balance -= amount;
        this.logTransaction(amount, 'withdrawal');
    }

    getBalance() {
        return this.balance;
    }

    logTransaction(amount, type) {
        const transaction = { amount, type, date: new Date() };
        this.transactions.push(transaction);
        console.log(`Transaction logged: ${type} of $${amount}`);
    }
}

const myAccount = new BankAccount('Asad');
myAccount.deposit(25000);
myAccount.withdraw(50);
console.log(`Current balance: $${myAccount.getBalance()}`);
