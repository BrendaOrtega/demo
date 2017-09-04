import React, { Component } from 'react';
import './Pestana.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import SwipeableViews from 'react-swipeable-views';
import FontAwesome from 'react-fontawesome';
import Paper from 'material-ui/Paper';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};
const style = {

  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Pestana extends Component {
		 constructor(props) {
	    super(props);
	    this.state = {
	      slideIndex: 0,
	    };
	  }

	  handleChange = (value) => {
	    this.setState({
	      slideIndex: value,
	    });
	  };
    render(){
        return(
            <div>
            	<div>
			        <Tabs
			          onChange={this.handleChange}
			          value={this.state.slideIndex}
			        >
			          <Tab
			          	icon={ <FontAwesome name='ravelry' />}
			           	label="Ganado" value={0} 
			           />
			          <Tab 
			          	icon={ <FontAwesome name='book' />}
			          label="Inventario" value={1} />
			          <Tab 
			          	icon={ <FontAwesome name='calculator' />}
			          label="Contabilidad" value={2} />
			           <Tab label="" value={3} />
			           <Tab label="" value={4} />
			        </Tabs>
			        <SwipeableViews
			          index={this.state.slideIndex}
			          onChangeIndex={this.handleChange}
			        >
			          <div>
			             <Paper style={style, {float:'left', width:'20%', height:'100vh'}} >
			           
							    <List >
							    
							      <ListItem primaryText="Cabezas" leftIcon={<ContentInbox />} />
							      <ListItem primaryText="Cerdos" leftIcon={<ActionGrade />} />
							      <ListItem primaryText="Gallinas" leftIcon={<ContentSend />} />
							      <ListItem primaryText="Borregos" leftIcon={<ContentDrafts />} />
							      <ListItem primaryText="Vacas" leftIcon={<ContentInbox />} />
							    </List>
							    <Divider />
			             </Paper>
			             <Paper style={{width:'75%', marginLeft:'22.5%'}}>
			             	<Table>
							    <TableHeader>
							      <TableRow>
							        <TableHeaderColumn>Ano</TableHeaderColumn>
							        <TableHeaderColumn>Cabezas</TableHeaderColumn>
							        <TableHeaderColumn>Ingreso</TableHeaderColumn>
							        <TableHeaderColumn>Egreso</TableHeaderColumn>
							        <TableHeaderColumn>Saldo</TableHeaderColumn>
							      </TableRow>
							    </TableHeader>
							    <TableBody>
							      <TableRow>
							        <TableRowColumn>2017</TableRowColumn>
							        <TableRowColumn>Enero</TableRowColumn>
							        <TableRowColumn>Employed</TableRowColumn>
							        <TableRowColumn>Employed</TableRowColumn>
							         <TableRowColumn>Employed</TableRowColumn>
							      </TableRow>
							      <TableRow>
							        <TableRowColumn>2016</TableRowColumn>
							        <TableRowColumn>Febrero</TableRowColumn>
							        <TableRowColumn>Unemployed</TableRowColumn>
							        <TableRowColumn>Employed</TableRowColumn>
							         <TableRowColumn>Employed</TableRowColumn>
							      </TableRow>
							      <TableRow>
							        <TableRowColumn>2014</TableRowColumn>
							        <TableRowColumn>Stephanie Sanders</TableRowColumn>
							        <TableRowColumn>Employed</TableRowColumn>
							        <TableRowColumn>Employed</TableRowColumn>
							         <TableRowColumn>Employed</TableRowColumn>
							      </TableRow>
							      <TableRow>
							        <TableRowColumn>2013</TableRowColumn>
							        <TableRowColumn>Steve Brown</TableRowColumn>
							        <TableRowColumn>Employed</TableRowColumn>
							        <TableRowColumn>Employed</TableRowColumn>
							         <TableRowColumn>Employed</TableRowColumn>
							      </TableRow>
							      <TableRow>
							        <TableRowColumn>2012</TableRowColumn>
							        <TableRowColumn>Christopher Nolan</TableRowColumn>
							        <TableRowColumn>Unemployed</TableRowColumn>
							        <TableRowColumn>Employed</TableRowColumn>
							         <TableRowColumn>Employed</TableRowColumn>
							      </TableRow>
							    </TableBody>
							  </Table>
			             </Paper>
			          </div>

			          <div style={styles.slide}>
			            slide n°2
			          </div>

			          <div style={styles.slide}>
			            slide n°3
			          </div>

			          <div style={styles.slide}>
			            slide n°3
			          </div>

			          <div style={styles.slide}>
			            slide n°3
			          </div>
			        </SwipeableViews>
			      </div>  	
            </div>
        );
    }
}

export default Pestana;