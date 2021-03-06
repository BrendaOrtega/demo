import React from 'react';
import IngresoListRow from './IngresoListRow';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';
import QueueAnim from 'rc-queue-anim';



const IngresoList = ({ingresos, deleteIngreso}) => (
   <div>
       <h2>Ingresos</h2>

       <Table>
           <TableHeader>
               <TableRow>
                   <TableHeaderColumn>ID</TableHeaderColumn>
                   <TableHeaderColumn>Cantidad</TableHeaderColumn>
                   <TableHeaderColumn>Descripción</TableHeaderColumn>
               </TableRow>
           </TableHeader>
           <TableBody>
                   {ingresos.map(ingreso=>
                       <IngresoListRow key={ingreso.key} ingreso={ingreso}  />)}
           </TableBody>
       </Table>

   </div>
);

export default IngresoList;
