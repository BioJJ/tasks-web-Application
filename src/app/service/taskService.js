import ApiService from '../apiservices';

import ErroValidacao from '../exception/ErroValidacao'

class taskService extends ApiService{

    constructor(){
        super('/task');
    }
    listar(){
        return this.get(`/`);
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

}
export default taskService;