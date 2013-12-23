var ConfigXmlImpl = function() {
	this.content = {}
	this.path="config.xml";
	this.setPath(this.path);
}
ConfigXmlImpl.prototype = Object.create(IConfig);
ConfigXmlImpl.prototype.setPath = function(path) {
	this.path = path;
	content = this.content;
	if(typeof this.content[this.path] === 'undefined') {
		$.get(this.path, function(data){
			content[path] = data;
		});
	}
};
ConfigXmlImpl.prototype.get = function(key, attr) {
	return $(this.content[this.path]).find(key).attr(attr);
};
/**
 * this method only stores new data in memory
*/
ConfigXmlImpl.prototype.set = function(key, attr, value) {
	$(this.content[this.path]).find(key).attr(attr, value);
};