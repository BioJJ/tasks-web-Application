import ApiService from '../apiservices';

import ErroValidacao from '../exception/ErroValidacao'

class taskService extends ApiService{

    constructor(){
        super('/task');
    }
    listar(){
        return this.get('/');
    }

    buscar_Id(id){
        return this.get(`/${id}`);
    }

    alterarStatus(id, status){
        return this.put(`/${id}/atualiza-status`, { status })
    }

    salvar(task){
        return this.post('/', task);
    }

    atualizar(task){
        return this.put(`/${task.id}`, task);
    }

    deletar(id){
        return this.delete(`/${id}`)
    }

    validar(task){

        const erros =[];

        if(!task.titulo){
            erros.push("O campo Titulo é obrigatório.")
        }
        else if(!task.descricao){
            erros.push("O campo Descrição é obrigatório.")
        }
        else if(!task.status){
            erros.push("O campo Status é obrigatório.")
        }

        if(erros && erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }

    obterListaStatus(){
        return  [
            { label: 'Selecione...', value: '' },
            { label: 'Pendente' , value : 'Pendente' },
            { label: 'Finalizado' , value : 'Finalizado' }
        ]

    }

}
export default taskService;