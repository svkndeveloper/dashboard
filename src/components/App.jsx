import { Route, Routes, Navigate} from 'react-router-dom';
import { RegisterPage } from 'pages/Register';
import { LoginPage } from 'pages/Login';
import { NotFound } from 'pages/NotFound/NotFound';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Dashboard } from 'pages/Dashboard';
import { refreshUser } from "redux/auth/operations";
import { useDispatch,useSelector } from "react-redux";
import { useEffect} from "react";
import { PageLoader } from './Loaders/PageLoader/PageLoader';
import { useNavigate } from 'react-router-dom';

export const App = () => {
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const isPending = useSelector(state => state.auth.pending);
  const error = useSelector(state => state.auth.error);
  const navigate = useNavigate()
  useEffect(() => {
    if (!error) return;
     navigate('/notfound')
    }, [error, navigate]);
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(refreshUser());
    }, [dispatch]);
  return isRefreshing || isPending ? (
   <PageLoader/>
  ) : (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} /> 
      <Route path="/register" element={<RestrictedRoute redirectTo="/dashboard" component={<RegisterPage />} />} />
      <Route path="/login" element={<RestrictedRoute redirectTo="/dashboard" component={<LoginPage />} />} />
        <Route path="/dashboard" element={<PrivateRoute redirectTo="/login" component={<Dashboard />} />} />
        <Route path='/notfound' element={<NotFound/>} />
     </Routes>
   
  );
};
