const form = document.querySelector('form') 

form.addEventListener('submit' , function(event){
    event.preventDefault() 
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const restults = document.querySelector('#results')

    console.log(height , weight);
    
    if(height < 0 || isNaN(height)) {
        restults.innerHTML = `provide a valid height`
    } else if(weight < 0 || isNaN(weight)) {
        restults.innerHTML = `provide a valid weight`
    } else {
        const Bmi = (weight / ((height * height)/10000)).toFixed(2)
        restults.innerHTML = `<span>${Bmi}</span>`
    }
})