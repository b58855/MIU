$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addItem').on('pageinit', function(){
	var aiform = $('#addItemForm');
	var aierrorlink = $('#errorslink');
	aiform.validate(
	{
		invalidHandler: function(form, validator)
		{
			aierrorlink.click();
			var text = '';
			for(var key in validator.submitted)
			{
				text += '<li>'+ key +'</li>';
			};
			$('#errorPage ul').html(text);
		},
		submitHandler: function()
		{
			var data = aiform.serializeArray();
			storeData(data, this.key);
		}
	});	
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
 
};

var getData = function(){

};

var storeData = function(data, oldKey)
{
	if(!oldKey)
	{
		//creates key value for local storage
		var key = Math.floor(Math.random() * 10000000000);
		console.log(key);
	}
	else
	{
		key = oldKey;
	}
	//gets form values, stores them in an object
	var category = document.getElementById('categories');
	var task = document.getElementById('task');
	var assigned = document.getElementById('assigned');
	var startDate = document.getElementById('startDate');
	var endDate = document.getElementById('endDate');
	var hours = document.getElementById('hours');
	var description = document.getElementById('description');
	var importance = getImportanceRadio();
	var data = {};
	data.category = ['Category', category.value];
	data.task = ['Task', task.value];
	data.member = ['Assigned', assigned.value];
	data.importance = ['Importance', importance];
	data.startDate = ['Start Date', startDate.value];
	data.endDate = ['End Date', endDate.value];
	data.hours = ['Hours', hours.value];
	data.description = ['Description', description.value];
	console.log(data);
	
	//saves to local storage, converts object to string
	localStorage.setItem(key, JSON.stringify(data));
	alert('Saved');
	//window.location.reload();
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};

var getImportanceRadio = function()
{
	//creates array of radios
	var radios = new Array();
	radios[0] = document.getElementById('mostImportant');
	radios[1] = document.getElementById('important');
	radios[2] = document.getElementById('leastImportant');
	for(var i = 0; i < radios.length; i++)
	{
		//if radio button is checked assign its value
		if (radios[i].checked)
		{
			return radios[i].value;
		}
	}
};


