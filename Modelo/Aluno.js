import AlunoDAO from "../Persistencia/AlunoDAO.js";

export default class Aluno {
    // Atributos
    #id
    #nome
    #ra
    #curso
    #termo

    constructor(id='', nome='', ra='', curso='', termo=0) {
        this.#id    = id;
        this.#nome  = nome;
        this.#ra    = ra;
        this.#curso = curso;
        this.#termo = termo;
    }

    // getters and setters
    get id() { return this.#id; }
    set id(novoId) { this.#id = novoId; }

    get nome() { return this.#nome; }
    set nome(novoNome) { this.#nome = novoNome; }

    get ra() { return this.#ra; }
    set ra(novoRa) { this.#ra = novoRa; }

    get curso() { return this.#curso; }
    set curso(novoCurso) { this.#curso = novoCurso; }

    get termo() { return this.#termo; }
    set termo(novoTermo) { this.#termo = novoTermo; }

    toJSON(){
        return {
            id   : this.#id,
            nome : this.#nome,
            ra   : this.#ra,
            curso: this.#curso,
            termo: this.#termo
        }
    }

    createDataBase(){
        const alunoDAO = new AlunoDAO();
        return alunoDAO.createDatabase();
    }
    
    consulta(aluno){
        if (aluno instanceof Aluno) {
            const alunoDAO = new AlunoDAO();
            return alunoDAO.consulta(aluno.id);
        }
    }

    
    
}