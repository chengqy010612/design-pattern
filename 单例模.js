

var singleton = (function () {
    var instance

    function User(name, age) {
        this.name = name
        this.age = age
    }

    return function (name, age) {
        if (!instance) {
            instance = new User(name, age)
        }
        return instance
    }
})()

// 类实现
class Singleton {
    constructor(name,age) {
        if(!Singleton.instance){
            this.name = name
            this.age = age
        }
        return Singleton.instance
    }
    a(){}
}