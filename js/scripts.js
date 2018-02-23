var url = 'https://restcountries.eu/rest/v1/name/';

var countriesList = $('#countries');
var countryArray = [];
$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	if (countryArray.indexOf(countryName) === -1) {
		countryArray.push(countryName);
		$.ajax({
	  		url: url + countryName,
	  		method: 'GET',
	  		success: showCountriesList						
	  	});
	} else {
		console.log("This item already exists");
	} 

	console.log(countryArray);

}

function showCountriesList(resp) {
	resp.forEach(function(item) {
		var newCountry = $('<ul>').addClass("newCountry");
	   	$('<li>').text('Country: ' + item.name).appendTo(newCountry);
	   	$('<li>').text('Background information: ').addClass('nodecor').appendTo(newCountry);
	   	$('<li>').text('Currencies: ' + item.currencies).appendTo(newCountry);
		$('<li>').text('Population: ' + item.population).appendTo(newCountry);
		$('<li>').text('Region: ' + item.region).appendTo(newCountry);
	  	$('<li>').text('Area: ' + item.area).appendTo(newCountry); 
	  	newCountry.appendTo(countriesList);	


	});    
}

