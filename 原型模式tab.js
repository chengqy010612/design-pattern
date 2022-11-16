// function Tabs(dom, type) {
//     this.container = document.querySelector(dom)
//     this.titles = this.container.querySelectorAll('.title li')
//     this.contents = this.container.querySelectorAll('.content li')
//     this.type = type
//     this.change()
// }

// Tabs.prototype.change = function () {
//     for (let i = 0; i < this.titles.length; i++) {
//         this.titles[i].addEventListener(this.type,
//             () => {
//                 for (let j = 0; j < this.titles.length; j++) {
//                     this.titles[j].classList.remove('active')
//                     this.contents[j].classList.remove('active')
//                 }
//                 this.titles[i].classList.add('active')
//                 this.contents[i].classList.add('active')
//             }
//         )
//     }
// }

//类实现

class Tabs {
    constructor(dom, type) {
        this.container = document.querySelector(dom)
        this.titles = this.container.querySelectorAll('.title li')
        this.contents = this.container.querySelectorAll('.content li')
        this.type = type
        this.change()
    }
    change() {
        for (let i = 0; i < this.titles.length; i++) {
            this.titles[i].addEventListener(this.type,
                () => {
                    for (let j = 0; j < this.titles.length; j++) {
                        this.titles[j].classList.remove('active')
                        this.contents[j].classList.remove('active')
                    }
                    this.titles[i].classList.add('active')
                    this.contents[i].classList.add('active')
                }
            )
        }
    }
}

new Tabs('.container', 'mouseover')