import { Routes, Route } from "react-router-dom";
import CustomersList from "../pages/Customers/CustomersList.jsx";
import CustomerTransactions from "../pages/Customers/CustomerTransactions.jsx";

const routes = [
  { path: "/", element: <CustomersList/> },
  { path: "/customers", element: <CustomersList /> },
  { path: "/customers/:id/transactions", element: <CustomerTransactions /> },
];

function AppRoutes() {
    return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
    )
}

export default AppRoutes

