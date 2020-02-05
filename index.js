var Mouse =require('./Mouse');
var Cat =require('./Cat');
var mickey= new Mouse('mickey');
var tom =new Cat();
tom.eat(mickey);
mickey.sayhi();
console.log(tom);