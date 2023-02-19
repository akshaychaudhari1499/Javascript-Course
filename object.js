console.log("Welcome to JS");
//object defination
const data = {
    firstname:'Akshay',
    lastname:'Chaudhari',
    birthyear:1999,
    calcAge:function(){return 2023-this.birthyear},          //use of this keyword to get the object keys
    job:"software Engineer",
    getSummary:function(){return `My name is ${this.firstname} ${this.lastname} I am ${this.calcAge()} year old and I am a ${this.job}`}   //we can use the methods in the same object itself ,here we used calcAge() to get the age .

}

document.write(data.getSummary())