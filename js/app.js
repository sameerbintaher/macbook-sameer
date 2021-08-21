// memory count 
document.getElementById('memory-8').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    assignCost('memorycost', 0)
    memoryCost.innerText = document.getElementById('memorycost').value
    const memoryTotalPrice = document.getElementById('total-price');
    memoryTotalPrice.innerText = total();
});
document.getElementById('memory-16').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    assignCost('memorycost', 180)
    memoryCost.innerText = document.getElementById('memorycost').value
    const memoryTotalPrice = document.getElementById('total-price');
    memoryTotalPrice.innerText = total();
});

// storage count 
document.getElementById('storage-256').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 0;
    assignCost('storagecost', 0)
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total();
});

document.getElementById('storage-512').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 100;
    assignCost('storagecost', 100)
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total();

});
document.getElementById('storage-1tb').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 180;
    assignCost('storagecost', 180)
    document.getElementById('storagecost').value = 180;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total();
});

// delivery count
document.getElementById('free-delivery').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 0;
    assignCost('deliverycharge', 0)

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total();

});
document.getElementById('charged-delivery').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 20;
    assignCost('deliverycharge', 20)
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total();

});

function total() {
    return parseInt(document.getElementById('memorycost').value) + parseInt(document.getElementById('baseprice').value) + parseInt(document.getElementById('storagecost').value) + parseInt(document.getElementById('deliverycharge').value);
}

function assignCost(id, value) {
    document.getElementById(id).value = value;
}

document.getElementById('promo-code').addEventListener('click', function () {
    var promocode = document.getElementById('promocode').value;
    if (promocode == 'stevekaku') {
        var total_promo_price = parseInt(total()) - (0.2 * parseInt(total()));
        document.getElementById('total-price-after-discount').innerText = total_promo_price;

    }
    else {
        alert("Sorry You Entered Wrong Promo Code;")
    }
});