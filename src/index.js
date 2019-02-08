import ReactDOM from 'react-dom';
import routes from './routes';
import './theme/globalStyle';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

ReactDOM.render( routes,
  document.getElementById('root')
);

registerServiceWorker();
