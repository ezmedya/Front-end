var state = false;

function toogle(){
    if(state){
        document.getElementById("password").setAttribute("type","password");
        document.getElementById("eye").style.color='#cab486';
        state = false;
    }
    else{
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("eye").style.color='#5887ef';
        state = true;
    }
   
}