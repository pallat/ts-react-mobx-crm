import * as React from 'react';
import {observer} from 'mobx-react';
import {Router, Route, Link, IndexRoute} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftMenu from './LeftMenu';
import MyToolbar from './Toolbar';

const Landing = () => <div>Landing</div>;
const Check = () => <div>Check</div>;

@observer
export default class Home extends React.Component <any, any> {
    componentWillMount() {
    }
    componentDidMount() {
    }
    
    render() {
        return <div>
            Landing Page
            {this.props.children}
        </div>;
    }
}