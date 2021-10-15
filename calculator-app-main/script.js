function calculadora() {
    let vals = document.getElementById('vels')
    vals.value = eval(vels.value)
}
function reset() {
    document.getElementById('vels').value = ''
}
function deletar() {
    let vals = document.getElementById('vels');
    let inputText = vals.value;
    vals.value = inputText.substring(0,inputText.length-1);
}
function selectema(local) {
    let head = document.getElementsByTagName('HEAD')[0]; 
    let link = document.createElement('link');

    // set the attributes for link element 
    link.rel = 'stylesheet'; 
    link.type = 'text/css';
    link.href = local; 

    // Append link element to HTML head
    head.appendChild(link); 
}

function temas() {
    function tema (selectema, numb) {
        let tema = document.getElementById(selectema)
        tema.addEventListener('click', function() {
            let toggle = document.getElementById('circle')
            toggle.style.left = numb;
        })
    }

    tema('um', '0%')
    tema('dois', '35%')
    tema('tres', '75%')
}

function tema1() {
    selectema('Styles/Colors/tema1.css')
}
function tema2() {
    selectema('Styles/Colors/tema2.css')
}
function tema3() {
    selectema('Styles/Colors/tema3.css')
}