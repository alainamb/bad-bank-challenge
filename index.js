// index.js

function Spa(){

    const [users, setUsers] = React.useState([{name:'Administrator',email:'admin@email.com',password:'secret',balance:100,admin:1}]);
    const [currentUser, setCurrentUser] = React.useState(null);

    function updateUserBalance(newBalance) {
    // Update the current user's balance in the users array
    setUsers(prevUsers => 
        prevUsers.map(user => 
            user.email === currentUser.email 
                ? {...user, balance: newBalance}
                : user
        )
    );

    // Also update currentUser
    setCurrentUser(prevUser => ({...prevUser, balance: newBalance}));
    }

    return (
        <HashRouter>
            <UserContext.Provider value={{users, setUsers, currentUser, setCurrentUser, updateUserBalance}}>
                <NavBar/>
                    <Route path="/" exact component={Home} />
                    <Route path="/CreateAccount/" component={CreateAccount} />
                    <Route path="/login/" component={Login} />
                    <Route path="/myaccount/" component={MyAccount} />
                    <Route path="/accountactivity/" component={AccountActivity} />
                    <Route path="/alldata/" component={AllData} />
            </UserContext.Provider>
        </HashRouter>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)
