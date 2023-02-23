parent=document.querySelector('body')
child=document.createElement('div')
parent.append(child)
 btn=document.createElement('button')
 child.append(btn)
 btn.innerText='click here'
 btn.setAttribute('onclick','clicking(this)')
//parent.innerText= dis()
function clicking(){

 dis();
}

function dis(){
    parent=document.querySelector('body')
    child=document.querySelector('div')
    parent.append(child)

setTimeout(()=>{
     child.innerText='10';
   
     console.log('10');
    setTimeout(()=>{
        child.innerText='';
        child.innerText='9';
         console.log('9');
         setTimeout(()=>{
            child.innerText='';
            child.innerText='8';
            console.log('8');
             setTimeout(()=>{
                child.innerText='';
                child.innerText='7';
               console.log('7');
                 setTimeout(()=>{
                    child.innerText='';
                    child.innerText='6';
                   console.log('6');
                     setTimeout(()=>{
                        child.innerText='';
                        child.innerText='5';
                        console.log('5');
                         setTimeout(()=>{
                            child.innerText='';
                            child.innerText='4';
                            console.log('4');
                             setTimeout(()=>{
                                child.innerText='';
                                child.innerText='3';
                                 console.log('3');
                                 setTimeout(()=>{
                                    child.innerText='';
                                    child.innerText='2';
                                     console.log('2');
                                     setTimeout(()=>{
                                        child.innerText='';
                                        child.innerText='1';
                                         console.log('1');
                                         setTimeout(()=>{
                                            child.innerText='Wish You Happy Independence Day........!';
                                             
                                         },1000)  
                                     },1000)  
                                 },1000)   
                             },1000)   
                         },1000)  
                     },1000) 
                 },1000) 
             },1000)
         },1000)
     },1000)
 },1000)
 
 
}





