var Test = function(){
	var rects = document.getElementsByTagName("rect");
	for(var rect in rects) el = rects[rect], addEventHandler(el, 'click', rectClick);
};

function rectClick() alert(1);

var test = new Test();


// Utilities
function addEventHandler(elem,eventType,handler) {
 if (elem.addEventListener) elem.addEventListener (eventType,handler,false);
 else if (elem.attachEvent) elem.attachEvent ('on'+eventType,handler); 
}