
const sim = document.getElementById('sim');
const pag1 = document.getElementById('pag1');
const pag2 = document.getElementById('pag2');
sim.addEventListener('click', (e) => {
    pag1.style.display = 'none';
    pag2.style.display = 'flex';
})
const nao = document.getElementById('nao');
nao.addEventListener('mouseover', (e) => {
    nao.style.left = `${Math.ceil(Math.random() * 90)}%`;
    nao.style.top = `${Math.ceil(Math.random() * 90)}%`;
})