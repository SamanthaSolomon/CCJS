
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded')

    //TYPING EFFECT ON H1//
    const h1Display = document.getElementById("typing")

    //Add new text to the array to include additional messages
    const h1 = ['< CharmCityJS />', '< CharmCityJS />', '< CharmCityJS />']
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
            }

            if (isDeleting && x <= h1[i].length){
                currentH1.pop(h1[i][x])
                x--
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



