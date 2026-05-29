// Step 1: Create and Initialize Variables

let productName = "Class Book";
let costPerUnit = 10.99;
let basePrice = 29.99;
let discountRate = 0.10; // 10% discount
const salesTaxRate = 0.07; // 7% sales tax
let fixedMonthlyCosts = 2000;

// Step 2: Calculate Pricing & Profit Metrics

let discountedPrice = basePrice * (1 - discountRate);

let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);

let profitPerUnit = finalPriceWithTax - costPerUnit;

let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);

let isProfitablePerUnit = profitPerUnit > ;

// Step 3: Print to Console for HTML Display

console.log("Product Name:", productName);

console.log("Discounted Price (before tax):" + discountedPrice.toFixed(2));

console.log("Final Price with Tax:" + finalPriceWithTax.toFixed(2));

console.log("Profit Per Unit:" + profitPerUnit.toFixed(2));

console.log("Break-Even Units:", breakEvenUnits);

console.log("Is Profitable Per Unit?:", isProfitablePerUnit);