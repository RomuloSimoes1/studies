
// 3.57
document.addEventListener('keypress', function(send) {
    if (send.key == 'Enter') {
        let btn = document.getElementById('send')
        btn.click()
    }
})

let wage = document.querySelector('#wage')
let r = document.getElementById('r')

function tap() {
    let wa = Number(wage.value)
    if (wa <= 1200) {
        price = wa + (wa * 15 / 100)
    } else {
        price = wa + (wa * 10 / 100)
    }
    r.innerHTML = `Who earned R$${wa.toFixed(2)} now earn R$${price.toFixed(2)}`
}

