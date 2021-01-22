const t1 = setTimeout(() => {

    console.log("t1");

}, 5000);

const t2 = setTimeout(() => {

    console.log("t2");

}, 10000);

t1.unref(); //con este no hay garantia, si algo externo lo mantiene vivo se ejecutara

clearTimeout(t2); // este si garantiza que no se ejecute las task


