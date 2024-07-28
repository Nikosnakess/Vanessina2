// Verifica se la data di fine è già salvata in localStorage
let endDate = localStorage.getItem('countDownDate');

if (!endDate) {
    // Imposta la data di fine a 50 giorni da oggi e salvala in localStorage
    let countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 50);
    endDate = countDownDate.getTime();
    localStorage.setItem('countDownDate', endDate);
} else {
    // Recupera la data di fine salvata in localStorage
    endDate = parseInt(endDate, 10);
}

// Aggiorna il conto alla rovescia ogni secondo
let x = setInterval(function() {
    // Ottieni la data e l'ora attuali
    let now = new Date().getTime();
    
    // Calcola la distanza tra adesso e la data di fine
    let distance = endDate - now;
    
    // Calcola i giorni, ore, minuti e secondi
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Visualizza il risultato nell'elemento con id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // Se il conto alla rovescia è finito, scrivi un messaggio
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "CONTO ALLA ROVESCIA TERMINATO";
    }
}, 1000);
