// Array general

const posts = [{
    name:'juan',
    lastName:'sacco',
    area:'desarrollo',
    id:'1'
},
{
    name:'lucas',
    lastName:'cucci',
    area:'desarrollo',
    id:'2'
},
{
    name:'matias',
    lastName:'acuña',
    area:'desarrollo',
    id:'3'
}
]

// Metodo FIND
// Devuelve el objeto completo que contiene el name asignado. 
// Tambien se podria buscar por lastName, area o id. 

const find = posts.find(post => post.name === 'juan'); 

console.log(find);

// Metodo SOME
// Nos va a devolver un boolean, dependiendo de si existe (true) o si no (false).

const some = posts.some(post => post.id === '2');  // true

console.log(some);

// Metodo INCLUDES
// Nos permite ver si existe dentro de un [] ciertra palabra.
// Se aplica dentro de otros metodos por ej SOME.
// Devuelve un valor boolean. 

const someIncludes = posts.some(post => post.name.includes('felix'));  // false

console.log(someIncludes);

// Metodo EVERY 
// A diferencia del SOME, éste comprueba que en TODOS los objetos del [] se cumpla la condición.
// Devuelve un valor boolean. 

const every = posts.every(post => post.area.includes('desarrollo')); // true

console.log(every);

// Metodo MAP 
// Se puede pensar como si fuese un bucle for, pero de una manera más declarativa. 
// Devuelve un [] con todos los valores de lastName (en este caso) del [] original. 

const map = posts.map(post => post.lastName);

console.log(map);

// Metodo FILTER
// Devuelve un [] con {objeto/s} dentro, siempre y cuando cumpla dicha condición.  

const filter = posts.filter(post => post.area.includes('desarrollo'));

console.log(filter);