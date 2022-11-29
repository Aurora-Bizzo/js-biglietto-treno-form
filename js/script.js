const button_generate = document.getElementById ('generate');
let name_client;
let km;
let age;
let price;

button_generate.addEventListener ('click', function(){

    name_client = document.getElementById('name').value;

    km = document.getElementById('km').value;

    age = document.getElementById('age').value;

    if (age == 'minorenne') {
        price = (0.21 * km * 0.8).toFixed(2);
        offer = 'Biglietto ridotto under 18';
      } else if (age == 'over') {
        price = (0.21 * km * 0.6).toFixed(2);
        offer= 'Biglietto ridotto over 65';
      } else if (age == 'maggiorenne') {
        price = (0.21 * km).toFixed(2);
        offer= 'Biglietto standard';
      }
    
    document.getElementById ('put_name').innerHTML = name_client;
    document.getElementById ('put_offer').innerHTML = offer;
    document.getElementById ('put_price').innerHTML = `€ ${price}`;
})