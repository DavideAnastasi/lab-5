window.addEventListener("DOMContentLoaded", e => {
    let button = document.getElementById("toServer")
    button.addEventListener("click", e => {
        let target_button = e.target
        console.log("hai cliccato su",target_button)
        let display = document.getElementById("display")
        display.innerHTML = "<span>ciao</span>"
    })
})