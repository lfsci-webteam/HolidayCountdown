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


		$('#btnGetData').click(function () {
			var myUrl = 'http://lswebservices.byu.edu/holidays/HolidayService.svc/rest/GetHolidays/start/1-1-2013/end/1-1-2014';
			$.ajax({
				url: myUrl,
				dataType: 'jsonp',
				jsonp: 'callback',
				timeout: 5000,
				success: function (data, status) {
					//data loaded
					alert('success');
					alert(data);
				},
				error: function () {
					//error loading data
					alert('failure');
				}
			});
		});



		$.mobile.changePage("#HomeScreen", { transition: "fade" });
	},
};




