import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { ROUTES_CONFIG } from './routes.config';

const Routes: React.FC = () => {
    return (
        <RouterRoutes>
            {Object.values(ROUTES_CONFIG).map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
            ))}
        </RouterRoutes>
    );
};

export default Routes;
