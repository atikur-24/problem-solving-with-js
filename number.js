function publicBusFare(participants) {
    if (typeof participants != "number" || participants <= 50) {
        return "provide valid participants...";
    }
    let remaining = 0;
    remaining = participants % 50;
    if (remaining >= 11) {
        remaining = remaining % 11;
    }
    console.log(remaining);
    let costOfPublicBus = remaining * 250;
    return costOfPublicBus;
}

const costOfPublicBus = publicBusFare(51);
// console.log(costOfPublicBus);
