/**
 * Created by BlisS on 22/03/17.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ingresoActions from '../../actions/ingresoActions';


class IngresoContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            ingreso: {
                cantidad:'',
                descripcion:''
            }
        }
    }

    onChange = (e) => {
        const ingreso = this.state.ingreso;
        const field = e.target.name;
        const value = e.target.value;
        ingreso[field] = value;
        this.setState({ingreso});
    };

    onClickSave = () => {
        alert("Guardando" + this.state.ingreso.cantidad);
        this.props.dispatch(ingresoActions.createIngreso(this.state.ingreso));

        this.setState({ingreso: {
            cantidad:'',
            descripcion:''
        }});
    };

    ingresoRow = (ingreso, index) => (
        <div key={index}>{ingreso.descripcion}</div>
    );

    render() {
        return (
            <div>
                <h1>Ingresos</h1>
                {this.props.ingresos.map(this.ingresoRow)}
                <h2>Agregar Ingreso</h2>
                <input
                    type="number"
                    name="cantidad"
                    onChange={this.onChange}
                    value={this.state.ingreso.cantidad}
                />
                <input
                    type="text"
                    name="descripcion"
                    onChange={this.onChange}
                    value={this.state.ingreso.descripcion}
                />
                <input
                    value="Guardar"
                    onClick={this.onClickSave}
                    type="submit"/>
            </div>
        );
    }
}

const actions = {};

IngresoContainer.propTypes = {
    // myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        ingresos: state.ingresos,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps)(IngresoContainer);