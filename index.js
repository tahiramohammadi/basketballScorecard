// javascript
 let lethome=document.getElementById("home_score");
let letguest=document.getElementById("guest_score");
let homebtn=document.querySelectorAll(".homebtn");
let guestbtn=document.querySelectorAll(".guestbtn");
let reset =document.getElementById("reset");
let save=document.getElementById("save");
let homecount=0;
let guestcount=0;
homebtn.forEach((btn)=>{
btn.addEventListener("click",()=>{
    homecount += Number(btn.value);
    lethome.innerHTML =homecount;
} )
});

guestbtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        guestcount += Number(btn.value);
        letguest.innerHTML=guestcount;
    } )
    });
    
    save.addEventListener("click", ()=>{
        if(homecount >20 && homecount >  guestcount){
           alert("home Win");
           Reset();
        }else if (guestcount >20 && guestcount > homecount){
            alert("guest win");
            Reset();
        }else{
            alert("mark is less than 20")
        }
    })
    reset.addEventListener("click", () => {
        Reset();
      });
       
    function Reset(){
        lethome.innerHTML = 0;
        letguest.innerHTML = 0;
        homecount = 0;
        guestcount = 0;
      }


