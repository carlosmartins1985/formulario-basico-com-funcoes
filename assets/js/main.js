function meuEscopo(){
    const form = document.querySelector('form');

    function recebeEventoForm(e){
        e.preventDefault();

        const inputNome = e.target.querySelector('#nome');
        const inputSobrenome = e.target.querySelector('#sobrenome');
        const inputTelefone = e.target.querySelector('#telefone');
        const inputEmail = e.target.querySelector('#email');

        const nome = inputNome.value;
        const sobrenome = inputSobrenome.value;
        const telefone = inputTelefone.value;
        const email = inputEmail.value;

        const pessoa = createObj(nome, sobrenome, telefone, email);

        const dados = `Nome: ${nome} <br> Sobrenome: ${sobrenome} <br> Telefone: ${telefone} <br> E-mail: ${email}`;

        console.log(dados);

        setResultado(dados);

        

    }
    form.addEventListener('submit', recebeEventoForm);

    function createObj(nome, sobrenome, telefone, email){
        return {
            nome: nome,
            sobrenome: sobrenome,
            telefone: telefone,
            email: email
        }
    }

    function criaP() {
        const p = document.createElement('p');
        return p;
    }

    function setResultado(dados) {
        const resultado = document.querySelector('.resultado');

        resultado.innerHTML = '';

        const p = criaP();

        p.classList.add('resultadoOk');

        p.innerHTML = dados;
        resultado.appendChild(p);
    }
}
meuEscopo();