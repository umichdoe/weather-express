console.log("Sanity Check: JS is working!");
//
$(document).ready(function(){

  var apiKey = 'a6bb13ce7334f8d9eea9862a313100d0';
  $.ajax({
    method: 'GET',
    url: `//api.openweathermap.org/data/2.5/weather?zip=94597,us&units=imperial&appid=${apiKey}`,
    success: onSuccess,
    error: onError,
  })

function onSuccess(json){
  console.log(json);
  var tempFahrenheit = Math.ceil(json.main.temp);
  $('.album-details').append(`<p>${tempFahrenheit}</p>`);
  $('.album-details').append(`<p>${json.main.pressure}</p>`);
}

function onError(xhr, status, errorThrown) {
   console.log('its an error');
}

 $.ajax({
   method: 'GET',
   url: 'http://localhost:3500/api/taquerias',
   success: handleSuccessTaco,
   error: handleErrorTaco
 })

function handleSuccessTaco(data) {
  console.log(data[0].name);
  data.forEach(function(item){
    $('.taco-shops').append(`<p>${item.name}</p>`);
  });
}

function handleErrorTaco(xhr, status, errorThrown) {
   console.log('its an error');
}



}); //closes document dot ready
