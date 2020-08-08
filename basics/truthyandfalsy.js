// falsy ==Flase considers in conditional statement
// NaN not a number
// '' empty string
// null
// 0
// undefined


if (null) {
    console.log("null");
}

console.log('2' + 2);

var user = 2;

if ('2' == user) {
    console.log("'2'==2")
}
// strict type checking with ===
if ('2' === user) {
    console.log("'2'==2")
} else {
    console.log("else '2'===2")
}