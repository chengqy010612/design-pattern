


function Create (name,age) {
 this.name = name
 this.age = age
}


Create.prototype.say = function () {
    console.log('say')
}



class  Person{
    constructor(name,age) {

    }
}

let person = new Create('cqy',19)
// console.log(person);