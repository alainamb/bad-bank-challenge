// home.js

function Home() {
    return(
        <div className="p-4">
            <Card
            bgcolor="primary"
            txtcolor="white"
            header="Bad Bank Landing Page"
            title="Welcome to the Bad Bank"
            body={(
                <>
                    <p className="card-text">
                        This "Bad Bank" challenge was completed as part of the MIT xPRO's Professional Certificate in Coding: Full Stack Development with MERN program hosted by Emeritus. It simulates basic banking operations including account creation, user authentication, deposits, withdrawals, and account management.
                    </p>
                    <p className="card-text">
                        <strong>For testing purposes, use these credentials:</strong><br/>
                        Email: admin@email.com<br/>
                        Password: secret
                    </p>
                    <p className="card-text">
                        To learn more about the project, check out my <a href="https://github.com/alainamb/bad-bank-challenge" target="_blank" rel="noopener noreferrer" className="text-warning">GitHub repo</a>.
                    </p>
                    <img src="bank.png" className="img-fluid" alt="Bad Bank Application" />
                </>
            )}
            />
            </div> 
    );
}
