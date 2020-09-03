import React from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const LoaderScreen = () => {
  const { tryLocalSignIn } = React.useContext(AuthContext);
  React.useEffect(() => {
    tryLocalSignIn();
  }, []);

  return null;
};

export default LoaderScreen;
