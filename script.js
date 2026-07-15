document
.getElementById("btnSaibaMais")
.addEventListener("click", function(){

    alert("Agradeçemos pelo interesse somos empresa de segurança em tecnologia com uso de IA!");

});

document
.getElementById("buscarCep")
.addEventListener("click", ()=>{

    const cep = document
    .getElementById("cep")
    .value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)

    .then(resposta => resposta.json())

    .then(dados => {

        if(dados.erro){

            document
            .getElementById("resultado")
            .innerHTML="CEP não encontrado.";

            return;
        }

        document
        .getElementById("resultado")
        .innerHTML=`
            Rua: ${dados.logradouro}<br>
            Bairro: ${dados.bairro}<br>
            Cidade: ${dados.localidade}<br>
            Estado: ${dados.uf}
        `;

    })

    .catch(()=>{

        document
        .getElementById("resultado")
        .innerHTML="Erro ao consultar.";

    });

});