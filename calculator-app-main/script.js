function calculadora() {
    let vals = document.getElementById('vels')
    vals.value += 5
}
function reset() {
    document.getElementById('vels').value = ''
}
function deletar() {
    let vals = document.getElementById('vels');
    let inputText = vals.value;
    vals.value = inputText.substring(0,inputText.length-1);
}