import axios from "axios";

let instance = null

class Api {
    constructor() {
        if (!instance) {
            instance = this;
            this.client = axios.create({
                baseURL: "http://localhost:3000/",
            });

            this.client.defaults.headers.common["Cache-Control"] = "no-cache";
        }

        return instance;
    }


    get(path) {
        return this.client.get(path).catch(error => {
            console.log('Error while calling ' + path);
            console.error(error);
        });
    }

    post(path, data) {
        return this.client.post(path, data).catch(error => {
            console.log('Error while creating ' + path);
            console.error(error);
        })
    }

    put(path, data) {
        return this.client.put(path, data).catch(error => {
            console.log('Error while update ' + path);
            console.error(error);
        })
    }

    delete(path, data) {
        return this.client.delete(path, data).catch(error => {
            console.log('Error while delete ' + path);
            console.error(error);
        })
    }

    getToDos() {
        return this.get('toDos');
    }

    createToDo(data){
        return this.post('toDos', data)
    }

    deleteToDo(id) {
        return this.delete('toDos/' + id)
    }

    updateToDo(id, toDo) {
        return this.put('toDos/' + id, toDo)
    }
}

const getApi = () => {
    return new Api();
}

export default getApi
