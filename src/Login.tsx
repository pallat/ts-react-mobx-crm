import * as React from "react";
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {LoginStore} from './store/LoginStore';
import {Link} from 'react-router';

interface Props {
    loginStore: LoginStore
}

@observer
export class Login extends React.Component<Props, any> {
    componentDidMount() {
    }

    render() {
      return <div>
        <h1>Please login</h1>
        <TextField
            id="text-field-username"
            value={this.props.loginStore.username}
            floatingLabelText="Username"
            onChange={this.usernameChange}
            errorText={this.usernameRequireChecking()}
            /><br />        
        <TextField
            id="text-field-password"
            value={this.props.loginStore.password}
            floatingLabelText="Password"
            onChange={this.passwordChange}
            errorText={this.passwordRequireChecking()}
            type="password"
            /><br />        
        <br/><Link to={`/landing`}><RaisedButton label="Login" onClick={this.loginClick} /></Link>
      </div>;
    }

    usernameChange = (e: any) => {
        this.props.loginStore.username = e.target.value;
    }

    passwordChange = (e: any) => {
        this.props.loginStore.password = e.target.value;
    }

    loginClick =(e: any) => {
        // this.props.leftMenuStore.state = true;
    }

    usernameRequireChecking = () => {
        if (this.props.loginStore.username === "") {
            return "This field is required";
        }
    }

    passwordRequireChecking = () => {
        if (this.props.loginStore.password === "") {
            return "This field is required";
        }
    }
}