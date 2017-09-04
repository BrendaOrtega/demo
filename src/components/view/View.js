import React, { Component } from 'react';
import './View.css';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';


class View extends Component {
	state = {
    open: false,
	bovinos:{
    		si:'',
    		en:'',
    		sa:''
    	},
    equinos:{
    		si:'',
    		en:'',
    		sa:''
    	},
    porcinos:{
    		si:'',
    		en:'',
    		sa:''
    	}
	  };

	  handleOpen = () => {
	    this.setState({open: true});
	  };

	  handleClose = () => {
	    this.setState({open: false});
  	};

  	inputsBovinos = (e) => {
  		const field = e.target.name;
  		const valor = e.target.value;
  		let bovinos = this.state.bovinos;
  		bovinos[field] = valor;
  		this.setState({bovinos});
  		console.log(this.state.bovinos);
  	};
  		inputsEquinos = (e) => {
  		const field = e.target.name;
  		const valor = e.target.value;
  		let equinos = this.state.equinos;
  		equinos[field] = valor;
  		this.setState({equinos});
  		console.log(this.state.equinos);
  	};
  		inputsPorcinos = (e) => {
  		const field = e.target.name;
  		const valor = e.target.value;
  		let porcinos = this.state.porcinos;
  		porcinos[field] = valor;
  		this.setState({porcinos});
  		console.log(this.state.porcinos);
  	};

