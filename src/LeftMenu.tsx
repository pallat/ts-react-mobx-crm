import * as React from 'react';
import {observer} from 'mobx-react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';


const iconStyles = {
  marginRight: 10,
};

const paperStyle = {
  display: 'inline-block',
  margin: '10px 10px 10px 0',
};

const style = {
    textAlign: 'left',
}

@observer
export default class LeftMenu extends React.Component<any, any> {
    onClickMenu = () => {this.props.leftMenuStore.state = !this.props.leftMenuStore.state};

    render() {
        return (
            <Drawer width={250} open={true} style={style} >
                <FontIcon className="material-icons" style={iconStyles} color={blue500}
                onClick={this.onClickMenu}>
                menu
                </FontIcon><br />
                <Paper style={paperStyle}>
                <TextField
                    hintText="66xxxxxxxxx"
                    /><br />
                <Menu desktop={true} width={250}>
                    <MenuItem primaryText="Registration" />
                    <MenuItem primaryText="Change Profile" />
                    <MenuItem primaryText="Change Package" />
                    <MenuItem primaryText="Change SIM/Device" />
                </Menu>
                </Paper>
            </Drawer>
        );
    }
}