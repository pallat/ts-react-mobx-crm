import * as React from 'react';
import {observer} from 'mobx-react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {AppBar} from 'material-ui/AppBar';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24,
};

const toolbarStyle = {
  margin: '0px 0px 0px 0px',
}

@observer
export default class MyToolbar extends React.Component<any, any> {

  handleChange = (event:any, index:any, value:any) => this.setState({value});

  onClickMenu = () => {
    this.props.leftMenuStore.state = !this.props.leftMenuStore.state; 
  }

  render() {
    return (
      <Toolbar style={toolbarStyle} >
        <ToolbarGroup firstChild={true}>
            <FontIcon className="material-icons" style={iconStyles} color={blue500}
            onClick={this.onClickMenu}>
            menu
            </FontIcon>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}