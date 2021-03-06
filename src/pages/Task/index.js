import React, { Component }  from 'react';
import './style.css';

import Card from '../../components/card';
import FormGroup from '../../components/FormGroup';

import SelectMenu from '../../components/selectMenu'

import taskService from '../../app/service/taskService';
import { mensagemSucesso, mensagemErro } from '../../components/toastr';


export default class Task extends Component{
  
    state = {
        descricao: '',
        status: '', 
        titulo: '' 
    }

    constructor(){
        super();
        this.service = new taskService();
    }

    cadastrar = () => {

        const task = {
            descricao: this.state.descricao,
            status: this.state.status,
            titulo: this.state.titulo 
        }

        try{
            this.service.validar(task);
        }catch(erro){
            const msgs = erro.mensagens;
            msgs.forEach(msg => mensagemErro(msg));
            return false;
        }


        this.service.salvar(task)
        .then( response => {
            mensagemSucesso('Tarefa cadastrado! ')
            this.props.history.push('/')
        }).catch(error => {
            mensagemErro(error.response.data)
        })

        console.log(this.state);

    }

    cancelar = () => {
        this.props.history.push('/')
    }


    render(){

        const tipos = this.service.obterListaStatus();
        return(

            <div className="post-list">
                <fieldset>
                    
                    <Card title="Cadastro de Tarefa">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                        <FormGroup label="Titulo: *" htmlFor="inputTitulo">
                                <input type="text" 
                                       id="inputTitulo" 
                                       className="form-control"
                                       name="titulo"
                                       onChange={e => this.setState({titulo: e.target.value})} />
                            </FormGroup>

                            <FormGroup label="Descrição: *" htmlFor="descricao">
                                <input type="text" 
                                       id="descricao"
                                       className="form-control"
                                       name="descricao"
                                       onChange={e => this.setState({descricao: e.target.value})} />
                            </FormGroup>

                            <FormGroup htmlFor="inputTipo" label="Status">
                                <SelectMenu id="inputTipo" 
                                            value={this.state.tipo}
                                            onChange={e => this.setState({status: e.target.value })}
                                            className="form-control" 
                                            lista={tipos}
                                             />
                            </FormGroup>

                            <br/>

                            <button onClick={this.cadastrar} type="button" className="btn btn-success">
                                <i className="pi pi-save"></i> Salvar
                            </button>
                            <button  onClick={this.cancelar} type="button" className="btn btn-danger">
                                <i className="pi pi-times"></i> Cancelar
                            </button>
                            
                        </div>
                    </div>
                </div>
                </Card>
                   
                </fieldset>
           
            </div>

        );
    }
              
}