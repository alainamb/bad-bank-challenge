// accountactivity.js

function AccountActivity() {
    const ctx = React.useContext(UserContext);
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [activityType, setActivityType] = React.useState(''); // 'deposit' or 'withdrawal'
    const [amount, setAmount] = React.useState(''); // For input amount
    const [name, setName] = React.useState(ctx.currentUser.name);
    const [balance, setBalance] = React.useState(ctx.currentUser.balance);

    React.useEffect(() => {
        if (ctx.currentUser) {
            setName(ctx.currentUser.name);
            setBalance(ctx.currentUser.balance);
        }
    }, [ctx.currentUser]);

    function validate(field, label){
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }

    function makeDeposit(){
        setActivityType('deposit');
        setShow(false);
        setAmount('');
    }

    function makeWithdrawal(){
        setActivityType('withdrawal');
        setShow(false);
        setAmount('');
    }

    function submitDeposit() {
        const depositAmount = parseFloat(amount);
        
        // Validate input
        if (!validate(amount, 'Amount is required')) return;
        if (isNaN(depositAmount) || depositAmount <= 0) {
            setStatus('Error: Please enter a valid positive amount');
            setTimeout(() => setStatus(''), 3000);
            return;
        }

        // Update balance
        const newBalance = balance + depositAmount;
        setBalance(newBalance);
        
        // Update context (assuming you have a method to update user balance)
        if (ctx.updateUserBalance) {
            ctx.updateUserBalance(newBalance);
        }
        
        setStatus('Success: Deposit completed!');
        setTimeout(() => setStatus(''), 3000);
        
        // Reset form
        setAmount('');
        setShow(true);
    }

    function submitWithdrawal() {
        const withdrawalAmount = parseFloat(amount);
        
        // Validate input
        if (!validate(amount, 'Amount is required')) return;
        if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
            setStatus('Error: Please enter a valid positive amount');
            setTimeout(() => setStatus(''), 3000);
            return;
        }
        
        // Check for sufficient funds
        if (withdrawalAmount > balance) {
            setStatus('Error: Insufficient funds');
            setTimeout(() => setStatus(''), 3000);
            return;
        }

        // Update balance
        const newBalance = balance - withdrawalAmount;
        setBalance(newBalance);
        
        // Update context (assuming you have a method to update user balance)
        if (ctx.updateUserBalance) {
            ctx.updateUserBalance(newBalance);
        }
        
        setStatus('Success: Withdrawal completed!');
        setTimeout(() => setStatus(''), 3000);
        
        // Reset form
        setAmount('');
        setShow(true);
    }

    function cancelActivity(){
    // Reset form to current user data
        setBalance(ctx.currentUser.balance);
        setAmount('');
        setShow(true); // Switch back to view mode
    }

    // Format balance to 2 decimal places
    const formatBalance = (bal) => {
        return typeof bal === 'number' ? bal.toFixed(2) : '0.00';
    };

    return(
        <div className="p-4">
            <Card 
                bgcolor="primary"
                header="Account Activity"
                status={status}
                body={show ? (
                    // View Mode
                    <>
                    <h5>Welcome {ctx.currentUser.name}!</h5><br/>
                    <p>Account Balance: ${formatBalance(balance)}</p><br/>
                    <button type="submit" className="btn btn-light" onClick={makeDeposit}>Make Deposit</button>
                    <button type="submit" className="btn btn-light" onClick={makeWithdrawal}>Make Withdrawal</button>
                    </>
                ) : activityType === 'deposit' ? (
                    // Deposit Form
                    <>
                        <h5>Deposit Funds</h5><br/>
                        <p>Account Balance: ${formatBalance(balance)}</p><br/>
                        Amount to Deposit<br/>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="depositAmount" 
                            placeholder="Amount to Deposit" 
                            value={amount} 
                            onChange={e => setAmount(e.currentTarget.value)}
                            step="0.01"
                            min="0"
                        /><br/>
                        <button type="submit" className="btn btn-light" onClick={submitDeposit}>
                            Make Deposit
                        </button>
                        <button type="submit" className="btn btn-light ms-2" onClick={cancelActivity}>
                            Cancel
                        </button>
                    </>
                ) : (
                    // Withdrawal Form
                    <>
                        <h5>Withdraw Funds</h5><br/>
                        <p>Account Balance: ${formatBalance(balance)}</p><br/>
                        Amount to Withdraw<br/>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="withdrawalAmount" 
                            placeholder="Amount to Withdraw" 
                            value={amount} 
                            onChange={e => setAmount(e.currentTarget.value)}
                            step="0.01"
                            min="0"
                            max={balance}
                        /><br/>
                        <button type="submit" className="btn btn-light" onClick={submitWithdrawal}>
                            Make Withdrawal
                        </button>
                        <button type="submit" className="btn btn-light ms-2" onClick={cancelActivity}>
                            Cancel
                        </button>
                    </>
                )
                }
            />
        </div>    
    );
}
