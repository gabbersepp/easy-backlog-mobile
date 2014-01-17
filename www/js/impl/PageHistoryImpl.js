PageHistoryImpl = function() {
	this.html = {};
	this.index = 0;
};

PageHistoryImpl.prototype = Object.create(IPageHistory);

PageHistoryImpl.prototype.push = function(html) {
	this.html[this.index] = html;
	this.index++;
}

PageHistoryImpl.prototype.pop = function() {
	this.index--;
	return this.html[this.index];
}

PageHistoryImpl.prototype.load = function() {
	$("#content").html(PageHistory.pop());
	// after old html has been loaded, the page contentLoadReady event is installed
	// remove it because otherwise the event handler can be called falsely
	$(document).off("contentLoadReady");
	CustomDataAttributes.setOnClickEvent("#content", Content);
}