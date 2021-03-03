import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import routes from './routes/index';

function App() {
  return <HashRouter>{renderRoutes(routes)}</HashRouter>;
}

export default App;
