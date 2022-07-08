import { Route, Routes } from 'react-router-dom';

import MainPage from '@pages/MainPage';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route key='main' path='/' element={<MainPage />} />
        </Routes>
    );
};

export default RoutesComponent;
