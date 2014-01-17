PageHistoryImpl = function(cda) {
	this.html = {};
	this.index = -1;
    this.maxMemoryEntries = 20;
    this.cda = cda;
};

PageHistoryImpl.prototype = Object.create(IPageHistory);

PageHistoryImpl.prototype.push = function(html) {
	this.html[this.circlePushGetNextIndex()] = html;
}

PageHistoryImpl.prototype.pop = function() {
	return this.html[this.circlePushGetBeforeIndex()];
}

PageHistoryImpl.prototype.load = function() {
	$("#content").html(PageHistory.pop());
	// after old html has been loaded, the page contentLoadReady event is installed
	// remove it because otherwise the event handler can be called falsely
	$(document).off("contentLoadReady");
	this.cda.setOnClickEvent("#content", Content);
}

/**
 * implement a stack: push
 * @returns {*}
 */
PageHistoryImpl.prototype.circlePushGetNextIndex = function() {
    if(this.index < this.maxMemoryEntries) {
        this.index++;
        return this.index;
    } else if(this.index == this.maxMemoryEntries) {
        return 0;
    }
}

/**
 * implement stack: pop
 * @returns {*}
 */
PageHistoryImpl.prototype.circlePushGetBeforeIndex = function() {
    if(this.index == 0) {
        this.index = this.maxMemoryEntries;
        return 0;
    }
    var oldVal = this.index;
    this.index--;
    return oldVal;
}