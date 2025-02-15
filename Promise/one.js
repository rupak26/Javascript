const promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Promise");
        resolve()
    },1000)
});

// promiseOne.then(function(){
//     console.log("Promise consume") ;
// })

async function one(){
    try {
        const response = await promiseOne ;
        console.log("Promise consume")
    } catch (error) {
        console.log(error)
    }
}
one()

fetch('API')
.then((response) => {
    return response.body ;
}).then( (data) => {
    console.log(data) ;
}).catch( (error) => {
    console.log(error) ;
})