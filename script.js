document.getElementById("flappy-bird").addEventListener("click", function() {
    window.location.href = "https://ufak1.github.io/minikkus/";  // Flappy Bird oyununa yönlendir
});

document.getElementById("tic-tac-toe").addEventListener("click", function() {
    window.location.href = "https://ufak1.github.io/tictactoe/";  // Tic Tac Toe oyununa yönlendir
});

document.getElementById("mayin-tarlasi").addEventListener("click", function() {
    window.location.href = "https://ufak1.github.io/mayintarlasi/";  // Tic Tac Toe oyununa yönlendir
});



// Kar tanesi sayısını belirleyelim
const snowflakeCount = 100;

// Kar tanesi oluşturma fonksiyonu
function createSnowflakes() {
    const snowContainer = document.querySelector('.snow');

    for (let i = 0; i < snowflakeCount; i++) {
        let snowflake = document.createElement('div');
        snowflake.classList.add('flake');

        // Kar tanesinin pozisyonunu ve animasyon hızını rastgele belirle
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
        snowflake.style.animationDelay = Math.random() * 10 + 's';
        snowflake.style.fontSize = Math.random() * 10 + 5 + 'px';
        
        snowContainer.appendChild(snowflake);
    }
}

// Kar tanelerini oluştur
createSnowflakes();