// memory count 
document.getElementById('memory-8').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 0;
});
document.getElementById('memory-16').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 180;
});

// storage count 
document.getElementById('storage-256').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 0;
});

document.getElementById('storage-512').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 100;
});
document.getElementById('storage-1tb').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 180;
});

// delivery count
document.getElementById('free-delivery').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 0;
});
document.getElementById('charged-delivery').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = 20;
});

let totalPrice = document.getElementById('total-price')