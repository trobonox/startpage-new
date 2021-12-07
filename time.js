function updateClock(){
    var dt = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    document.getElementById("time").innerHTML = dt.toLocaleTimeString('de-DE');
    document.getElementById("date").innerHTML = dt.toLocaleDateString('de-DE', options); 
}

setInterval(updateClock, 0);