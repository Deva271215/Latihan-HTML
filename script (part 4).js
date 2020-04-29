function estimateTotal(event){
    event.preventDefault();
    alert("testing");
    if (state.value === ""){
        alert("Silahkan pilih negara pengiriman");

        state.focus();
        return;
    }

var itemBall = document.getElementById("txt-q-bball").value,
    itemJersey = document.getElementById("txt-q-jersey").value,
    itemPower = document.getElementById("txt-q-power").value,
    shoppingState = state.value,
    shippingMethod = document.querySelector("[name=r_method]:checked").value;

var totalQty = itemBall + itemJersey + itemPower,
    shippingCostPer, shippingCost, taxFactor = 1, 
    estimate, totalItemPrice = 90 * itemBall + 25 * itemJersey + 30 * itemPower;

if (shoppingState === "CA"){
    taxFactor = 1.075;
}

switch (shippingMethod){
    case "usps":
        shippingCostPer = 2;

        break;
    case "ups":
        shippingCostPer = 3;
        break;

    default:
        shippingCostPer = 0;
        break;
            }

            shippingCost = shippingCostPer * totalQty;
            shippingCost = shippingCostPer * totalQty;

            estimate = totalItemPrice * taxFactor + shippingCost;
            estimate = (totalItemPrice * taxFactor) + shippingCost;

            document.getElementById("txt-estimate").value = "$"+ parseFloat(estimate).toFixed(2); 

            document.getElementById("txt-estimate").value = estimate;
     
            var result = document.getElementById("results");


            result.innerHTML = "Total Items: " + parseInt(totalQty) + "<br>";
            result.innerHTML += "Total Shipping: $" + parseFloat(shippingCost).toFixed(2) + "<br>";
            result.innerHTML += "Tax: " + ((taxFactor - 1) * 100).toFixed(2) + "% (" + shippingState + ") <br>";
        }