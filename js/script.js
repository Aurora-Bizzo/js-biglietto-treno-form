const buttongenerate = document.getElementById ('generate');
let name_client;
let km;
let age;
let price;

generate.addEventListener ('click', function(){

    name_client = document.getElementById('name').value;
    console.log(name_client)

    km = document.getElementById('km').value;
    console.log(km)

    age = document.getElementById('age').value;
    console.log(age)

    if (age <= 17) {
        price = (0.21 * km * 0.8).toFixed(2)
        console.log(price);
      } else if (age >= 65) {
        price = (0.21 * km * 0.6).toFixed(2)
        console.log(price);
      } else if (age > 17 && age < 65) {
        price = (0.21 * km).toFixed(2)
        console.log(price);
    }
})