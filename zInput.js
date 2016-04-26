$.fn.zInput = function(){

var $inputs = this.find(":radio,:checkbox");
$inputs.hide();
var inputNames = [];
$inputs.map(function(){
  inputNames.push($(this).attr('name'));
});

inputNames = $.unique(inputNames);

$.each(inputNames, function(index,value){

	var $element = $("input[name='" + value + "']");
	var elementType = $element.attr("type");
	$element.wrapAll('<div class="zInputWrapper" />');
	if (elementType == "radio"){
		$element.wrap(function(){ return '<div class="zInput"><span style="display:table;width: 100%;height: 100%;"><span style="display: table-cell;vertical-align:middle;">' + $(this).attr("title") + '</span></span></div>'});
	}
	if (elementType == "checkbox")
	{
		$element.wrap(function(){ return '<div class="zInput zCheckbox"><span style="display:table;width: 100%;height: 100%;"><span style="display: table-cell;vertical-align:middle;">' + $(this).attr("title") + '</span></span></div>'});	
	}
	
	});


var $zRadio = $(".zInput").not(".zCheckbox");
var $zCheckbox	= $(".zCheckbox");

$zRadio.click(function(){
	$theClickedButton = $(this);

	//move up the DOM to the .zRadioWrapper and then select children. Remove .zSelected from all .zRadio
	$theClickedButton.parent().children().removeClass("zSelected");
	$theClickedButton.addClass("zSelected");
	$theClickedButton.find(":radio").prop("checked", true).change();	
	});

$zCheckbox.click(function(){
	$theClickedButton = $(this);

	//move up the DOM to the .zRadioWrapper and then select children. Remove .zSelected from all .zRadio
	$theClickedButton.toggleClass("zSelected");
	$theClickedButton.find(':checkbox').each(function () { this.checked = !this.checked; $(this).change()});
	});	
	
  
  $.each($inputs,function(k,v){
    if($(v).attr('checked')){
      
      $(v).parent().click();
      
    }
    
  });
  
}

