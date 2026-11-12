// Farenheit
const temp = 42;
const speed = 4;

function calculateWindChill (T, V){
    let calculateChill = 35.74 + 0.6215 * T - 35.75 * (V ** 0.16)+ 0.4275 * T * (V ** 0.16);
    formattedWindChill = calculateChill.toFixed(1);
    return formattedWindChill
}

if (temp <= 50 && speed > 3){
    windChill = `${calculateWindChill(temp, speed)}°F`;
} else {
    windChill = "N/A";
}

const liTag = document.getElementById('wind-chill');
liTag.insertAdjacentText('beforeend', windChill);