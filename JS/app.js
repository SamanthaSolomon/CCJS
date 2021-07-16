//TYPING EFFECT//
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded')

    const textDisplay = document.getElementsByClassName('typing')
    const h1 = ['< charmCityJS />', '< charmCityJS />', '< charmCityJS />']
    let i = 0
    let x = 0
    let currentH1 = []


    function loop(){
        textDisplay.innerHTML = currentH1
        if (i < h1.length) {
            console.log(h1[i])

            if (x < h1[i].length) {
                console.log(h1[i][x])
                currentH1.push(h1[i][x])
                x++
            }

            if (x == h1[i].length) {
                i++
            }
        }
        setTimeout(loop, 500)
    }
    loop()
})



