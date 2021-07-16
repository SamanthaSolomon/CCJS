//TYPING EFFECT//
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded')

    const h1Display = document.getElementById('typing')

    const h1 = ['< charmCityJS />', '< charmCityJS />', '< charmCityJS />']
    let i = 0
    let x = 0
    let currentH1 = []
    let isDeleting = false


    function loop(){
        h1Display.innerHTML = currentH1.join('')
        if (i < h1.length) {

            if (!isDeleting && x <= h1[i].length) {
                currentH1.push(h1[i][x])
                x++
                console.log('add letter', x)
            }

            if (isDeleting && x <= h1[i].length){
                currentH1.pop(h1[i][x])
                x--
                console.log('delete letter', x)
            }

            if (x === h1[i].length) {
                isDeleting = true
            }

            if (isDeleting && x === 0){
                currentPhrase = []
                isDeleting = false
                i++
                if (i === h1.length){
                    i = 0
                }
            }

        }
        setTimeout(loop, 400)
    }
    loop()
})



