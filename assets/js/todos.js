//Check off Specific To Do's by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
//Deleting To Do's
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Entering new To Do's
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
})



