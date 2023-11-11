import { Route, Routes, Navigate} from 'react-router-dom';
import { RegisterPage } from 'pages/Register';
import { LoginPage } from 'pages/Login';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Dashboard } from 'pages/Dashboard';
import { refreshUser } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { useEffect} from "react";

export const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(refreshUser());
    }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} /> 
      <Route path="/register" element={<RestrictedRoute redirectTo="/dashboard" component={<RegisterPage />} />} />
      <Route path="/login" element={<RestrictedRoute redirectTo="/dashboard" component={<LoginPage />} />} />
       <Route path="/dashboard" element={<PrivateRoute redirectTo="/login" component={<Dashboard />} /> } />
     </Routes>
   
  );
};
