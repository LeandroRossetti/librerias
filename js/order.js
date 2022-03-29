/* orderId array para guardar el pedido del usuario, withStock array que almacena productos con stock para mostrar */
const prices = [0];
const orderId = [];
const withStock = [];
let addOrder = '';
let total = 0;

alert('Bienvenido a Lunch & Wine, a continuación le listare nuestros productos con stock y el precio');

/* Iteramos en los productos buscando únicamente los que tienen stock actualmente */
for (const menu of products) {
    if (menu.stock > 0) {
        withStock.push(`${menu.id} ${menu.name} $${menu.price} \n`);
    }
}

for (const menu1 of products) {
    if (menu1.stock > 0) {
        prices.push(menu1.price);
    }
}


function purchase() {


    do {
        let order = parseInt(prompt('Que te gustaría comprar? Selecciona el número del producto \n ' + withStock))

        switch (order) {
            case 1:

                total += 2150

                break;

            case 2:
                total += 750
                break;

            case 3:
                total += 4999
                break;

            case 4:
                total += 120
                break;

            case 5:
                total += 800
                break;

            case 6:
                total += 1100
                break;
            case 7:
                total += 200
                break;

            case 8:
                total += 400
                break;

            case 9:
                total += 650
                break;

            default:
                break;
        }
        orderId.push(order)
        addOrder = prompt('Te gustaría sumar algo más a tu pedido? Si es así, tipea "SI", sino escribi cualquier otra cosa. ')
        addOrder = addOrder.toUpperCase();
    } while (addOrder === 'SI');


    alert('La compra suma $:' + total);

}


purchase();