var jQueryL18nImpl = function() {
}

jQueryL18nImpl.prototype = Object.create(IjQueryL18n);

jQueryL18nImpl.prototype.getMsg = function(key) {
	return jQuery.i18n.prop(key);
};

jQueryL18nImpl.prototype.properties = function(lang) {
	jQuery.i18n.properties({
		name:'Messages', 
		path:'res/lang/', 
		mode:'both',
		language:lang
	});
};