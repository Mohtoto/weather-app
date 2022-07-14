const apikey = '7f8c9ad111a05119107a914dbe649ece'
const baseurl = 'https://api.openweathermap.org/data/2.5/'

const input = document.querySelector('.search__input').value



async function inputsearch(event){
    const input = document.querySelector('.search__input').value

    if(event.keyCode === 13)
    {
        main(input)
    }

}

async function main(input){


    const data =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&APPID=7f8c9ad111a05119107a914dbe649ece`)
    const result = await data.json()

   
    
    document.querySelector('.main__header').innerHTML = result.name
    document.querySelector('.sub__header').innerHTML = result.sys.country
    document.querySelector('.temp__deg').innerHTML = `${result.main.temp.toFixed(0)}<span class="change__c">°C</span>`
    document.querySelector('.weather').innerHTML = result.weather[0].description
    document.querySelector('.high').innerHTML = `<span>High:</span>${result.main.temp_max.toFixed(0)}<span>°C</span>` 
    document.querySelector('.low').innerHTML = `<span>Low:</span>${result.main.temp_min.toFixed(0)}<span>°C</span>`

    document.body.style.backgroundImage = "url('https://source.unsplash.com/3440x1440/?" + input + "')"
    
        
       
}
