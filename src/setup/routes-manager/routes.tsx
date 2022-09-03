import Home from 'pages/home/home';
import { Route, Routes as ReactRouterDomRoutes } from 'react-router-dom';

const Routes = () => {
  return (
    <ReactRouterDomRoutes>
      <Route path='/*' element={<Home />} />
    </ReactRouterDomRoutes>
  );
};

export default Routes;
