// Função de alerta ao entrar no site
document.getElementById('entrar').addEventListener('click',
function(){
    alert("Acessando o site");
});

// Inserir nome do usuario
document.getElementById('submitName').addEventListener('click', function() {
    const name = document.getElementById('userName').ariaValueMax;
    document.getElementById('greeting').innerText = `Bem-vindo(a), ${name}!`;
});

// Mostrar data atual
const today = new Date();
document.getElementById('dataAtual').innerText = today.toLocaleDateString();
document.getElementById('footerData').innerText = `Data Atual: ${today.toLocaleString()}`;

// Calcular média
document.getElementById('mediaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputs = document.getElementById('mediaInput').ariaValueMax.split(',').map(Number);
    const media = inputs.reduce((a, b) => a + b, 0) / inputs.length;
    const parOuImpar = media % 2 === 0 ? 'par' : 'impar';
    document.getElementById('NumPar').innerText = `A média é: ${media.toFixed(2)} e é ${parOuImpar}.`;
});

// Calculadora 

document.getElementById('calculardb1').addEventListener('dblclick', 
function() {
    const adicao = Number(document.getElementById('adicao').value);
    const sub = Number(document.getElementById('sub').value);
    const porcentagem = Number(document.getElementById('porcentagem').value);
    const resultado = {
        adicao: adicao + sub,
        subtracao: adicao - sub,
        porcentagem: (adicao * porcentagem) / 100
    };
    document.getElementById('ResultadoCalc').innerText = `Soma: ${resultado.adicao}, Subtração: ${resultado.subtracao},
    Porcentagem: ${resultado.porcentagem}`;
});

// Exibir Tabela

const itens = ['Item 1', 'Item 2', 'Item 3']; // Exemplo de array
document.getElementById('exibirTabela').addEventListener('click', function() { 
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = ''; // Limpa a tabela
    itens.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item}<td>`;
        tbody.appendChild(row);
    });
});

// Deletar todo o body 
document.getElementById('deleteBody').addEventListener('click', function() { 
    document.body.innerHTML = '';
});