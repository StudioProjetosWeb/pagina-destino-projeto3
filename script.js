document.addEventListener('DOMContentLoaded', function () {
  const mensagemElement = document.getElementById('mensagem');
  const contadorElement = document.getElementById('contador');
  const botaoAcessar = document.getElementById('botaoAcessar');
  let timeLeft = localStorage.getItem('timeLeft') || 60; // 1 minuto em segundos

  function updateCounter() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    contadorElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;
    localStorage.setItem('timeLeft', timeLeft);

    if (timeLeft < 0) {
      clearInterval(interval);
      mensagemElement.style.display = 'none';
      contadorElement.style.display = 'none';
      botaoAcessar.style.display = 'block';
      localStorage.removeItem('timeLeft');
    }
  }

  let interval = setInterval(updateCounter, 1000);
  updateCounter();

  botaoAcessar.addEventListener('click', function() {
    window.location.href = 'game.html'; // Caminho para o jogo Pong
  });
});
