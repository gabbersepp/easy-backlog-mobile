var ConfigXmlImpl = function() {}
ConfigXmlImpl.prototype = Object.create(IConfig);
ConfigXmlImpl.prototype.get = function(key, attr) {
	$.get("config.xml", function(data){
		return $(data).find(key).attr(attr);
	});
};