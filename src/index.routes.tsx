import React, { useContext } from 'react';
import DrawerRoute from './Drawer.routes';
import {Context} from './context/AuthContext'
import Routes from './Routes';

const IndexRoutes: React.FC = () => {
    const {authenticated} = useContext(Context);

  return !!authenticated ? <DrawerRoute /> : <Routes />;
}

export default IndexRoutes;