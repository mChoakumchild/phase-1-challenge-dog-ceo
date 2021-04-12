console.log('%c HI', 'color: firebrick')



//Challenge 1
document.addEventListener('DOMContentLoaded', e => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(e => {
        let dogImage = document.querySelector('div#dog-image-container')
        let picture = document.createElement('img')
        e.message.forEach(e => {
        
                picture.src = e.value
                dogImage.append(picture)
        }    
    })

//Challenge 2
    let button = document.createElement('input')
    button.type = "edit"
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(e => {
        let dogBreed = document.querySelector('ul#dog-breeds')
        
        e.message.forEach(e => {
            if (typeof(e.message.value) == 'Array'){
                e.forEach(e => {
                    let breeds = document.createElement('li')
                    breeds.innerText = toString(e) + toString(e.value)
                    breeds.append(button)
                    dogBreed.append(breeds)
                }) 
            }
            else{
                breeds.innerText = e.value
                breeds.append(button)
                dogBreed.append(breeds)
            }
    })

// Challenge 3

dogBreed.addEventListener("click", (e) => {
    e.preventDefault() 
    let indx = e.target.closest('li'); 
    if (!indx) return; 
    if (e.target.matches("button[type=edit]")){
        let color = "red";
        colorChecker(indx,color)
    } 
})


// Challenge 4
let firstLetter = document.querySelector('select')
dogBreeds.forEach(e => 
    if (firstLetter = e.charAt(0)){
            
    }
    else {
        return ;
    }

)

function colorChecker(text,color){
    text.style.color = color;
}