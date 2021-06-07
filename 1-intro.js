const amount = 9

if (amount<10) {
    console.log("Smaller than 10")
}else{
    console.log('====================================');
    console.log("Bigger than 10");
    console.log('====================================');
}

setInterval(()=>{
    console.log("Hello World")
},1000)

const sayHi = (name) => {
    console.log(`hi to ${name}`)
}

sayHi('Arch')