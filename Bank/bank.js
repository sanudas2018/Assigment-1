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
    deposit(amount){
       if(this.accountNumber == this.accountNumber ){
        let depositAmout = this.balance += amount;
        console.log(`Deposited  ${amount} into Account  ${this.accountNumber}`);
        return depositAmout;
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
            let depositAmout = this.balance -= amount;
            console.log(`Withdrawal ${amount} from Account  ${this.accountNumber}`);
            return depositAmout;
        }     
        
    };
    // Total Balance
    getBalance(){
     return this.balance;
    };

    // All Account Information
    displayAccountInfo(){
        let title = `\nAccoutn Information :`;
        let AccountNumber = `Account Number : ${this.accountNumber}`;
        let wnerName = `Owner Name : ${this.ownerName}`;

    
        let balance = `Current Balance: $${this.getBalance()}`;
        console.log(title)
        console.log(AccountNumber)
        console.log(wnerName)
        console.log(balance)
    };
    
}

// New Object Create
const bankAccountObj = new BankAccount( '20240025', 'SANU', 1000);
// const bankAccountObj2 = new BankAccount( '1548394', 'SSDD', 1500);

// Deposit function call & input Deposit Value
console.log(`\nDeposited and Withdrawal : `);
bankAccountObj.deposit(2000);

// Withdraw function call & input Withdraw Value
bankAccountObj.withdraw(500);

// All Account Information & Call Function
bankAccountObj.displayAccountInfo()



