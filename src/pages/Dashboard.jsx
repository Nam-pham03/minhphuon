import EmployeeForm from '../components/EmployeeForm/EmployeeForm';
import EmployeeList from '../components/EmployeeList/EmployeeList';
import ErrorBoundary from '../components/ErrorBoundary';

function Dashboard() {
  return (
    <ErrorBoundary>
      <h1>Employee Management</h1>
      <EmployeeForm />
      <EmployeeList />
    </ErrorBoundary>
  );
}

export default Dashboard;