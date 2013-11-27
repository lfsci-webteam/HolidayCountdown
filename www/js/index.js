function displayHolidays(data) {
	//$('#content').text(JSON.stringify(data));
	//alert(data[0].HolidayName);
	$('.holidayName').text(data[0].HolidayName);
	//$.each(data, function (index, element) {
	//	alert(element.HolidayName);
	//});
}

var app = {
	// Application Constructor
	initialize: function () {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function () {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	onDeviceReady: function () {

		var parentElement = document.getElementById('deviceready');
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		//try {
		//	//$('#HomeScreen').on('pagebeforeshow', function () {

		//	//	// query the holidays web service to get all the holidays
		//	//	//var url = 'http://batman.byu.local/HolidayService/HolidayService.svc/rest/GetHolidays/start/1-1-2013/end/1-1-2014?callback=?';
		//	//	//$.getJSON(myUrl, null, displayHolidays); // since the data is passed in the url we pass a null string as the url.
		//	//	//$.getJSON('http://google.com/', function (data) { alert(data); });

		//	//	//var myUrl = 'http://lswebservices.byu.edu/holidays/HolidayService.svc/rest/GetHolidays/start/1-1-2013/end/1-1-2014';
		//	//	//$.ajax({
		//	//	//	url: myUrl,
		//	//	//	dataType: 'jsonp',
		//	//	//	jsonp: 'callback',
		//	//	//	timeout: 5000,
		//	//	//	success: function (data, status) {
		//	//	//		//data loaded
		//	//	//		alert('success');
		//	//	//		displayHolidays(data);
		//	//	//	},
		//	//	//	error: function () {
		//	//	//		//error loading data
		//	//	//		alert('failure');
		//	//	//	}
		//	//	//});
		//	//});

		//	//$('#btnGetData').click(function () {
		//	//	var myUrl = 'http://lswebservices.byu.edu/holidays/HolidayService.svc/rest/GetHolidays/start/1-1-2013/end/1-1-2014';
		//	//	//var myUrl = 'http://localhost/HolidayService/HolidayService.svc/rest/GetHolidays/start/1-1-2013/end/1-1-2014';
		//	//	$.ajax({
		//	//		url: myUrl,
		//	//		dataType: 'jsonp',
		//	//		jsonp: 'callback',
		//	//		timeout: 5000,
		//	//		success: function (data, status) {
		//	//			//data loaded
		//	//			alert('success');
		//	//			displayHolidays(data);
		//	//		},
		//	//		error: function () {
		//	//			//error loading data
		//	//			alert('failure');
		//	//		}
		//	//	});
		//	//});
		//}
		//catch (err) {
		//	alert(err.message);
		//}

		

		$.mobile.changePage("#HomeScreen", { transition: "fade" });
	},
};




