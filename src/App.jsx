// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './stores/store';
// import EmployeeList from './components/EmployeeList/EmployeeList';
// import EmployeeForm from './components/EmployeeForm/EmployeeForm';
// import Login from './components/Login/Login';
// import ProtectedRoutes from './routes/ProtectedRoute';
// import ErrorBoundary from './components/ErrorBoundary';
// import './styles/global.css';

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <div className="app">
//           <ErrorBoundary>
//             <Routes>
//               <Route path="/login" element={<Login />} />
//               <Route path="/*" element={<ProtectedRoutes />} />
//             </Routes>
//           </ErrorBoundary>
//         </div>
//       </Router>
//     </Provider>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';
import EmployeeList from './components/EmployeeList/EmployeeList';
import EmployeeForm from './components/EmployeeForm/EmployeeForm';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/global.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<EmployeeList />} />
              <Route path="/add-employee" element={<EmployeeForm />} />
            </Routes>
          </ErrorBoundary>
        </div>
      </Router>
    </Provider>
  );
}

export default App;