// Navegação entre páginas
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Elementos do Simulador
const tempInput = document.getElementById('temp');
const umidArInput = document.getElementById('umid-ar');
const umidSoloInput = document.getElementById('umid-solo');

const tempVal = document.getElementById('temp-val');
const umidArVal = document.getElementById('umid-ar-val');
const umidSoloVal = document.getElementById('umid-solo-val');
const feedback = document.getElementById('feedback');
const statusBox = document.getElementById('status-box');

function atualizarSimulador() {
    const t = parseInt(tempInput.value);
    const ua = parseInt(umidArInput.value);
    const us = parseInt(umidSoloInput.value);

    // Atualiza os números na tela
    tempVal.innerText = t;
    umidArVal.innerText = ua;
    umidSoloVal.innerText = us;

    // Lógica de status para morangos (Valores ideais: Temp 15-25°C, Umid Ar 60-80%, Solo 60-70%)
    let mensagem = "✅ Condições ideais para o crescimento!";
    let critico = false;

    if (t > 30 || t < 10) {
        mensagem = "⚠️ Alerta: Temperatura extrema! Risco de perda da colheita.";
        critico = true;
    } else if (us < 40) {
        mensagem = "💧 Solo muito seco. Ligue a irrigação sustentável!";
        critico = true;
    } else if (ua > 85) {
        mensagem = "🍄 Umidade do ar muito alta. Risco de fungos!";
        critico = true;
    }

    feedback.innerText = mensagem;
    
    if (critico) {
        statusBox.classList.add('alerta');
    } else {
        statusBox.classList.remove('alerta');
    }
}

// Listeners para mudanças nos inputs
tempInput.addEventListener('input', atualizarSimulador);
umidArInput.addEventListener('input', atualizarSimulador);
umidSoloInput.addEventListener('input', atualizarSimulador);