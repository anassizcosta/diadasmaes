// index.js
const listaFrases = [
    "eu e mamãe no dia do casamento dela", "eu e mamãe no aniversário da prima",
    "eu e mamãe testando filtro no instagram", "eu e minha familia",
    "eu e mamãe no aniversário do Gui", "discurso de mamãe na minha festa de 15",
    "eu e mamãe nos abraçando na minha festa de 15", "mamãe fazendo a totoca dormir",
    "eu, mamãe e caco", "eu, mamãe e gui",
    "eu e mamãe nos divertindo se arrumando pro casamento dela",
    "eu e mamãe", "eu cuidando da mamãe",
    "eu e mamãe mostrando a lingua", "eu e mamãe <3"
];

const listaImagens = [
    "Fotos/f1.jpeg", "Fotos/f2.jpeg", "Fotos/f3.jpeg", "Fotos/f4.jpeg",
    "Fotos/f5.jpeg", "Fotos/f6.jpeg", "Fotos/f7.jpeg", "Fotos/f8.jpeg",
    "Fotos/f9.jpeg", "Fotos/f10.jpeg", "Fotos/f11.jpeg", "Fotos/f12.jpeg",
    "Fotos/f13.jpeg", "Fotos/f14.jpeg", "Fotos/f15.jpeg"
];

let indiceAtual = 0;
const Frase = document.getElementById('Frase');
const imagem = document.getElementById('imagem');

// --- TROCAR FOTO ---
function proximaFoto(event) {
    indiceAtual = (indiceAtual + 1) % listaFrases.length;
    Frase.textContent = listaFrases[indiceAtual];
    imagem.src = listaImagens[indiceAtual];
    criarCoracoes(event.clientX, event.clientY);
}

// --- RASTRO DE ESTRELAS ---
document.addEventListener('mousemove', (e) => {
    const star = document.createElement('div');
    star.innerHTML = '✨';
    star.className = 'star-trail';
    star.style.left = e.pageX + 'px';
    star.style.top = e.pageY + 'px';
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1000);
});

// --- CONTADOR (CORRIGIDO) ---
function atualizarContador() {
    const dataNascimento = new Date('2008-12-09'); 
    const hoje = new Date();
    const diff = Math.floor((hoje - dataNascimento) / (1000 * 60 * 60 * 24));
    // Uso de crases para o template string funcionar
    document.getElementById('contador').textContent = `Há ${diff} dias sendo amado por você!`;
}

// --- FILTROS ---
function mudarFiltro(tipo) {
    imagem.style.filter = tipo;
}

// --- CARTA ---
function abrirCarta() { document.getElementById('modalCarta').style.display = 'block'; }
function fecharCarta() { document.getElementById('modalCarta').style.display = 'none'; }

// --- MÚSICA ---
function toggleMusica() {
    const musica = document.getElementById('musicaSorridente');
    const btn = document.getElementById('musicaBtn');
    musica.paused ? (musica.play(), btn.innerHTML = '⏸️') : (musica.pause(), btn.innerHTML = '🎵');
}

// --- CORAÇÕES ---
function criarCoracoes(x, y) {
    for (let i = 0; i < 6; i++) {
        const h = document.createElement('div');
        h.innerHTML = '❤️';
        h.style.position = 'fixed';
        h.style.left = x + 'px'; h.style.top = y + 'px';
        h.style.fontSize = '20px';
        h.style.animation = 'fly 2s forwards';
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 2000);
    }
}

// --- INICIALIZAÇÃO ---
Frase.textContent = listaFrases[0];
imagem.src = listaImagens[0];
atualizarContador(); // Chamando a função para o contador aparecer assim que carregar