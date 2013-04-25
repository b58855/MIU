$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addItem').on('pageinit', function(){
	$('#startDate').datepicker("option", "defaultDate", +0 );

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
			parseForm(data);
		}
	});	
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


