const button =document.getElementById('btn');
const input=document.getElementById('input');

async function getData(cityName){
    
const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=766aaa46011e4d2eab6102327241704&q=${cityName}&aqi=yes`);

return await promise.json();
}

button.addEventListener('click',async ()=>{
    
    const val=input.value;
    const data=await getData(val);

    const temp=document.getElementById("temp");
    temp.innerText=`${data.current.temp_c}°C`
    const city=document.getElementById("city");
    city.innerText=`${data.location.name}`
    const humidity=document.getElementById("humidity");
    humidity.innerText=`${data.current.humidity}%`
    const wind=document.getElementById("wind");
    wind.innerText=`${data.current.wind_kph}km/h`
    const image=document.getElementById("rain");
    image.src=`${data.current.condition.icon}`




  
})

//var url= http://api.weatherapi.com/v1/current.json?key=766aaa46011e4d2eab6102327241704&q=rahuri&aqi=yes