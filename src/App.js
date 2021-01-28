import Routes from './routes'
import Header from './components/Header';

import 'toastr/build/toastr.min'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../src/custom.css'
import 'toastr/build/toastr.css'

import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// import './style.css';

const App = () => (
    <div className="App">
     <Header />
     <Routes />
    </div>

);


export default App;