let sq1=document.getElementById('s1');
sq1.addEventListener('mouseenter',function(){
    let r=Math.floor(Math.random()*100);
    sq1.innerHTML=`<h1>${r}</h1>`;
})
sq1.addEventListener("mouseleave",function(){
    sq1.innerHTML=`<h1>${1}</h1>`;
})
let sq2=document.getElementById('s2');
let color='green'
sq2.addEventListener('mouseenter',function(){
   if(color=='green'){
     sq2.style.backgroundColor='green';
     color='blue';
   }
   else if(color=='blue'){
     sq2.style.backgroundColor='blue';
     color='red';
   }
   else{
     sq2.style.backgroundColor='red';
     color='green';
   }
})
sq2.addEventListener("mouseleave",function(){
    sq2.style.backgroundColor='white';
})
let sq3=document.getElementById('s3');
sq3.addEventListener('mouseenter',function(){
  let r1=Math.floor(Math.random()*256);
    let r2=Math.floor(Math.random()*256);
      let r3=Math.floor(Math.random()*256);
      sq3.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
})
sq3.addEventListener("mouseleave",function(){
   sq3.style.backgroundColor='white';
})

let sq4=document.getElementById('s4');
sq4.addEventListener('click',function(){
  let r1=Math.floor(Math.random()*256);
    let r2=Math.floor(Math.random()*256);
      let r3=Math.floor(Math.random()*256);
      sq1.style.backgroundColor=`rgb(240,240,${r3})`;
      sq2.style.backgroundColor=`rgb(${r1},240,240)`;
      sq3.style.backgroundColor=`rgb(240,${r2},240)`;    
})
sq4.addEventListener("mouseleave",function(){
   sq1.style.backgroundColor='white';
   sq2.style.backgroundColor='white';
   sq3.style.backgroundColor='white';
   
})
