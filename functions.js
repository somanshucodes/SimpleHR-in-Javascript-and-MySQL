function addEmp(){
		$.ajax({                    
  url: 'database.php',     
  type: 'post', // performing a POST request
  data : {
    name : document.getElementById('name').value,
    designation: document.getElementById('desig').value,
    salary: document.getElementById('basic').value	// will be accessible in $_POST['data1']
  },
  dataType: 'json',                   
  success: function(data)         
  {
    // etc...
  } 
});
        //document.getElementById("myAlerts").innerHTML="<div class=\"alert alert-success alert-dismissable\"><a href=\"#\" class\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a><strong>Employee has been added</strong></div>";
		console.log('This was logged in the callback: ' + result+document.getElementById('name').value);
 }

function changeImage(x){
	
	if(x==1){
		
		document.getElementById('image1').src="user-hover.png";
	}
	
}

function showAll(){
	
	 $.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "display.php",             
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            bootbox.alert({
				title: 'Your Employee Details',
				message: response
			});
            //alert(response);
        }

    });
}

function holidayManager(){
	var txt = "Name of the holiday:</br><input type=\"text\" class=\"search\" id=\"name\"></br>Day (valid integer b/w 1-31)</br><input type=\"number\" class=\"search\" id=\"day\"></br>Enter month (valid number between 1-12</br><input type=\"number\" class=\"search\" id=\"month\"></br>Enter month</br><input type=\"number\" class=\"search\" id=\"year\">";
	bootbox.confirm({
	title: "Add Holiday",
    message: txt,
    buttons: {
        confirm: {
            label: 'Add',
            className: 'btn-success'
        },
        cancel: {
            label: 'Cancel',
            className: 'btn-danger'
        }
    },
    callback: function (result) {
		$.ajax({                    
  url: 'holiday_db.php',     
  type: 'post', // performing a POST request
  data : {
    name : document.getElementById('name').value,
    day: document.getElementById('day').value,
    month: document.getElementById('month').value,
    year: document.getElementById('year').value	// will be accessible in $_POST['data1']
  },
  dataType: 'json',                   
  success: function(data)         
  {
    // etc...
  } 
});
		
		
        
		console.log('This was logged in the callback: ' + result);
    }
});
}

function live_search(str){
	console.log(str);
	$.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "live_feed.php?name="+str,             
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            document.getElementById('result').innerHTML=response;
            //alert(response);
        }

    });
	
}