import React, { useContext } from 'react';
import AppRoutes from './App.routes';
import {Context} from './context/AuthContext'
import Routes from './Routes';

const IndexRoutes: React.FC = () => {
    const {authenticated} = useContext(Context);

  return !!authenticated ? <AppRoutes /> : <Routes />;
}

export default IndexRoutes;