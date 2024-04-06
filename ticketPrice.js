/* 
1. if ticket number is less than 100, per ticket price 100 tk
2. if ticket numbers is more than 100, but less than 200 per ticket price 90 tk
3. if you purchase more than 200 tickets price 70 tk
*/
function ticketPrice(ticketQuantity) {
    const first100TicketRate = 100;
    const second100TicketRate = 90;
    const restTicketRate = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100TicketRate;
        return price;
    } else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100TicketRate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100TicketRate;
        const price = first100Price + restTicketPrice;
        return price;
    } else {
        const first100Price = 100 * first100TicketRate;
        const second100Price = 100 * second100TicketRate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const price = first100Price + second100Price + restTicketPrice;
        return price;
    }
}
console.log(ticketPrice(201));
