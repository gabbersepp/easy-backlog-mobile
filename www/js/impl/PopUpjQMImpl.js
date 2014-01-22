PopUpjQMImpl = function() {
	this.html = '<div data-role="header" data-theme="a">';
	this.close = '';
	this.actionText = [];
    this.action = [];
    this.msg = '';
}
PopUpjQMImpl.prototype = Object.create(IPopUp);

PopUpjQMImpl.prototype.addCloseButton = function(msg) {
	this.close = '<a href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b" data-rel="back">'+msg+'</a>';
};

PopUpjQMImpl.prototype.addActionButton = function(msg, action) {
	this.actionText[this.actionText.length] = '<a href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b" data-rel="back" data-transition="flow" id="popup_action_'+this.actionText.length+'">'+msg+'</a>';
    this.action[this.action.length] = action;
}

PopUpjQMImpl.prototype.addMessage = function(msg) {
    this.msg = msg;
}

PopUpjQMImpl.prototype.showPopUp = function() {
    $popup = $("#popup");
    text = this.html+this.msg;
    for(i in this.actionText) {
        text = text + this.actionText[i];
    }
    text = text + this.close;
    $popup.html(text);
    i = 0;

    action = this.action;

    $("#popup a[id^='popup_action_']").each(function() {
        $this = $(this).off('click').on('click', function() {
            var id = this.id.match(/^popup_action_([0-9]*)/).slice(1)[0];
            action[id]();
        });
    });
    $popup.popup('open');
}