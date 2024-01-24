import '../styles/globals.css';
import Sidebar from '../components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
// Import other pages as needed

function MyApp({ Component, pageProps }) {
    return (
        <Router>
            <div className="app-container">
                <Sidebar />
                <main>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        {/* Define other routes here */}
                    </Switch>
                    <Component {...pageProps} />
                </main>
            </div>
        </Router>
    );
}

export default MyApp;
