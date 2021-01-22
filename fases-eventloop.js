
const fs = require('fs');
setImmediate(() => console.log(1));
Promise.resolve().then(() => console.log(2));
process.nextTick(() => console.log(3));
fs.readFile("hola.txt", () => {
    console.log(4);
    setTimeout(() => console.log(5));
    setImmediate(() => console.log(6));
    process.nextTick(() => console.log(7));
});

console.log(8);

//--------FASES------

//8, 3*, 2*   - Poll
//1           - Check
//-           - Close
//-           - Timers
//-           - Pending

//TERMINA CON TODAS LAS FASES Y SE REGRESA PARA REVISAR SI QUEDARON PENDIENTES
//4, 7*       - Poll
//6           - Check
//-           - Close
//5           - Timers
//-           - Pending

//SE CIERRA EL PROCESO (CON 2 ITERACIONES)



