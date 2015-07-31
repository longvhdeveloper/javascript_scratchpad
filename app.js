// function b() {
//     console.log("Called b!");
// }
//
// b();
//
// console.log(a);
//
// var a = "Hello World";
//
// console.log(a);

/*if (a === undefined) {
    console.log("a is undefined!");
} else {
    console.log("a is defined!");
}*/

// function b() {
//     var myVar;
//     console.log(myVar);
// }
//
// function a() {
//     var myVar = 2;
//     console.log(myVar);
//     b();
// }
//
// var myVar = 1;
// console.log(myVar);
// a();
// console.log(myVar);


// function b() {
//     console.log(myVar);
// }
//
// function a() {
//     var myVar = 2;
//     b();
// }

// function a() {
//
//     function b() {
//         console.log(myVar);
//     }
//
//     var myVar = 2;
//     b();
// }

// var myVar = 1;
// a();


// function waitThreeSeconds() {
//     var ms = 3000 + new Date().getTime();
//     while (new Date() < ms) {}
//     console.log("finished function");
// }

// function clickHandler() {
//     console.log("click event !");
// }

// document.addEventListener('click', clickHandler);


// waitThreeSeconds();
// console.log("finished execution");

//var a = 3 +4;
//var a = 4 > 3;
//var a = 3 + 4 * 5;
//console.log(a);

var a = (3 + 4) * 5;
console.log(a);

//var a = 2, b =3, c = 4;
//a = b = c;
//
//console.log(a);
//console.log(b);
//console.log(c);

//var a = 1 + 2;
//var a = "Hello" + "world";
//var a = "1" + 2 * 3;
//console.log(a);
//console.log( 3 < 2 < 1);

console.log( 1 < 2 < 3);
console.log(null < 1);
console.log("" == 0);
console.log("" == false);

//var a = 0;

//var b = false;

//if (a === b) {
//    console.log("They are equal");
//} else {
//    console.log("They are not equal");
//}

//var a;

//a = 0;

//goes to internet and look for a value
//if (a || a === 0) {
//    console.log("something is there");
//}

//function greet(name) {
//    name = name || "<Your name here>";
//    console.log("Hello " + name);
//}
//greet();
//greet
//greet("Jackie");

//console.log(libraryName);
/*var person = new Object();

person["firstname"] = "Jackie";
person["lastname"] = "Wu";
var firstnameProperty = "firstname";
console.log(person);
console.log(person[firstnameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "Nguyen Van Dau";
person.address.city = "Ho Chi Minh";

console.log(person.address.city);
console.log(person.address.street);
console.log(person['address']["state"]);*/

var person = {
    firstname : "Jackie",
    lastname : "Wu",
    address : {
        street : "Nguyen Van Dau",
        city : "Ho Chi Minh",
        country : "VietNam"
    }
};

function greet(person) {
    console.log("Hi " + person.firstname);
}

greet(person);
greet({firstname: "Anna", lastname: "Joe"});

console.log(person);

person.address2 = {
    street: "Nguyen Dinh Chieu",
};
