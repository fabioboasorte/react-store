/* dev */
// const serviceUrl = 
//     'http://localhost:9000/.netlify/functions/api/autor';

/* prod */
const serviceUrl = 
        'https://fbr-react-service.netlify.app/.netlify/functions/api/autor';


const ApiService = {
    
    ListaAutores: () => {
        return fetch(`${serviceUrl}`)
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json());
    },

    CriaAutor: autor => {
        return fetch(`${serviceUrl}`, {method: 'POST', headers: {'content-type': 'application/json'}, body: autor})
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json());
    },

    ListaNomes: () => {
        return fetch(`${serviceUrl}/nome`)
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json());
    },
    
    ListaAutor: id => {
        return fetch(`${serviceUrl}/${id}`)
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json());
    },
    
    ListaLivros: () => {
        return fetch(`${serviceUrl}/livro`)
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json());
    },

    RemoveAutor: id => {
        return fetch(`${serviceUrl}/${id}`, {method: 'DELETE', Headers: {'content-type': 'application/json'}})
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json());
    },

    TrataErros: res => {
        if(!res.ok) {
            throw Error(res.responseText);
        }
        return res;
    }

}

export default ApiService;