import './App.css';
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import Header from './component/Header';
import Recharge from './component/Recharge';
import Payment from './component/Payment';
import Jio from './component/Jio';

function App() {
    return ( <
        BrowserRouter >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Jio / >
        }
        /> <
        Route path = "/recharge"
        element = { < Recharge / >
        }
        /> <
        Route path = "/payment"
        element = { < Payment / >
        }
        /> <
        /Routes> <
        /BrowserRouter>
    );
}

export default App;