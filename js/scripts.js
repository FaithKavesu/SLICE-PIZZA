var totalCosts = [];
function order(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.price = 0;
}
var pizzaSize = ["Large", "Medium", "Small"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizaTopping = ["Pepperoni", "Mushrooms", "Onions","Sausage","Bacon","Extra Cheese","Black Olives","Green Peppers" ];
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
    if (this.topping === pizzaTopping[0]) {
        this.price += 300;
    } else if (this.topping === pizzaTopping[1]) {
        this.price += 300;
    } else if (this.topping === pizzaTopping[2]) {
        this.price += 300;
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
    for (var order = 0; order < totalCosts.length; order++) {
        orderTotal += totalCosts[order];
    }
    return orderTotal;
}
$(document).ready(function() {
    $("input#order1").click(function(event) {
        event.preventDefault();
        var sizes = $("select#size").val();
        var crusts = $("select#crust").val();
        var toppings = $("select#topping").val();
        var newPizzaOrder = new order(sizes, crusts, toppings);
        newPizzaOrder.cost();
        totalCosts.push(newPizzaOrder.price);
        $("#size").text(sizes);
        $("#crust").text(crusts);
        $("#topping").text(toppings);
        $("#total").text(newPizzaOrder.totalCost());
    });
    $("#order2").click(function() {
        prompt("Kindly insert you name")
        prompt("kindly insert you location")
        prompt("Kindly insert your addrress")
        alert("You will be charged an extra KES.100 for delivery")
        alert("Thank you for purchasing from SLICE-PIZZA!Your order will be delivered to your location in the next 30 minutes")
        alert("Your total is")
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