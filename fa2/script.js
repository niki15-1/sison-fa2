function add() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    
    let sum = parseInt(x) + parseInt(y);
    document.getElementById("results").innerHTML = "The sum of "+ x +" and "+ y +" is " + sum+".";
  }

function subtract() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    
    let difference = x - y;
    document.getElementById("results").innerHTML = "The difference of "+ x +" and "+ y +" is " + difference+".";
  }

  function multiply() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    
    let product = x * y;
    document.getElementById("results").innerHTML = "The product of "+ x +" and "+ y +" is " + product+".";
  }

  function divide() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    
    let qoutient = x / y;
    document.getElementById("results").innerHTML = "The qoutient of "+ x +" and "+ y +" is " + qoutient+".";
  }

  function modulus() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    
    let remainder = x % y;
    document.getElementById("results").innerHTML = "The remainder of "+ x +" and "+ y +" is " + remainder+".";
  }