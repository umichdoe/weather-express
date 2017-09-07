console.log("Sanity Check: JS is working!");
//
$(document).ready(function(){

  var apiKey = 'a6bb13ce7334f8d9eea9862a313100d0';
  $.ajax({
    method: 'GET',
    url: `https://api.openweathermap.org/data/2.5/weather?zip=94597,us&units=imperial&appid=${apiKey}`,
    success: onSuccess,
    error: onError,
  })

function onSuccess(json){
  console.log(json);
  var tempFahrenheit = Math.ceil(json.main.temp);
  $('.temp-details').append(`<p>${tempFahrenheit}</p>`);
}

function onError(xhr, status, errorThrown) {
   console.log('its an error');
}

}); //closes document dot ready
