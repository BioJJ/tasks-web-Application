import React from 'react'
import { withRouter } from 'react-router-dom'

import Card from '../../components/card'
import FormGroup from '../../components/FormGroup'
import SelectMenu from '../../components/selectMenu'

import taskService from '../../app/service/taskService';


import * as messages from '../../components/toastr'

import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';



class Home extends React.Component {

    state = {
        tasks: [],
        tipo: '',
        showConfirmDialog: false,
    }

    constructor(){
        super();
        this.service = new taskService();
    }

    componentDidMount(){
        this.loadTasks();
    }

    loadTasks = async () => {
        const response = await this.service.listar();

        this.setState({tasks: response.data});
    };

    NovaTarefa = () => {
        this.props.history.push('/task')
    }

    render(){
        const {tasks} =  this.state;
        const tipos = this.service.obterListaStatus();

        const confirmDialogFooter = (
            <div>
                <Button label="Confirmar" icon="pi pi-check" onClick={this.deletar} />
                <Button label="Cancelar" icon="pi pi-times" onClick={this.cancelarDelecao} 
                        className="p-button-secondary" />
            </div>
        );

        return(

            <div className="post-list">

            
            <Card title="Tarefas">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">

                            {/* <FormGroup htmlFor="inputDesc" label="Descrição: ">
                                <input type="text" 
                                       className="form-control" 
                                       id="inputDesc" 
                                       value={this.state.descricao}
                                       onChange={e => this.setState({descricao: e.target.value})}
                                       placeholder="Digite a descrição" />
                            </FormGroup> */}

                            <FormGroup htmlFor="inputTipo" label="Status">
                                <SelectMenu id="inputTipo" 
                                            value={this.state.tipo}
                                            onChange={e => this.setState({ tipo: e.target.value })}
                                            className="form-control" 
                                            lista={tipos}
                                             />
                            </FormGroup> 

                            <button onClick={this.buscar} 
                                    type="button" 
                                    className="btn btn-success">
                                    <i className="pi pi-search"></i> Buscar
                            </button>
                            <button onClick={this.NovaTarefa} 
                                    type="button" 
                                    className="btn btn-danger">
                                    <i className="pi pi-plus"></i> Cadastrar
                            </button>

                        </div>
                        
                    </div>
                </div>   

                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                        {tasks.map(tasks => (
                            <article key={tasks.id}>
                            <strong>{tasks.titulo}</strong>
                            <p>{tasks.descricao}</p>
                            <p>{tasks.status}</p>
                            
                            <button className="btn btn-success" title="Concluir"
                               // disabled={ lancamento.status !== 'PENDENTE' }
                                //onClick={e => props.alterarStatus(lancamento, 'EFETIVADO')} 
                                type="button">
                                <i className="pi pi-check"></i>
                            </button>

                             <button className="btn btn-warning"  title="Cancelar"
                               // disabled={ lancamento.status !== 'PENDENTE' }
                              //  onClick={e => props.alterarStatus(lancamento, 'CANCELADO')} 
                                type="button">
                                <i className="pi pi-times"></i>
                             </button>

                            <button type="button"   title="Editar"
                            className="btn btn-primary"
                            //onClick={e => props.editAction(tasks.id)}
                            >
                            <i className="pi pi-pencil"></i>
                             </button>

                            <button type="button"  title="Excluir"
                            className="btn btn-danger" 
                           // onClick={ e => props.deleteAction(tasks.id)}
                            >
                            <i className="pi pi-trash"></i>
                            </button>
                         
                    </article>
                ))}
                        </div>
                    </div>  
                </div> 
                <div>
                    <Dialog header="Confirmação" 
                            visible={this.state.showConfirmDialog} 
                            style={{width: '50vw'}}
                            footer={confirmDialogFooter} 
                            modal={true} 
                            onHide={() => this.setState({showConfirmDialog: false})}>
                        Confirma a exclusão deste Lançamento?
                    </Dialog>
                </div>      
               
            </Card>

            </div>
        )
    }

}


export default withRouter(Home);