const submitBtn=document.getElementById('submitBtn')
const cityName=document.getElementById('cityName')
const temp_real_value=document.getElementById('temp_real_value')
const temp_status=document.getElementById('temp_status')
const city_name=document.getElementById('city_name')
const middlelayer=document.querySelector('.middle_layer')
const getinfo=async(event)=>{
    event.preventDefault();
    
    if(cityName.value===''){
        city_name.innerText="Plz write the name before search"
        middlelayer.classList.add('data_hide')
        cityName.value=""
    }
    else{
        try{

            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=928d016191c449344c2259076a937c2b`
             const response =await fetch(url)
            const data= await response.json()
            const arrdata=[data]
            console.log(arrdata)
            temp_real_value.innerText=arrdata[0].main.temp;
            city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`
            let tempmode=arrdata[0].weather[0].main
            if (tempmode == "Sunny") {
                temp_status.innerHTML =
                  "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
              } else if (tempmode == "Clouds") {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud' style='color:#689eec;'></i>";
              } else if (tempmode == "Mist") {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
              }
              else if (tempmode == "Rain") {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
              } 
              else {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud' style='color:#689eec;'></i>";
              }
              middlelayer.classList.remove('data_hide')
              cityName.value=""
            
        }
        catch{
            city_name.innerText='Plz Enter city name correctly'
            middlelayer.classList.add('data_hide')
            cityName.value=""
        }

    }
}
submitBtn.addEventListener('click',getinfo)

