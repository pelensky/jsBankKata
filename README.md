# Javascript Bank Kata
### Tech Test Week
### Week Ten

The purpose of this project is to complete a tech test in a day. I chose to complete this tech test in Javascript, as I feel less comfortable in it than I do in Ruby.

Instructions
-------
* In a browser, open `SpecRunner.html` to see that all the tests pass.
* The console log will show the three transactions below, tough per instructions from our coach, they will show today's date.
* Create a new account `account = new Account();`
* Add funds - `account.deposit(100);`
* Withdraw funds - `account.withdraw(20);`
* Create a new statement, with the account - `statement = new Statement(account);`
* Print statement by calling - `statement.printStatement();`
* The following will be outputted to the console log:
```
   date    ||  credit  ||  debit  || balance
23/01/2017 ||  100.00  ||         || 100.00
23/01/2017 ||          ||  20.00  || 80.00
```


## Specifications
* You should be able to interact with the your code via a REPL like IRB or the JavaScript console.
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012
**And** a deposit of 2000 on 13-01-2012
**And** a withdrawal of 500 on 14-01-2012
**When** she prints her bank statement
**Then** she would see

```
date       || credit || debit   || balance
14/01/2012 ||        || 500.00  || 2500.00
13/01/2012 || 2000.00||         || 3000.00
10/01/2012 || 1000.00||         || 1000.00
```
