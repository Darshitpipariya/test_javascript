var sellingPrice = 199;
var listingPrice = 799;
var discountPercentage = ((listingPrice - sellingPrice) / listingPrice) * 100

console.log(`
Discounted percentage is ${Math.round(discountPercentage)}%
`);

