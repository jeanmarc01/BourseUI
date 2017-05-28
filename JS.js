/**
 * 
 */
 
 $(document).ready(function() {
			
            $("#driver").click(function(event){
				console.log("click");
				
				var URL ='http://localhost:3001/lerevenu/getdatedownload?callback=?'
	
				$.ajax({
					url: URL,
					dataType: 'jsonp',
					cache: false,

					beforeSend: function () {
						console.log("Loading");
					},

					error: function (jqXHR, textStatus, errorThrown) {
						console.log("jqXHR");
						console.log(jqXHR);
						console.log("textstatus");
						console.log(textStatus);
						console.log("errorThrown");
						console.log(errorThrown);
					},

					success: function (data) {
						console.log('Success');
						console.log(data[0].DATE_DOWNLOAD);
					},

					complete: function () {
						console.log('Finished all tasks');
					}
				});
				
				$.getJSON(URL, function(json) {
					console.log(json[1].DATE_DOWNLOAD);
					for (var iter = 0; iter < json.length; iter++) {
						$("#dropdownDate").append("<li><a href='#'>" + json[iter].DATE_DOWNLOAD + "</a></li>");
					}
				});
            });
				
         });