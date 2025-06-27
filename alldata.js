// alldata.js

function AllData() {
    const ctx = React.useContext(UserContext);
    
    return(
        <div className="p-4" style={{maxWidth: "800px"}}>
            <h2>All Users Data</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {ctx.users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>${user.balance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
