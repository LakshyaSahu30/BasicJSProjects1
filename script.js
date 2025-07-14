let inc=document.querySelector(".inc");
let dic=document.querySelector(".dic");
let res=document.querySelector(".counttracker");
let ln1=document.querySelector(".line1");
let ln2=document.querySelector(".line2");
let reset=document.querySelector(".reset");


let count=0;
let incre=0,decre=0;
inc.addEventListener("click",()=>{
  count++;
  incre++;
  res.innerText=`${count}`;
  ln1.innerText=`Clicks on Increment: ${incre}`;
  if(count>100){
    res.innerText="Too large";
    count=100;
  }
})
dic.addEventListener("click",()=>{
  count--;
  decre++;
  res.innerText=`${count}`;
    ln2.innerText=`Clicks on Decrement: ${decre}`;

   if(count<-100){
    res.innerText="Too Small";
    count=-100;
  }
  
})
reset.addEventListener("click",()=>{
  count=0;
  decre=0;
  incre=0;
  res.innerText=`${count}`;
    ln1.innerText=`Clicks on Increment: ${incre}`;
    ln2.innerText=`Clicks on Decrement: ${decre}`;

   
  
})


