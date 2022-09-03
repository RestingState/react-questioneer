import { Route, Routes as ReactRouterDomRoutes } from 'react-router-dom';
import Home from '../../pages/home/home';

const Routes = () => {
  return (
    <ReactRouterDomRoutes>
      <Route path='/*' element={<Home />} />
    </ReactRouterDomRoutes>
  );
};

export default Routes;
