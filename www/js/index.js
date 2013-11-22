/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function displayHolidays(data) {
	$('#content').text(JSON.stringify(data));
}
    			
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {

    	var parentElement = document.getElementById('deviceready');
    	var listeningElement = parentElement.querySelector('.listening');
    	var receivedElement = parentElement.querySelector('.received');

    	listeningElement.setAttribute('style', 'display:none;');
    	receivedElement.setAttribute('style', 'display:block;');

    	$('#HomeScreen').on('pagebeforeshow', function () {

			// query the holidays web service to get all the holidays
    		//var url = 'http://batman.byu.local/HolidayService/HolidayService.svc/rest/GetHolidays/start/1-1-2013/end/1-1-2014?callback=?';
    		var url = 'http://lswebservices.byu.edu/holidays/HolidayService.svc/rest/GetHolidays/start/1-1-2013/end/1-1-2014?callback=?';
    		$.getJSON(url, null, displayHolidays); // since the data is passed in the url we pass a null string as the url.

    	});

    	$.mobile.changePage("#HomeScreen", { transition: "fade" });
    },
};

