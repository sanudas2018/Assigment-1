class BankAccount {

    // Create Construction & Received All input value
    constructor(accountNumber = '', ownerName = '', balance = ''){
        
        // Received all account values
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;

        // Validation class / object parameter
        if(accountNumber == '' || ownerName == '' || balance == ''){
            console.log('Please Give Me a (account Number, Owner Name, Balance)')

        }else{
        // Display all account info
            console.log('Initial Account Information:');
            console.log(`Account Number:  ${this.accountNumber}`);
            console.log(`Owner Name:  ${this.ownerName}`);
            console.log(`Balance:  $${this.balance}`);
        }  
       
    }

    // Start Deposit method
    deposit(amount = 0){
       if(this.accountNumber == this.accountNumber ){
        let depositAmount = this.balance += amount;
        console.log(`Deposited  ${amount} into Account  ${this.accountNumber}`);
        return depositAmount;
       }else{
        console.log("Your account number does not Match")
       }
        
    };
    // Start withdraw method
    withdraw(amount){
        if(amount == '' || amount == undefined ){
            console.log('Now there is no withdrawal')
        }else if(amount > this.balance){
            console.log('Insufficient Funds');
        }else{
            let depositAmount = this.balance -= amount;
            console.log(`Withdrawal ${amount} from Account  ${this.accountNumber}`);
            return depositAmount;
        }     
        
    };
    // Total Balance
    getBalance(){
     return this.balance;
    };

    // All Account Information
    displayAccountInfo(){
        let title = `\nAccount Information :`;
        let AccountNumber = `Account Number : ${this.accountNumber}`;
        let ownerName = `Owner Name : ${this.ownerName}`;

    
        let balance = `Current Balance: $${this.getBalance()}`;
        console.log(title)
        console.log(AccountNumber)
        console.log(ownerName)
        console.log(balance)
    };
    
}

// New Object Create
const bankAccountObj = new BankAccount( '20240025', 'SANU', 2000);


// Deposit function call & input Deposit Value
console.log(`\nDeposited and Withdrawal : `);
bankAccountObj.deposit(500);

// Withdraw function call & input Withdraw Value
bankAccountObj.withdraw(400);

// All Account Information & Call Function
bankAccountObj.displayAccountInfo()

// ...Second Bank Account Create ...
// console.log("\nSecond Bank Account for Ostad");
// const bankAccountObj2 = new BankAccount( '1122', 'Ostad', 10000);
// console.log(`\nDeposited and Withdrawal : `);
// bankAccountObj2.deposit(5000);
// bankAccountObj2.withdraw(4000);
// bankAccountObj2.displayAccountInfo()

