var x=[];
var y=1;
for(var i=1;i<11;i++){
    x[i]=i*y;
    y=i*y;
    console.log("El factorial de "+i+" es: "+x[i]+"<br>");
}