var temprature = 20;

if (temprature < 20) {
    console.log('it very cold');
} else {
    console.log('it hot');
}

// allow user to acess course if user logged in with facebook
// google email

var email = true;
var facebook = false;
var google = false;

if (email || facebook || google) {
    console.log('user logged in');
} else {
    console.log('invalid user');
}

// ternary operator

var loggedIn = (email || facebook || google) ? true : false;
console.log(loggedIn)