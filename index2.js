let wadda1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("set time out1 started")
    },5000)
    resolve()
})

wadda1.then(function(){
    let wadda2=new Promise(function(resolve,reject){
        resolve("Wadda2 resolved")
    })
    return wadda2
}).then((function(value){
    console.log(value)
}))