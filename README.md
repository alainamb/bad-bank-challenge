# Bad Bank - React SPA Banking Application

## 📚 About This Project

This project was completed as part of the **MIT xPRO's Professional Certificate in Coding: Full Stack Development with MERN** program hosted by Emeritus. The “Bad Bank” challenge demonstrates fundamental concepts in React development, state management, and single-page application architecture.

## 🎯 Project Overview

Bad Bank is a simple banking application built as a Single Page Application (SPA) using React. It simulates basic banking operations including account creation, user authentication, deposits, withdrawals, and account management. The application showcases core React concepts and modern web development practices.

## ✨ Features

- **User Authentication**: Secure login/logout functionality
- **Account Management**: Create new accounts and edit existing profile information
- **Banking Operations**: 
  - Make deposits
  - Make withdrawals with insufficient funds protection
  - Real-time balance updates
- **Admin Dashboard**: View all user accounts and data (admin-only feature)
- **Responsive Design**: Mobile-friendly interface using Bootstrap
- **State Management**: React Context API for global state management
- **Client-side Routing**: React Router with hash-based routing for GitHub Pages compatibility

## 🛠️ Technologies Used

- **Frontend Framework**: React 17
- **Routing**: React Router DOM 5
- **Styling**: Bootstrap 5
- **State Management**: React Context API and Hooks
- **Build Tool**: Babel Standalone (browser compilation)
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic web server (optional, can run directly in browser)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bad-bank.git
cd bad-bank
```

2. Open `index.html` in your web browser, or serve it using a local web server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

3. Navigate to `http://localhost:8000` in your browser

## 🌐 Live Demo

[View Live Demo](https://alainamb.github.io/bad-bank-challenge)

### 🔐 Default Admin Account

For testing purposes, use these credentials:
- **Email**: admin@email.com
- **Password**: secret

## 📁 Project Structure

```
bad-bank-challenge/
├── index.html              # Main HTML file
├── index.js                # React app entry point and routing
├── context.js              # React Context and Card component
├── navbar.js               # Navigation component
├── home.js                 # Landing page component
├── createaccount.js        # Account creation component
├── login.js                # Login/logout component
├── myaccount.js            # Account management component
├── accountactivity.js      # Deposit/withdrawal component
├── alldata.js              # Admin data view component
├── bank.png                # Bank icon/logo
└── README.md               # Project documentation
```

## 🎓 Learning Objectives Demonstrated

This project showcases the following skills and concepts:

- **React Fundamentals**: Components, JSX, props, and state
- **React Hooks**: useState, useEffect, useContext
- **State Management**: Context API for global state
- **Event Handling**: Form submissions and user interactions
- **Conditional Rendering**: Dynamic UI based on application state
- **Component Communication**: Parent-child and sibling component data flow
- **Client-side Routing**: Single Page Application navigation
- **Form Validation**: Input validation and error handling
- **Responsive Design**: Mobile-first approach with Bootstrap
- **Authentication Flow**: Login/logout state management

## ⚠️ Important Notes

- This is an educational project and **NOT intended for production use**
- Data is stored in browser memory only and will be lost on page refresh
- No real security measures are implemented
- Passwords are stored in plain text for demonstration purposes only

## 📖 Course Information

This project was developed as part of the MIT xPRO Professional Certificate in Coding: Full Stack Development with MERN program. The course covers:

- Frontend development with React
- Backend development with Node.js and Express
- Database management with MongoDB
- Full-stack application development
- Modern web development best practices

## 📄 License

This project is for educational purposes only. Created as part of the MIT xPRO coursework.

## 🤝 Acknowledgments

- MIT xPRO and Emeritus for providing the educational framework
- Course instructors and facilitators

---

*This project demonstrates competency in React development and serves as a foundation for more complex full-stack applications.*
