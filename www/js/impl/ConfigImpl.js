var ConfigImpl = function() {}
ConfigImpl.prototype = Object.create(IConfig);
ConfigImpl.prototype.get = function(key, attr) {
	$.get("config.xml", function(data){
		alert($(data).find(key).attr(attr));
	});
};