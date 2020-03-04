var totalCost = [];

function order(size, crust, topping) {
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaTopping = topping;
    this.price = 0;
}
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizzaTopping = ["Pepperoni", "Mushrooms", "Onions", "Sausage","Bacon","Extra Cheese","Black Olives","Green Peppers" ];
order.prototype.cost = function() {
    if (this.size === pizzaSize[0]) {
        this.price += 450;
    } else if (this.size === pizzaSize[1]) {
        this.price += 600;
    } else if (this.size === pizzaSize[2]) {
        this.price += 1000;
    }
    if (this.crust === pizzaCrust[0]) {
        this.price += 100;
    } else if (this.crust === pizzaCrust[1]) {
        this.price += 100;
    } else if (this.crust === pizzaCrust[2]) {
        this.price += 50;
    }
    if (this.topping === topping[0]) {
        this.price += 200;
    } else if (this.topping === pizzaTopping[1]) {
        this.price += 200;
    } else if (this.topping === pizzaTopping[2]) {
        this.price += 200;
    } else if (this.topping === pizzaTopping[3]) {
        this.price += 200;
    } else if (this.topping === pizzaTopping[4]) {
        this.price += 200;    
    } else if (this.topping === pizzaTopping[5]) {
        this.price += 200;
    } else if (this.topping === pizzaTopping[6]) {
        this.price += 200;
    } else if (this.topping === pizzaTopping[7]) {
        this.price += 200;
    }     
    return this.price;
}
order.prototype.totalCost = function() {
    var orderTotal = 0;
    for (var order = 0; order < totalCost; order++) {
        orderTotal += total[order];
    }
    return orderTotal;

}
$(document).ready(function() {
    $("input#order1").click(function(event) {
        event.preventDefault();
        var size = $("select#size").val();
        var crust = $("select#crust").val();
        var topping = $("select#topping").val();
        var newPizzaOrder = new order(size, crust, topping);
        newPizzaOrder.cost();
        total.push(newPizzaOrder.price);
        $("#size").text(size);
        $("#crust").text(crust);
        $("#topping").text(topping);
        $("#total").text(newPizzaOrder.totalCost());
    });
    $("#order2").click(function() {
        prompt("Kindly insert you name")
        prompt("kindly insert you location")
        prompt("Kindly insert your addrress")
        alert("You will be charged an extra KES.100 for delivery")
        alert("your bill is" + newPizzaOrder.cost + "delivery cost")
        alert("Thank you for purchasing from SLICE PIZZA!Your order will be delivered to your location :pizza: :truck: in the next 30 minutes")
    });
})
function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name === "") {
        alert("Please write your name!");
    } else if (email === "") {
        alert("Please write your name!");
    } else if (message === "") {
        alert("Please write a message");
    } else {
        alert("We have recieved  your message dear " + name + ", " + " thank you for getting in touch with us");
    };
}
