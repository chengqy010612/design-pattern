

function userFactory(role) {
    function User(role, pages) {
        this.role = role
        this.pages = pages
    }
    switch (role) {
        case "superadmin":
            return new User('superadmin', ["home", "user-manage"])
        case "admin":
            return new User('admin', ["home"])
        default:
            return "参数错误"
    }
}
new User('superadmin', ["home", "user-manage"])
new User('admin', ["home"])


//类实现
class User {
    constructor(role, pages) {
        this.role = role
        this.pages = pages
    }
    static userFactory(role) {
        switch (role) {
            case "superadmin":
                return new User('superadmin', ["home", "user-manage"])
            case "admin":
                return new User('admin', ["home"])
            default:
        }
    }
}

let a = new User.userFactory('admin')

