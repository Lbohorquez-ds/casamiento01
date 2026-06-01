// CONFIGURACIÓN: Definí la fecha de la boda aquí (Formato: Año, Mes-1, Día, Hora, Minutos)
// Nota: Enero es 0, Febrero es 1... Noviembre es 10.
const weddingDate = new Date(2026, 10, 21, 18, 30, 0).getTime();

// Actualizar la cuenta regresiva cada 1 segundo
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "<h3>¡Llegó el gran día!</h3>";
        return;
    }

    // Cálculos de tiempo
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Renderizar en el HTML agregando un cero adelante si es menor a 10
    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

}, 1000);

// MANEJO DEL FORMULARIO DE ASISTENCIA
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const attendance = document.getElementById('attendance').value;
    const diet = document.getElementById('diet').value;

    const responseMessage = document.getElementById('form-response');

    // Simulación de envío (Acá podés integrar Firebase o un servicio de mail posterior)
    if(attendance === 'si') {
        responseMessage.innerText = `¡Gracias ${name}! Confirmamos tu asistencia. ¡Nos vemos pronto!`;
        responseMessage.style.backgroundColor = "#e8f5e9";
        responseMessage.style.color = "#2e7d32";
    } else {
        responseMessage.innerText = `Lamentamos que no puedas venir, ${name}. ¡Gracias por avisarnos!`;
        responseMessage.style.backgroundColor = "#ffebee";
        responseMessage.style.color = "#c62828";
    }

    responseMessage.style.display = "block";

    // Limpiar el formulario
    document.getElementById('rsvp-form').reset();
});