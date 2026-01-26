# 🚀 Full-Stack Learning Lab

**Building modern web apps from scratch**

> Full-Stack Playground: Where React meets real-world routing and authentication

## 📚 Overview

This repository is a collection of full-stack learning experiments designed to practice and master React fundamentals, routing, authentication, and protected routes. Each experiment builds on previous knowledge, creating a solid foundation for production-ready applications.

**Learning by Building:** Every commit is a step towards mastery  
**From Console Logs to Production Patterns:** A developer's journey

---

## 📁 Project Structure

### **Exp1** - Foundation First
*Mastering React basics with components, state, and styling*

Simple yet Powerful: A stepping stone to understand React fundamentals.

- `App.jsx` - Main application component
- `App.css` - Global styling
- `Pages/` - Dashboard, alerts, and logging features
  - `dashboard.jsx` - Dashboard view
  - `high.jsx` - High priority items
  - `low.jsx` - Low priority items
  - `logs.js` - Logging data

### **Experiment-2** - Beyond the Basics
*Security Matters: Implementing authentication and protected routes like a pro*

Explore routing, context API, and secure access control patterns.

#### Key Features:
- **Routing & Protected Routes** - Secure page access with authentication
- **Context API** - Global state management for authentication
- **Responsive Dashboard** - Multiple dashboard views (Analytics, Layout, Settings, Summary)
- **User Authentication** - Login/Logout functionality

#### Folder Structure:
```
Experiment-2/Routing_and_Protectec_routes/
├── src/
│   ├── components/
│   │   └── Header.jsx - Navigation header
│   ├── context/
│   │   └── AuthContext.jsx - Authentication context
│   ├── pages/
│   │   ├── Login.jsx - Login page
│   │   ├── Logout.jsx - Logout handler
│   │   ├── DashboardLayout.jsx - Main dashboard layout
│   │   ├── DashboardAnalytics.jsx - Analytics view
│   │   ├── DashboardSettings.jsx - Settings view
│   │   ├── DashboardSummary.jsx - Summary view
│   │   └── Logs.jsx - System logs display
│   ├── routes/
│   │   └── ProtectedRoute.jsx - Protected route wrapper
│   ├── data/
│   │   └── logs.js - Sample log data
│   ├── App.jsx - Main app with routing
│   └── main.jsx - Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🎯 Learning Outcomes

By working through these experiments, you'll master:

✅ React fundamentals (Components, State, Props)  
✅ Styling with CSS  
✅ React Router for page navigation  
✅ Context API for state management  
✅ Authentication & Authorization patterns  
✅ Protected routes implementation  
✅ Real-world dashboard layouts  

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd 23AIT_KRG_G2_23BAI70628_ROHIT-YADAV_Full-Stack
```

2. Navigate to Experiment-2
```bash
cd Experiment-2/Routing_and_Protectec_routes
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Technology Stack

- **React** - UI Library
- **Vite** - Build tool & dev server
- **React Router** - Client-side routing
- **Context API** - State management
- **CSS** - Styling

---

## 📝 Key Concepts Implemented

### Protected Routes
Routes that require authentication. Unauthorized users are redirected to the login page.

### Context API
Global state management for user authentication status without prop drilling.

### Responsive Dashboard
Multiple views (Analytics, Layout, Settings, Summary) with organized layouts.

### Authentication Flow
- Login → Store auth state → Access protected routes → Logout

---

## 💡 Tips for Learning

1. **Read the code carefully** - Start with `AuthContext.jsx` to understand state management
2. **Trace the auth flow** - Follow how login → context → protected routes work
3. **Experiment** - Try adding new routes, components, or features
4. **Break things** - Test edge cases and error scenarios
5. **Commit often** - Track your learning progress with git commits

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [React Router Guide](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
- [Context API Tutorial](https://react.dev/reference/react/createContext)

---

## 🤝 Contributing

This is a personal learning project. Feel free to fork, modify, and experiment!

---

## 📄 License

Educational & Learning Purpose

---

**Practice Makes Perfect:** Experimenting with modern web technologies ⚡

Happy Coding! 🎉
