class Alert {

    id = ''

    constructor(background_color, text, time) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let str = ''
        for (let i = 0; i < 7; i++) {
            str += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        this.id = str

        let overdiv
        if (!document.getElementById("__ALERT_CONTAINER__")) {
            overdiv =
                document.createElement("div")
            overdiv.id = '__ALERT_CONTAINER__'
            overdiv.style.position = 'fixed'
            overdiv.style.zIndex = 100000000
            overdiv.style.maxWidth = '40%'
            overdiv.style.top = 15
            overdiv.style.right = 10
            overdiv.style.position = 'absolute'
            document.body.appendChild(overdiv)
        } else {
            overdiv = document.getElementById('__ALERT_CONTAINER__')
        }

        const alert = document.createElement("div")
        alert.id = this.id
        alert.style.padding = '10px'
        alert.style.backgroundColor = background_color
        alert.style.borderRadius = '10px'

        const alert_text = document.createElement("label")
        alert_text.innerHTML = text
        alert_text.id = `${this.id}_TEXT`
        const alert_close = document.createElement("button")
        alert_close.innerHTML = 'Close'
        alert_close.id = `${this.id}_CLOSE`
        alert_close.onclick = () => {
            this.remove()
        }


        alert.appendChild(alert_text)
        alert.appendChild(document.createElement('br'))
        // alert.appendChild(alert_close) //IF YOU WANT A "CLOSE" BUTTON
        overdiv.appendChild(alert)
        const br = document.createElement('br')
        br.id = `${this.id}-BR`
        overdiv.appendChild(br)
        if (time && time != 0) {
            setTimeout(() => {
                this.remove()
            }, time)
        }
    }

    remove() {
        document.getElementById("__ALERT_CONTAINER__").removeChild(document.getElementById(this.id))
        document.getElementById("__ALERT_CONTAINER__").removeChild(document.getElementById(`${this.id}-BR`))
    }
}
