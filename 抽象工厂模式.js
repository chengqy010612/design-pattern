
class User {
    constructor(name, role, pages) {
        this.name = name
        this.role = role
        this.pages = pages
    }
    welcome() {
        console.log("欢迎" + this.name);
    }
    dataShow() {
        throw new Error('抽象方法需要被实现')
    }
}


class SuperAdmin extends User {
    constructor(name) {
        super(name, 'superadmin', ['home', 'b', 'c'])
    }
    dataShow() { }
    addRight() { }
    addUser() { }
}

class Admin extends User {
    constructor(name) {
        super(name, 'admin', ['home', 'b'])
    }
    dataShow() {
        console.log('data')

    }
    addUser() { }
}

function getAbstractUserFactory(role) {
    switch (role) {
        case 'superadmin':
            return SuperAdmin
        case 'admin':
            return Admin
    }
}

//得到对应的类
let userClass = getAbstractUserFactory('superadmin')
