var button = document.getElementById("button");
var input = document.getElementById("val");
var ul = document.querySelector("ul");

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
}

button.addEventListener("click",function(){
	if(input.value.length > 0){
		createListElement();
		input.value="";
	}
})


input.addEventListener("keypress",function(event){
	if(input.value.length > 0 && event.keyCode === 13){
		createListElement();
		input.value="";
	}
})