
class validator {

    constructor() { // O construct serve para iniciar as propriedades que este objeto possui;
        this.validations = [ //  Aqui coloco as validadções que este objeto possui;

        ]
    }

    
}




let form = document.getElementById("resgister-form");
let submit = document.getElementById("btn-submit");

let validator = new validator(); // Iniciando o objeto validator

// evento que dispara as validações

submit.addEventListener("click", function(e) {

    e.preventDefault(); // Primeiramente esse evento, impede o formulário faça sua função básica que é enviar para o       servidor, com isso o formulário nao funciona mais da forma como deveria; 
    //console.log('funcionou') // Aqui verifico se está mapeando o click

    validator.validate(form) // Ao clicar no imput eu ativo meu objeto validate e evio pra ele validar.

})