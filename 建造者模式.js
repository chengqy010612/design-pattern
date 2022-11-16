
class Navbar {
    init() { }
    getData() {
        setTimeout(()=> {})
     }
    render() { }
}

class Creator {
    async startBuild(builder) {
        await builder.init()
        await builder.getData()
        await builder.render()
    }
}

const op = new Creator()
op.startBuild(new Navbar())