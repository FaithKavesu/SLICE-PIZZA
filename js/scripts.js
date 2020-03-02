var total = [];

function order(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.price = 0;
}
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var topping = ["Pepperoni", "Mushrooms", "Onions", "Sausage","Bacon","Extra Cheese","Black Olives","Green Peppers" ];
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
    } else if (this.topping === topping[1]) {
        this.price += 200;
    } else if (this.topping === topping[2]) {
        this.price += 200;
    } else if (this.topping === topping[3]) {
        this.price += 200;
    } else if (this.topping === topping[4]) {
        this.price += 200;    
    } else if (this.topping === topping[5]) {
        this.price += 200;
    } else if (this.topping === topping[6]) {
        this.price += 200;
    } else if (this.topping === topping[7]) {
        this.price += 200;
    }     
    return this.price;
}
order.prototype.total = function() {
    var orderTotal = 0;
    for (var order = 0; order < totalCosts.length; order++) {
        orderTotal += totalCosts[order];
    }
    return orderTotal;
}
$(document).ready(function() {
    $("input#order1").click(function(event) {
        event.preventDefault();
        var size = $("select#size").val();
        var crust = $("select#crust").val();
        var topping = $("select#topping").val();
        var newPizzaOrder = new order(sizes, crust, topping);
        newPizzaOrder.cost();
        total.push(newPizzaOrder.price);
        $("#size").text(size);
        $("#crust").text(crust);
        $("#topping").text(topping);
        $("#total").text(newPizzaOrder.total());
    });
    $("#order2").click(function() {
        prompt("Kindly insert you name")
        prompt("kindly insert you location")
        prompt("Kindly insert your addrress")
        alert("You will be charged an extra KES.100 for delivery")
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
