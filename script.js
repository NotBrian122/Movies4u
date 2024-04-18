const title = document.querySelector('.title')//titlecard

const curt1 = document.querySelector('.curt1')//curtians
const curt2 = document.querySelector('.curt2')

const buk1 = document.querySelector('.buk1')//the popcorn bucket and popcorn
const pop1 = document.querySelector('.pop1')
const pop2 = document.querySelector('.pop2')
const buk2 = document.querySelector('.bukbehind')

const seat1 = document.querySelector('.seat1')//the seats
const seat2 = document.querySelector('.seat2')
const seat3 = document.querySelector('.seat3')
const seat4 = document.querySelector('.seat4')

document.addEventListener('scroll',function(){
    let value =window.scrollY
    
    title.style.marginTop = value* 1.1 + 'px'

    curt1.style.marginLeft = -value * 1.1 + 'px'
    curt2.style.marginLeft = +value * 1.1 + 'px'
    //bucket translateion 
    buk1.style.marginBottom = -value * .01 + 'px'
    buk2.style.marginBottom = +value* .01 + 'px'
    //popcorn translation 
    pop1.style.marginBottom = -value * .4 + 'px'
    pop2.style.marginBottom = -value * .25 + 'px'

    //seat translation 
    seat1.style.marginRight = -value * .05 + 'px'//seat 1
    seat1.style.marginBottom = -value * .01 + 'px'

    seat2.style.marginRight = +value * .05 + 'px'//seat 2
    seat2.style.marginBottom = +value * .01 + 'px'

    seat3.style.marginRight = +value * .05 + 'px'//seat 3
    seat3.style.marginBottom = +value * .01 + 'px'

    seat4.style.marginRight = +value * .05 + 'px'//seat 1
    seat4.style.marginBottom = +value * .01 + 'px'
})