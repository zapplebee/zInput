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
	$radios.wrap(function(){ return '<div class="zRadio"><span style="display:table;width: 100%;height: 100%;"><span style="display: table-cell;vertical-align:middle;">' + $(this).attr("title") + '</span></span></div>'});
	});


var $zRadio = $(".zRadio");
	
$zRadio.click(function(){
	$theClickedButton = $(this);
	$theClickedButton.find(":radio").prop("checked", true);
	//move up the DOM to the .zRadioWrapper and then select children. Remove .zSelected from all .zRadio
	$theClickedButton.parent().children().removeClass("zSelected");
	$theClickedButton.addClass("zSelected");	
	});
}