const dog_result=document.getElementById("dog_result");

const puppy_result=document.getElementById("puppy_result");

const dog=document.getElementById("dogbtn");
const cat=document.getElementById("puppybtn");


dog.addEventListener('click',getRandomDog);
puppybtn.addEventListener('click',getRandomPuppy);



 function getRandomDog()
{
   fetch("https://random.dog/woof.json")
.then(res=>res.json())
.then(data=>{
  if(data.url.includes('.mp4'))
  {
    getRandomDog()
  }
  else{
  dog_result.innerHTML=`<img src="${data.url}"/>`
  }
})
}
function getRandomPuppy()
{
   fetch("https://random.dog/woof.json")
.then(res=>res.json())
.then(data=>{
  if(data.url.includes('mp4'))
  {
    getRandomPuppy()
  }
  else{
  puppy_result.innerHTML=`<img src="${data.url}"/>`
  }
})
}


    // let response=await fetch(url);
    // console.log(response);
    // let data=await response.json();
    // console.log(data);
    // let index=data.length-1;
