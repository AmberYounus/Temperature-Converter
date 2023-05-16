function temperatureConverter(num){
   num = parseFloat(num);
   document.getElementById("outputCelcius").innerHTML =(num-32)/1.8;
   document.getElementById("outputKelvin").innerHTML = ((num-32)/1.8)+273.15;
}
document.getElementById("inputFahrenheit").style.fontSize ="20px";
