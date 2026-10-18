
// Pobierz parametry z URL
var params = new URLSearchParams(window.location.search);

// Funkcja przejścia do strony głównej (home.html) lub generatora jeśli brak danych
function toHome() {
    // Jeśli brak danych (np. pierwsze uruchomienie PWA na iPhonie) → idź do generatora
    const hasData = !!localStorage.getItem('mobywatel_card_data');
    if (hasData) {
        location.href = 'home.html' + (params.toString() ? '?' + params.toString() : '');
    } else {
        location.href = 'index.html';
    }
}

// Powitanie w zależności od godziny
var welcome = "Dzień dobry!";
var date = new Date();
if (date.getHours() >= 18 || date.getHours() < 5) {
    welcome = "Dobry wieczór!";
}
var welcomeEl = document.querySelector(".welcome");
if (welcomeEl) welcomeEl.innerHTML = welcome;

// Obsługa logowania hasłem (dowolne hasło lub puste kliknięcie)
var loginBtn = document.querySelector(".login");
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        toHome();
    });
}

document.getElementById('loginBtn').addEventListener('click', function() {
            // Проверяем, нужна ли авторизация датчиков (для iOS 13+)
            if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                DeviceOrientationEvent.requestPermission()

        }
    });

// Logika maskowania hasła
var eye = document.querySelector(".eye");
if (eye && input) {
    eye.addEventListener('click', () => {
        if (input.type === 'password') {
            input.type = 'text';
            eye.classList.add("eye_close");
        } else {
            input.type = 'password';
            eye.classList.remove("eye_close");
        }
    });
}