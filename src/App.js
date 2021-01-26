import Routes from './routes'
import Header from './components/Header';

import 'bootswatch/dist/flatly/bootstrap.css';


import './style.css';

const App = () => (
    <div className="App">
     <Header />
     <Routes />
    </div>

);


export default App;