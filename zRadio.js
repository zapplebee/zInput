$.fn.zRadio = function(){


var $radios = this.find(":radio");
$radios.hide();
var inputNames = [];
$radios.map(function(){
  inputNames.push($(this).attr('name'));
});

inputNames = $.unique(inputNames);


$.each(inputNames, function(index,value){

	var $radios = $("input[name='" + value + "']");
	$radios.wrapAll('<div class="zRadioWrapper" />');
	$radios.wrap(function(){ return '<div class="zRadio"><span class="zRadioInner"><span class="zRadioInnermost">' + $(this).attr("title") + '</span></span></div>'});



	});


var $zRadio = $(".zRadio");
	
$zRadio.click(function(){
	$theClickedButton = $(this);
	$theClickedButton.find(":radio").prop("checked", true);
	$theClickedButton.parent(".zRadioWrapper").children().removeClass("zSelected");
	$theClickedButton.addClass("zSelected");
	
	
	});

}