// the original object that contains the method (guesture) 
let greet  ={
    greetPrefix: "Hello",
    guesture:function(message){
        return `${this.greetPrefix}  ${message}`;
    }
};

// create a bind() delegation and store it in new accessible function

let greetFrench = greet.guesture.bind({greetPrefix: 'Bonjour'}); // overwrite greetPrefix
let greetEnglish = greet.guesture.bind({greetPrefix: 'Hello'}); // use greetPrefix as it it

let greetHindi  =greet.guesture.bind({greetPrefix: 'Nameste'});

// access a method from the object using delegation created using bind()

console.log(greetFrench('Mahesh'));
console.log(greetEnglish('Mahesh'));
console.log(greetHindi('Mahesh'));
