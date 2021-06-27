import ReactDOM from 'react-dom';
import routes from './routes';
import './theme/globalStyle';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( routes,
  document.getElementById('root')
);

registerServiceWorker();