    render(){
    	const actions = [
	      <FlatButton
	        label="Cancel"
	        primary={true}
	        onClick={this.handleClose}
	      />,
	      <FlatButton
	        label="Submit"
	        primary={true}
	        keyboardFocused={true}
	        onClick={this.handleClose}
	      />,
	    ];

	    const {bovinos} = this.state;
	     const {equinos} = this.state;
	      const {porcinos} = this.state;

        return(
            <div className='excel'>
            	<Table className='tag'>
					<TableHeader>
					<TableRow>
				        <TableHeaderColumn>Unidades</TableHeaderColumn>
				        <TableHeaderColumn>Enero</TableHeaderColumn>
				        <TableHeaderColumn>Febrero</TableHeaderColumn>
				        <TableHeaderColumn>Marzo</TableHeaderColumn>
				        <TableHeaderColumn>Abril</TableHeaderColumn>
				        <TableHeaderColumn>Mayo</TableHeaderColumn>
				        <TableHeaderColumn>Junio</TableHeaderColumn>
				        <TableHeaderColumn>Julio</TableHeaderColumn>
				        <TableHeaderColumn>Agosto</TableHeaderColumn>
				        <TableHeaderColumn>	Septiembre</TableHeaderColumn>
				        <TableHeaderColumn>Octubre</TableHeaderColumn>
				        <TableHeaderColumn>Noviembre</TableHeaderColumn>
				     <TableHeaderColumn>Diciembre</TableHeaderColumn>
				      <TableHeaderColumn>Saldo Final</TableHeaderColumn>
					</TableRow>		     
				    </TableHeader>
				     <TableBody>
							      <TableRow>
							        <TableRowColumn>
							        	<p>Saldo Inicial</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							         <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							         <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p></p>
							        </TableRowColumn>
							        
							      
							      </TableRow>
							      <TableRow>
							        <TableRowColumn><p>Entradas</p></TableRowColumn>
							               <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							         <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							         <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p>60400</p>
							        </TableRowColumn>
							      </TableRow>
							      <TableRow>
							        <TableRowColumn><p>Salidas</p></TableRowColumn>
							               <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							         <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							         <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p>60400</p>
							        </TableRowColumn>
							      </TableRow>
							      <TableRow>
							        <TableRowColumn><p>Saldo Final</p></TableRowColumn>
							               <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							         <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							         <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p>60400</p>
							        </TableRowColumn>
							      </TableRow>
						
							    </TableBody>
				</Table>
				<div className='resumen'>
				       	<Table className='tag'>
					<TableHeader>
					<TableRow>
				        <TableHeaderColumn>Unidades</TableHeaderColumn>
				        <TableHeaderColumn>Enero</TableHeaderColumn>
				        <TableHeaderColumn>Febrero</TableHeaderColumn>
				        <TableHeaderColumn>Marzo</TableHeaderColumn>
				        <TableHeaderColumn>Abril</TableHeaderColumn>
				        <TableHeaderColumn>Mayo</TableHeaderColumn>
				        <TableHeaderColumn>Junio</TableHeaderColumn>
				        <TableHeaderColumn>Julio</TableHeaderColumn>
				        <TableHeaderColumn>Agosto</TableHeaderColumn>
				        <TableHeaderColumn>	Septiembre</TableHeaderColumn>
				        <TableHeaderColumn>Octubre</TableHeaderColumn>
				        <TableHeaderColumn>Noviembre</TableHeaderColumn>
				     <TableHeaderColumn>Diciembre</TableHeaderColumn>
				      <TableHeaderColumn>Saldo Final</TableHeaderColumn>
					</TableRow>		     
				    </TableHeader>
				     <TableBody>
							      <TableRow>
							        <TableRowColumn>
							        	<p>Proyección compra</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							         <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							         <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p></p>
							        </TableRowColumn>
							        
							      
							      </TableRow>
							      <TableRow>
							        <TableRowColumn><p>Proyección venta</p></TableRowColumn>
							               <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							         <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							         <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							           <TableRowColumn>
							        	<p>60400</p>
							        </TableRowColumn>
							      </TableRow>
							      
							    </TableBody>
				</Table>
				</div>
				<div className='resumen '>
				     	<Table  className='tag' style={{width:'25%'}}>>
					<TableHeader>
					<TableRow>
				        <TableHeaderColumn>Data</TableHeaderColumn>
				        <TableHeaderColumn>Kilos</TableHeaderColumn>
				        <TableHeaderColumn>Precio</TableHeaderColumn>
				        <TableHeaderColumn>Total</TableHeaderColumn>
				     
					</TableRow>		     
				    </TableHeader>
				     <TableBody>
							      <TableRow>
							        <TableRowColumn>
							        	<p>Entrada Promedio</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							       
							        
							      
							      </TableRow>
							      <TableRow>
							        <TableRowColumn><p>Salida Promedio</p></TableRowColumn>
							               <TableRowColumn>
							        	<p>3000</p>
							        	
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>4400</p>
							        </TableRowColumn>
							        <TableRowColumn>
							        	<p>5400</p>
							        </TableRowColumn>
							         
							      </TableRow>
							    </TableBody>
				</Table>
				</div>

				<div className='captura'>
					<button onClick={this.handleOpen} className='btn'>Capturar</button>
					 <Dialog
			          title="Captura de datos"
			          actions={actions}
			          modal={false}
			          open={this.state.open}
			          onRequestClose={this.handleClose}
			          autoScrollBodyContent={true}>
        				<div className='formulario'>
        					<form >
							 <div className='sel'> 	
							  	<select className='mes' >
								  <option value="" default>----</option>
								  <option value="enero">Enero</option>
								  <option value="febrero">Febrero</option>
								  <option value="marzo">Marzo</option>
								  <option value="abril">Abril</option>
								  <option value="mayo">Mayo</option>
								  <option value="junio">Junio</option>
								  <option value="julio">Julio</option>
								  <option value="agosto">Agosto</option>
								  <option value="septiembre">Septiembre</option>
								  <option value="octubre">Octubre</option>
								  <option value="noviembre">Noviembre</option>
								  <option value="diciembre">Diciembre</option>
								</select>
							</div>
							<div className='Cerdos'>
								<p>Bovinos</p> 
								 <TextField name="si" onChange={this.inputsBovinos} value={bovinos.si} hintText="Saldo inicial:"/><br />
								<TextField name="en" onChange={this.inputsBovinos} value={bovinos.en} hintText="Entradas:"/><br />
								<TextField name="sa" onChange={this.inputsBovinos} value={bovinos.sa} hintText="Salidas:"/><br />
							</div>
							<div className='Cerdos'>
								<p>Equinos</p> 
								  <TextField name="si" onChange={this.inputsEquinos} value={equinos.si} hintText="Saldo inicial:"/><br />
								<TextField name="en" onChange={this.inputsEquinos} value={equinos.en} hintText="Entradas:"/><br />
								<TextField name="sa" onChange={this.inputsEquinos} value={equinos.sa} hintText="Salidas:"/><br />
							
							</div>
							<div className='Cerdos'>
								<p>Porcinos</p> 
								  <TextField name="si" onChange={this.inputsPorcinos} value={porcinos.si} hintText="Saldo inicial:"/><br />
								<TextField name="en" onChange={this.inputsPorcinos} value={porcinos.en} hintText="Entradas:"/><br />
								<TextField name="sa" onChange={this.inputsPorcinos} value={porcinos.sa} hintText="Salidas:"/><br />
							
							</div>

							</form>
						 </div>
        			</Dialog>
				</div>
            </div>
        );
    }
}

export default View;