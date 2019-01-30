
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

// les petits chats qui bougent
// import des objets 
import images from "./_shared/img/chats/*.jpg";

let i=0;
let nbrImage = countKey(images)

//il crée un tableau a partir de notre objet
//On peut ensuite parcourir le tableau donné et le traiter

function countKey (obj){
	return Object.keys(obj).length;
}
// setInterval permet de faire boucler nos images
// modulo : 1/1, 1/2 ,1/3 etc il ne prend que la partie avant la ,
setInterval(function(){ 

	document.getElementById('x').src = images["chat"+ (i % nbrImage)];
	i++;

}, 3000);

console.log("Hey look in your browser console. It works!");
