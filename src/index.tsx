import * as React from "react";
import * as ReactDom from "react-dom";
import {observable} from "mobx";
import {observer} from "mobx-react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from "react-tap-event-plugin";
import {Login} from './Login';
import {LoginStore} from './store/LoginStore';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import Home from './Home';

injectTapEventPlugin();

let loginStore = new LoginStore();

const LoginPage = () => <Login loginStore={loginStore} />;
// const LandingPage = () => <h1>Landing111111111111111111111111111111111111111111111111......</h1>;
const LandingPage = () => <Home />;

@observer
class App extends React.Component<any, any> {
    render() {
        return <div>
        <MuiThemeProvider>
        <Router history={browserHistory}>
            <Route path='/' component={LoginPage} />
            <Route path='/landing' component={LandingPage} />
        </Router>
        </MuiThemeProvider>
        {this.props.children}
        </div>;
    }
}

ReactDom.render(<App />, document.getElementById('root'));

