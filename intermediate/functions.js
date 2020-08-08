function sayHello(name) {
    console.log(`hello ${name}`);
}

sayHello('dar');
sayHello;


function namstey() {
    return 'hello return'
}

gretting = namstey();
console.log(gretting);

var getUserRole = function (name, role) {
    switch (role) {
        case 'admin':
            return `${name} is admin with all access`;
            break;
        case 'subadmin':
            return `${name} is subadmin with create and delete access`;
            break;
        case 'testprep':
            return `${name} is test prep delete course`;
            break;
        default:
            return `${name} is trial user`;
            break;
    }
}

console.log(getUserRole('Darshit', 'admin'));

// arrow function
// var getUserRole = (name, role)=> {
//     switch (role) {
//         case 'admin':
//             return `${name} is admin with all access`;
//             break;
//         case 'subadmin':
//             return `${name} is subadmin with create and delete access`;
//             break;
//         case 'testprep':
//             return `${name} is test prep delete course`;
//             break;
//         default:
//             return `${name} is trial user`;
//             break;
//     }
// }