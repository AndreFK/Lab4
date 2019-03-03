import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MUITable from './MUITable';

let rows;
let table = (<p/>)

let id = 0;
let createData = (clase, nota) => {
    id += 1;
    return { id, clase, nota };
}

class ClassesInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clase1: '', //Por alguna razon, si le pongo de nombre a este state como "clase1" no funciona
            nota1: '',
            clase2: '',
            nota2: '',
            clase3: '',
            nota3: '',
            showTable: true,
        }
        this.createTable = this.createTable.bind(this);
    }

    handleChange = (stateName, event) => {
        this.setState({[stateName]: event.target.value});
    };

    createTable = () => {
        rows = [
            createData(this.state.clase1, this.state.nota1),
            createData(this.state.clase2, this.state.nota2),
            createData(this.state.clase3, this.state.nota3)
        ]
        table = <MUITable rows={rows} />
        this.setState({showTable: this.state.showTable})
    };
    
    render() {
        return(
            <div>
                <TextField label="Nombre de clase" value={this.state.clase1} onChange={this.handleChange.bind(this, 'clase1')}/>&nbsp;&nbsp;&nbsp;
                <TextField label="Nota Parcial 1" value={this.state.nota1} onChange={this.handleChange.bind(this, 'nota1')}/>
                <br/>
                <TextField label="Nombre de clase" value={this.state.clase2} onChange={this.handleChange.bind(this, 'clase2')}/>&nbsp;&nbsp;&nbsp;
                <TextField label="Nota Parcial 1" value={this.state.nota2} onChange={this.handleChange.bind(this, 'nota2')}/>
                <br/>
                <TextField label="Nombre de clase" value={this.state.clase3} onChange={this.handleChange.bind(this, 'clase3')}/>&nbsp;&nbsp;&nbsp;
                <TextField label="Nota Parcial 1" value={this.state.nota3} onChange={this.handleChange.bind(this, 'nota3')}/>
                <br/>
                <br/>
                <Button variant="contained" color="primary" onClick={this.createTable.bind(this)}>Continuar</Button>
                <br/>
                <br/>
                <div>
                    {this.state.showTable ? table :<div></div>}</div>
            </div>
        );
    }
}

export default ClassesInput;