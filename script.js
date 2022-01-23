var intread;
var rescf;
var resck;
var resfc;
var resfk;
var reskc;
var reskf;
var units;


document.querySelector("#input1").addEventListener('input', function(e){
     intread=0;
     rescf = 0;
     resck = 0;
     resfc= 0;
     resfk= 0;
     reskc= 0;
     reskf= 0;
    intread =parseFloat(e.target.value);

  if(intread){
   console.log(intread);
   rescf = ((9/5)*intread+32)
  resck = intread+273;
  
  resfc = (5/9)*(intread-32);
  resfk = ((9/5)*(intread-273))+32;

  reskc = intread - 273;
  reskf = ((5/9)*(intread-32))+273;

  reload();
  }
  else{
   reloadnull();
  }


  
  
})


document.querySelector("#sel").addEventListener('input', function(e){
  
   units = e.target.value;
  

   if(intread){
     reload();
     }
     else{
      reloadnull();
     }
   
})


function reload(){
   console.log("function trigerred");
   
      switch(units){
         case "C": 
        document.querySelector("#changes1").innerHTML = `${intread}°C stands for ${rescf}°F`;
        document.querySelector("#changes2").innerHTML = `${intread}°C stands for ${resck}°K`;
        break;
       
        case "F": 
        document.querySelector("#changes1").innerHTML = `${intread}°F stands for ${resfc}°C`;
        document.querySelector("#changes2").innerHTML = `${intread}°F stands for ${resfk}°K`;
        break;
       
   
        case "K": 
        document.querySelector("#changes1").innerHTML = `${intread}°K stands for ${reskc}°C`;
        document.querySelector("#changes2").innerHTML = `${intread}°K stands for ${reskf}°F`;
      
        break;

        
        default: 
        document.querySelector("#changes1").innerHTML = `Please select the unit`;
        document.querySelector("#changes2").innerHTML = ``;
       
       }
   
        
   }
    

function reloadnull(){
        document.querySelector("#changes1").innerHTML = "Input to de age";
        document.querySelector("#changes2").innerHTML = ``;
}

   
   


