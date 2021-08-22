//*** memory input
const firstMemory = document.getElementById("first-memory");
const secondMemory = document.getElementById("second-memory");
const memoryCostField = document.getElementById("memory-cost");
const total = document.getElementById("total");

//update base price
const basePrice = document.getElementById("base-price");
basePrice.innerText = 1299;

//memory price
firstMemory.addEventListener("click", function () {
  memoryCostField.innerText = "0";
  updateTotal();
});
secondMemory.addEventListener("click", function () {
  memoryCostField.innerText = "180";
  updateTotal();
});

//***storage input
const firstSsd = document.getElementById("first-ssd");
const secondSsd = document.getElementById("second-ssd");
const thirdSsd = document.getElementById("third-ssd");
const storageCostField = document.getElementById("storage");

//storage price
firstSsd.addEventListener("click", function () {
  storageCostField.innerText = "0";
  updateTotal();
});
secondSsd.addEventListener("click", function () {
  storageCostField.innerText = "100";
  updateTotal();
});
thirdSsd.addEventListener("click", function () {
  storageCostField.innerText = "180";
  updateTotal();
});

//***delivery input
const free = document.getElementById("free");
const express = document.getElementById("express");
const deliveryCostField = document.getElementById("delivery");

//delivery price
free.addEventListener("click", function () {
  deliveryCostField.innerText = "0";
  updateTotal();
});
express.addEventListener("click", function () {
  deliveryCostField.innerText = "20";
  updateTotal();
});
//sum all the values
function updateTotal() {
  const base = Number(basePrice.innerText);
  const memoryPrice = Number(memoryCostField.innerText);
  const storagePrice = Number(storageCostField.innerText);
  const deliveryPrice = Number(deliveryCostField.innerText);
  const grandTotal = base + memoryPrice + storagePrice + deliveryPrice;
  total.innerText = grandTotal;
}
//promo code function
// function getPromo() {
//   let totalCost = total.innerText;
//   let percentageToGet = 20;
//   const getExpence = (percentageToGet / 100) * totalCost;
//   totalCost = totalCost - getExpence;
// }
