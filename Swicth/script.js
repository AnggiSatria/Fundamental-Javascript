// create variable with pop box prompt for user input
let item = prompt("Masukkan Nama")

// condition with expression
switch(item){ // condition
    case "Kompor":  // action
    alert("Item1") // if data was set true stop action
    break;
    case "Panci":
    alert("Item2")
    break;
    case "LPG":
    alert("Item3")
    break;
    case "Regulator":
    alert("Item4")
    break;
    default:
        alert("wrong item")
}