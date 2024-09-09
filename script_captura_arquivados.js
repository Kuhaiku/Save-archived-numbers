let titles = [];

// Função para capturar os títulos dos spans e salvar no array
function captureTitles() {
    // Seleciona a div pai
    const parentDiv = document.querySelector('div._aigv._aigw._aigx');
    
    if (!parentDiv) {
        console.error('Div com a classe "_aigv _aigw _aigx" não encontrada.');
        return;
    }
    
    // Seleciona todos os spans dentro da div pai
    const spans = parentDiv.querySelectorAll('span.x1iyjqo2.x6ikm8r.x10wlt62.x1n2onr6.xlyipyv.xuxw1ft.x1rg5ohu._ao3e');
    
    // Extrai o atributo title dos spans e armazena os que começam com "+" em um array
    spans.forEach(span => {
        const title = span.getAttribute('title');
        if (title && title.startsWith('+') && !titles.includes(title)) {
            titles.push(title);
        }
    });
    
    // Imprime o array atualizado no console
    console.log(titles);
}

// Usa IntersectionObserver para monitorar novos elementos que entram na visualização
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            captureTitles();
        }
    });
}, { threshold: 0.1 });

// Seleciona a div pai para observar seus elementos filhos
const parentDiv = document.querySelector('div._aigv._aigw._aigx');
if (parentDiv) {
    const spans = parentDiv.querySelectorAll('span.x1iyjqo2.x6ikm8r.x10wlt62.x1n2onr6.xlyipyv.xuxw1ft.x1rg5ohu._ao3e');
    spans.forEach(span => observer.observe(span));
}

// Captura inicialmente todos os títulos visíveis
captureTitles();


function arrayToTxtFile(array, filename) {
    let textContent = JSON.stringify(array, null, 2); // Converte o array em uma string JSON formatada
    let blob = new Blob([textContent], { type: 'text/plain' }); // Cria um objeto Blob com o conteúdo do texto

    // Cria um link para download do arquivo
    let link = document.createElement('a');
    link.download = filename;
    link.href = URL.createObjectURL(blob);
    link.click();
}

// Exemplo de uso:
let lista_de_numeros =title;
arrayToTxtFile(lista_de_numeros, 'meuArquivo.txt');
//

