let p=new Promise((resolve,reject)=>
    {
    let success=true
    if(success)
    {
        resolve("promise is fulfilled");
    }
    else{
        reject("promise rejected");
    }
});

    p.then((message)=>{
        console.log("msg resolve"+message)
    })
    p.catch((message)=>{
        console.log("msg rejected"+message)
    })



    //--------- MORE ADVANCED ---------------

    let pr=new Promise((resolve,reject)=>{
        let success=true
        if(success)
        {
            resolve("promise resolved");
        }
        else{
            reject("promise rejected")
        }
    })

    pr.then((message)=>{
        console.log("first msg"+message);
        return "promise resolved msg2";
    })
    .then((message)=>{
        console.log("msg2: "+message);
        return "promise resolved msg3";
    })
    .then((message)=>{
        console.log("msg3:"+message);
        
    })




let url="https://catfact.ninja/fact";
  async function getfacts() {
    try{
    let res=await fetch(url);
    let data=await res.json();
    console.log(res);
    console.log(data);


    let res2=await fetch(url);
    let data2=await res2.json();
    console.log(data2);
    
    let res3=await fetch(url);
    let data3=await res3.json(); // 
    console.log(data3);
    
  }
  catch(e){
    console.log("error",e);
  }
  }