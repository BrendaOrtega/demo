import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'antd/dist/antd.css';


const Main = () => (
    <MuiThemeProvider >
        <App />
    </MuiThemeProvider>
);

const WithRouter = () => (
    <BrowserRouter>
        <Main />
    </BrowserRouter>
);


ReactDOM.render(<WithRouter />, document.getElementById('root'));

registerServiceWorker();

