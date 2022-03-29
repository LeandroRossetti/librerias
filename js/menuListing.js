/* Se crea una clase constructora para poder crear el menú */
class Product {
    constructor(id, name, price, drink, food, dessert, stock) {
        this.id = id;
        this.name = name.toUpperCase();
        this.price = price;
        this.drink = drink;
        this.food = food;
        this.dessert = dessert;
        this.stock = stock;

    }

}
//Declaramos un array de productos para almacenar objetos
const products = [];
products.push(new Product(1, "Degustación vinos", 2150, true, false, false, 100));
products.push(new Product(2, "Copadevino", 750, true, false, false, 10));
products.push(new Product(3, "Botella de vino 2014", 4999, true, false, false, 1));
products.push(new Product(4, "Empanada", 120, false, true, false, 12));
products.push(new Product(5, "Ensalada Caesar", 800, false, true, false, 5));
products.push(new Product(6, "Wok de pollo", 1100, false, true, false, 20));
products.push(new Product(7, "Cupcakes", 200, false, false, true, 80));
products.push(new Product(8, "Caja de 6u Macaroons", 400, false, false, true, 20));
products.push(new Product(9, "Postre Oreo", 650, false, false, true, 2));
