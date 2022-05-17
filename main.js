const love = document.createElement('li');
love.id = 'pagle';
love.innerHTML='Love You Pagle Amer';
document.body.appendChild(love);

let elmentToRemove = document.getElementById('pagle');
document.body.removeChild(elmentToRemove);
// this fucnction for button to change background color.
function myFunction() {
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);

    document.body.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
}