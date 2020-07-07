(function (){
    "user strict";
    
    describe("Account", function (){
        let acc1 = new Account(555555);
        it ("Account: getNumber()",
            function (){
                assert.equal (555555, acc1.getNumber());
            }
        )
        it ("Account: getBalance()",
            function (){
                assert.equal (0, acc1.getBalance ());
            }
        )
        it ("Account: deposit()",
            function (){
                acc1.deposit(10000);
                assert.equal (10000, acc1.getBalance ());
            }
        )
        it ("Account: withdraw()",
            function (){
                acc1.withdraw(500);
                assert.equal (9500, acc1.getBalance ());
            }
        )
        it ("Account: toString()",
            function (){
                assert.equal ("Account " + acc1.getNumber() + ": balance " + acc1.getBalance(), acc1.toString());
            }
        )
    });
    
    describe("Savings Account", function (){
        let savingsAccount = new SavingsAccount(10002, 0.5);
        savingsAccount.deposit(10000);
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
    
        it ("Savings Account: addInterest()",
            function (){
                savingsAccount.addInterest();
                assert.equal (10010, savingsAccount.getBalance() );
            }
        )
        it ("Savings Account: toString()",
            function (){
                assert.equal ("Savings Account : " + savingsAccount.getNumber() +  " balance: " + savingsAccount.getBalance(), savingsAccount.toString() );
            }
        )
    });
    
    describe("Checking Account", function (){
        let checkingAccount = new CheckingAccount(10003, 12000);
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
                assert.equal (10000, bankObject.addAccount() );
            }
        )
        it ("Bank : addCheckingAccount() with overdraft 100",
            function (){
                assert.equal (10001, bankObject.addCheckingAccount(100));
            }
        )
        it ("Bank : addSavingsAccount() with interest value 0.2",
            function (){
                assert.equal (10002, bankObject.addSavingsAccount() );
            }
        )
        
        it ("Bank : closeAccount()",
            function (){
                let tempArray = [];
                tempArray = bankObject.closeAccount(555555);
                assert.deepEqual( bankObject._accounts,tempArray);
            }
        )
        
        it ("Bank : closeAccount()",
            function (){
                let tempArray = [];
                tempArray = bankObject.endOfMonth();
                assert.deepEqual( ["Interest added SavingsAccount10002 : balance: 0 interest: undefined"], tempArray);
            }
        )
        
    });
    
    
    })();