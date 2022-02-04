let getButton = document.querySelector('button')
getButton.addEventListener("click", darkMode)


function darkMode(){
    let getSpan = document.querySelector('span')
    getSpan.innerHTML == "Light" ? getSpan.innerHTML = 'Dark' : getSpan.innerHTML = 'Light'

    let getContainer = document.getElementsByClassName('container')
    getContainer[0].classList.toggle('black')

    let getButton = document.querySelector('button')
    document.getElementById('dark') == null ? getButton.setAttribute('id','dark') : getButton.removeAttribute('id','dark')

    let getLabel = document.querySelector('label')
    getLabel.classList.toggle('dark')
    
}