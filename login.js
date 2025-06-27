// login.js

function Login() {
    const ctx = React.useContext(UserContext);
    const [show, setShow] = React.useState(!ctx.currentUser);
    const [status, setStatus] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showResetPassword, setShowResetPassword] = React.useState(false);
    const [name, setName] = React.useState('');
    const [isAdmin, setIsAdmin] = React.useState(false);

    function validate(field, label){
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }

    function authenticate(email, password){
        let foundUser = ctx.users.find(user => user.email === email);
            if (!foundUser) {
                return "email_not_found"; 
            }
            if (foundUser.password !== password) {
                return "wrong_password";
            }
            return foundUser; 
    }

    function handleLogin(){
        console.log(email);
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;

        let result = authenticate(email, password);

            if (result === "email_not_found") {
                setStatus('Error: Email doesn’t exist, create account');
                setTimeout(() => setStatus(''),3000);
                return;
            }
            if (result === "wrong_password") {
                setShowResetPassword(true); // Show password reset option
                setShow(false);
                return;
            }

            // Success! result is the user object
            setName(result.name);
            setIsAdmin(result.admin === 1); // Comparison that returns true OR false
            setShowResetPassword(false); 
            ctx.setCurrentUser(result); 
            setShow(false);
    }

    function clearForm(){
        setEmail('');
        setPassword('');
        setShow(true);
    }

    function handleResetPassword(){
        alert("In a real production environment, you would receive an email with instructions to reset your password.");
    
        // After user clicks OK on the alert, go back to login form
        setShowResetPassword(false);
        clearForm();
    }
             
    function handleLogout(){
        setEmail('');
        setPassword('');
        setIsAdmin(false);
        setShowResetPassword(false);
        ctx.setCurrentUser(null);       // Clear the currentUser in context
        setShow(true);
    }

    return(
        <div className="p-4">
            <Card 
                bgcolor="primary"
                header={show ? "Login" : "Logout"}
                status={status}
                body={show ? (
                    <>
                    Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
                    Password<br/>
                    <input type="input" className="form-control" id="password" placeholder="Enter passsword" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
                    <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
                    </>
                ) : showResetPassword ? (
                    <>
                    <h5>Password was incorrect</h5>
                        <button type="submit" className="btn btn-light" onClick={handleResetPassword}>Reset Password</button>
                        <button type="submit" className="btn btn-light" onClick={clearForm}>Try Again</button>
                    </>
                ):(
                    <>
                    <h5>Welcome {ctx.currentUser.name}!</h5>
                    <button type="submit" className="btn btn-light" onClick={handleLogout}>Logout</button>
                    </>
                )
                }
            />
        </div>    
    )
}
