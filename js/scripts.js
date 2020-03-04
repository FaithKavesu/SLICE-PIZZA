  function getSize(){
    var size = document.getElementById("size").value
    return parseInt(size);
  }
  function getCrust(){
    var crust = document.getElementById("crust").value
    return parseInt(crust);
  }
  function getToppings(){
    var topping = document.getElementById("topping").value
    return parseInt(topping);
  }
  function getNumber(){
    var number = document.getElementById("number").value
    return parseInt(number);
  }
  function getCost(){
    var Totalcost =(getSize()+getCrust()+getToppings()+getNumber());
    alert("Thank you for using SLICE PIZZA,your total amounts to" + (Totalcost));
  };
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