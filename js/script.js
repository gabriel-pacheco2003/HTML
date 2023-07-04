function olaMundo() {
    //var msg = "Olá Mundo";
    //alert(msg);
    var pessoa = {
        nome: "Ana",
        peso: 56,
        altura: 1.70
    }

    var imc = pessoa.peso / pessoa.altura * pessoa.altura

    console.log(`${pessoa.nome} tem o imc de : ${imc}`);

    var diaSemana = (`SEG`, `TERÇ`, `QUA`, `QUI`, `SEX`, `SAB`, `DOM`);

    console.log(diaSemana);
}

function dados() {
    var n1 = "37";
    var n2 = 7;
    console.log(n1 + n2);

    var n3 = "1.1";
    var n4 = "1.1";
    console.log(parseInt(n3) + Number(n4));
}

function enviarFormulario() {

    const pessoa = {
        nome: document.getElementById("nome").value,
        genero: document.getElementById("genero").value,
        peso: document.getElementById("peso").value,
        altura: document.getElementById("altura").value
    }
    const msg = `Nome: ${pessoa.nome}\nGenero: ${pessoa.genero}\nPeso: ${pessoa.peso}\nAltura: ${pessoa.altura}`;
    document.getElementById("dados").value = msg;
    return false;
}