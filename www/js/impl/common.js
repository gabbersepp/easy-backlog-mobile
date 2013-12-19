var Content = function(jQueryL18n){
	this.jQueryL18n = jQueryL18n;
};

Content.prototype = Object.create(IContent);

Content.prototype.initializeL18n = function(lang) {
	this.jQueryL18n.properties(lang);
};

Content.prototype.loadMessages = function(withinDivId) {
	var j = this.jQueryL18n;
	$(withinDivId + " div[id^='msg_']").each(function() {
		$div = $(this);
		// get pure id of message key, assuming that every key has a corresponding div 
		var id_string = "msg_"+this.id.match(/^msg_c_([a-zA-Z0-9_]*)/).slice(1)[0];
		$div.text(j.getMsg(id_string));
	});
};
	
Content.prototype.loadContent = function(path) {
	$('#content').load(path, '', function() {
		Content.loadMessages('#content');
		$(document).foundation();
	});
};
	
Content.prototype.loadHeader = function(path) {
	$('#header').load(path, '', function() {
		Content.loadMessages('#header');
	});
};
	
Content.prototype.loadFooter = function(path) {
	$('#footer').load(path, '', function() {
		Content.loadMessages('#footer');
	});
};
