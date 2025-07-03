class BankAccount {
  constructor(name, amount, pin) {
    this.name = name;
    this.balance = amount;
    this.pin = pin;
    this.accountNumber = Math.floor(Math.random() * 90000 + 10000);
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount}. New Balance: Rs. ${this.balance}`);
    } else {
      console.log("deposit Amount must be greater than 0");
    }
  }

  withDraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`withdraw amount: ${amount}. New Balance: ${this.balance}`);
    } else {
      console.log(`Insufficient Amount or Invalid Amount`);
    }
  }

  getDetails(enteredPin) {
    if (enteredPin === this.pin) {
      console.log("PIN verified. Showing account details:");
      console.log(`Name: ${this.name}`);
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Balance: Rs. ${this.balance}`);
    } else {
      console.log("Incorrect PIN. Access denied.");
    }
  }
}
let c1 = new BankAccount("Priya", 5000, 4123);

c1.deposit(10876);         
c1.getDetails(4123);       
c1.getDetails(1234);        

