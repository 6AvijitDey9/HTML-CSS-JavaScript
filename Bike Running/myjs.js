let m=0;
var Intr; //it is possible to initialise veriables without var or let
function start()
{
    Intr=setInterval(run,80);
function run()
{
    if(m==1200){
        clearInterval(Intr);
        m=0;
    }
    else{
    m+=6;
    var go=document.getElementById("bike");
    go.style.marginLeft=m+'px';
    }
}
}
function stop()
{
  clearInterval(Intr);
}

