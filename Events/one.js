// Genatra Random Colour 

const genColour = function(){
    const hex = "0123456789ABCDEF" ;
    let colour = "#" ;
    for(let i=0;i<6;i++) {
        colour += hex[Math.floor(Math.random() * 16)] ;
    }
    return colour ;
}
let intervalID ;
document.querySelector('#start').addEventListener('click',function(){
   if(!intervalID){
    intervalID = setInterval(function(){
         document.body.style.backgroundColor = genColour()  
    },1000);
   }
});

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(intervalID) 
    intervalID = null
});
