let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let facts=  await getfacts();
    console.log(facts);
    // console.log("button was clicked");
})

let url="https://catfact.ninja/fact";
  async function getfacts() {
    try{
    let res=await axios.get(url);
    return res.data.fact;
    }
    catch(e){
        console.log("error",e);
        return "ERROR: NO fact found"
    }
  }