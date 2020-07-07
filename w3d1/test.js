(function (){
    "user strict";
    
    describe("Account", function (){
        let account1 = new Account(555555);
        it ("Account: Number()",
            function (){
                assert.equal (555555, account1.getNumber());
            }
        )
        it ("Account: Balance()",
            function (){
                assert.equal (0, account1.getBalance ());
            }
        )
        it ("Account: deposit()",
            function (){
                account1.deposit(1000);
                assert.equal (1000, account1.getBalance ());
            }
        )
        it ("Account: withdraw()",
            function (){
                account1.withdraw(150);
                assert.equal (850, account1.getBalance ());
            }
        )
        it ("Account: toString()",
            function (){
                assert.equal ("Account " + account1.getNumber() + ": balance " + account1.getBalance(), account1.toString());
            }
        )
    });
    
    describe("Savings Account", function (){
        let savingsAccount = new SavingsAccount(666666, 0.5);
        savingsAccount.deposit(1000);
        it ("Savings Account: getter function for interest",
            function (){
                assert.equal (0.5, savingsAccount.interest );
            }
        )
        it ("Savings Account: setter function for interest",
            function (){
                savingsAccount.interest = 0.1;
                assert.equal (0.1, savingsAccount.interest );
            }
        )
        it ("Savings Account: check balance after initiated 10000",
            function (){
                assert.equal (1000, savingsAccount.getBalance() );
            }
        )
        it ("Savings Account: addInterest()",
            function (){
                savingsAccount.addInterest();
                assert.equal (1001, savingsAccount.getBalance() );
            }
        )
        it ("Savings Account: toString()",
            function (){
                assert.equal ("Savings Account : " + savingsAccount.getNumber() +  " balance: " + savingsAccount.getBalance(), savingsAccount.toString() );
            }
        )
    });
    
    
    describe("Checking Account", function (){
        let checkingAccount = new CheckingAccount(777777, 12000);
        checkingAccount.deposit(10000);
        
        it ("Checking Account: getter function for limit",
            function (){
                assert.equal (12000, checkingAccount.limit );
            }
        )
        it ("Checking Account: setter function for interest",
            function (){
                checkingAccount.interest = 8000;
                assert.equal (8000, checkingAccount.interest );
            }
        )
        it ("Checking Account: check balance after initiated 20000",
            function (){
                assert.equal (10000, checkingAccount.getBalance() );
            }
        )
        
        it ("Checking Account: withdraw()",
            function (){
                checkingAccount.withdraw(18000);
                assert.equal (-8000, checkingAccount.getBalance() );
            }
        )
        it ("Checking Account: toString()",
            function (){
                assert.equal ("Checking Account : " + checkingAccount.getNumber() +  " balance: " + checkingAccount.getBalance(), checkingAccount.toString() );
            }
        )
    });
    
    describe("Bank", function (){
        let bankObject = new Bank();
        
        it ("Bank : addAccount()",
            function (){
                assert.equal (1000, bankObject.addAccount() );
            }
        )
        
        it ("Bank : addSavingsAccount() with interest value 0.5",
            function (){
                assert.equal (1005, bankObject.addSavingsAccount() );
            }
        )
        it ("Bank : addCheckingAccount() with overdraft 100",
            function (){
                assert.equal (666666, bankObject.addCheckingAccount(100));
            }
        )
        
        it ("Bank : closeAccount()",
            function (){
                let tempArray = [];
                tempArray = bankObject.closeAccount(666666);
                assert.deepEqual( bankObject._accounts,tempArray);
            }
        )
        
        it("Bank: accountReport()", function() {
            assert.deepEqual(bankObject.accountReport(), ["Account Number: 55555 Balance: 0", "Account Number: 666666 Balance: 0"]);
        })
        
        it ("Bank : closeAccount()",
            function (){
                let tempArray = [];
                tempArray = bankObject.endOfMonth();
                assert.deepEqual( ["Interest added SavingsAccount 666666 : balance: 0 interest: undefined"], tempArray);
            }
        )
        
    });
    
    
    })();