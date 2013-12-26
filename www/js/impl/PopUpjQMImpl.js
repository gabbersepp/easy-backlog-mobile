PopUpjQMImpl = function() {
	this.html = '<div data-role="header" data-theme="a">';
	this.close = '';
	this.ok = '';
}
PopUpjQMImpl.prototype = Object.create(IPopUp);

PopUpjQMImpl.prototype.addCloseButton: function(msg) {
	this.close = '<a href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b" data-rel="back">'+msg+'</a>';
};

PopUpjQMImpl.prototype.addActionButton: function(msg, action) {
	this.ok = '<a href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b" data-rel="back" data-transition="flow" onClick="'+action+'">Delete</a>';
}