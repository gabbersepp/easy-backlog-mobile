var jQueryL18nMock = function(map) {
	this.map = map;
};

jQueryL18nMock.prototype = Object.create(IjQueryL18n);

jQueryL18nMock.prototype.getMsg = function(key) {
	if(key in this.map) {
		return this.map[key];
	}
};

jQueryL18nMock.prototype.properties = function(lang) {
	jQuery.i18n.properties({
		name:'Messages', 
		path:'res/lang/', 
		mode:'both',
		language:lang
	});
};