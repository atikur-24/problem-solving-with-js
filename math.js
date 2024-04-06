function celToFah(celsius) {
    let fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
}
const cel = 30;
// console.log(celToFah(cel));

function fahrenheitToCelsius(fahrenheit) {
    let celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius.toFixed(2);
}
// console.log(fahrenheitToCelsius(80));

function hourToMinutes(hours) {
    const minute = hours * 60;
    return minute;
}
// console.log(hourToMinutes(5));

// -------fibo----------
const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
// console.log(fibo);

//----------------- const of public bus -----------
function publicBusFare(participants) {
    if (typeof participants != "number" || participants <= 50) {
        return "provide valid participants...";
    }
    let remaining = 0;
    remaining = participants % 50;
    if (remaining >= 11) {
        remaining = remaining % 11;
    }
    let costOfPublicBus = remaining * 250;
    return costOfPublicBus;
}
// console.log(publicBusFare(52));
