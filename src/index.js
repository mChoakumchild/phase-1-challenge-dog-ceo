console.log('%c HI', 'color: firebrick')
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let dogBreed = document.querySelector('ul#dog-breeds')

//Challenge 1
document.addEventListener('DOMContentLoaded', e => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(res => {
        let dogImage = document.querySelector('div#dog-image-container')
       
        res.message.forEach(urlstring => {
            let picture = document.createElement('img')
                picture.src = urlstring
                dogImage.append(picture)
        })    
    })

//Challenge 2
    
    
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(res => {
        let y = res.message;
        let val = Object.keys(y);
        
        //console.log(val)
        val.forEach(breedstring => {
            let button = document.createElement('button')
            button.type = "edit"
            button.innerText = "Select"
            let breeds = document.createElement('li')
            breeds.innerText = breedstring
            breeds.id = breedstring
            breeds.append(button)
            dogBreed.append(breeds)
            
            
        }) 
        dogBreedDisplay(val); 
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
function dogBreedDisplay(val) { 
    let firstLetter = document.querySelector('select')
    let dogID = document.querySelector("vizsla")
    //let abc = dogID.innerText
    //console.log(abc)
    //console.log(dogNodes)
    //console.log(val)
    val.forEach(dogs =>  {       //Can you use forEach on a DOM node?
    //console.log(dogs)
    //let dogNum = `#${dogs}`
    let dogNum = "#vizsla"
    //console.log(dogNum)
    let dogID = document.querySelector("vizsla")
    console.log(dogID)
        // if (firstLetter.value == dogID.innerText.charAt(0)){
        //     dogID.style.display = 'block';
        // }
        // else {
        //     dogID.style.display = 'none';
        // }
        
    })

}

    function colorChecker (text,color) {
        text.style.color = color;
    }

})
