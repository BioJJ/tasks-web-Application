import React, { Component }  from 'react';
import './style.css';

import Card from '../../components/card';
import FormGroup from '../../components/FormGroup';

import taskService from '../../app/service/taskService';
import { mensagemSucesso, mensagemErro } from '../../components/toastr';


export default class TaskUpdate extends Component{
  
    state = {
        descricao: '',
        status: '', 
        titulo: '' 
    }

    componentDidMount(){
        this.service.buscar_Id()
        .then(response => {
            //  console.log(response.data.id)
           // this.setState({usuario: response.data})
             this.setState({id: usuario_logado.findExist.id});
             this.setState({nome: usuario_logado.findExist.fullname});
             this.setState({username: usuario_logado.findExist.username});
             this.setState({age: usuario_logado.findExist.age});
             this.setState({senha: usuario_logado.findExist.password});
             this.setState({senhaRepeticao: usuario_logado.findExist.password});
          }).catch(error =>{
              console.log(error.data)
          })
        
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

                            <FormGroup label="Status: *" htmlFor="status">
                                <input type="text" 
                                       id="status"
                                       className="form-control"
                                       name="status"
                                       onChange={e => this.setState({status: e.target.value})} />
                            </FormGroup>

                            

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