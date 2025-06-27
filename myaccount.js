// myaccount.js

function MyAccount() {
    const ctx = React.useContext(UserContext);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');

    React.useEffect(() => {
        if (ctx.currentUser) {
            setName(ctx.currentUser.name);
            setEmail(ctx.currentUser.email);
            setPassword(ctx.currentUser.password);
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
    
    function editAccount(){
        setShow(false);
    }

    function updateAccount(){
        console.log(name,email);
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;

        // Find and update the user in the users array
        const userIndex = ctx.users.findIndex(user => user.email === ctx.currentUser.email);
        if (userIndex !== -1) {
            ctx.users[userIndex] = {
                ...ctx.users[userIndex],
                name,
                email,
                password
                // balance and admin stay unchanged from the original user object
            };
            // Update current user as well
            ctx.setCurrentUser(ctx.users[userIndex]);
        }

        setShow(true); // Switch back to view mode
        setStatus('Account updated successfully!');
        setTimeout(() => setStatus(''), 3000);

    }

    function cancelEdit(){
    // Reset form to current user data
        setName(ctx.currentUser.name);
        setEmail(ctx.currentUser.email);
        setPassword(ctx.currentUser.password);
        setShow(true); // Switch back to view mode
    }

    return(
        <div className="p-4">
            <Card 
                bgcolor="primary"
                header="My Account"
                status={status}
                body={show ? (
                    <>
                    <h5>Welcome {ctx.currentUser.name}!</h5><br/>
                    <p>Email address: {email}</p><br/>
                    <p>Password: {password}</p><br/>
                    <button type="submit" className="btn btn-light" onClick={editAccount}>Edit Account</button>
                    </>
                ):(
                    <>
                    Name<br/>
                    <input type="input" className="form-control" id="name" placeholder={name} value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                    Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder={email} value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
                    Password<br/>
                    <input type="input" className="form-control" id="password" placeholder={password} value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
                    <button type="submit" className="btn btn-light" onClick={updateAccount}>Update Account</button>
                    <button type="submit" className="btn btn-light" onClick={cancelEdit}>Cancel</button>
                    </>
                )
                }
            />
        </div>    
    );
}
