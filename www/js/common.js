CONTENT = {
	initializeL18n: function(lang) {
		jQuery.i18n.properties({
			name:'Messages', 
			path:'res/lang/', 
			mode:'both',
			language:lang
		});
	},
	
	loadMessages: function(withinDivId) {
		$(withinDivId + " div[id^='msg_']").each(function() {
			$div = $(this);
			// get pure id of message key, assuming that every key has a corresponding div 
			var id_string = "msg_"+this.id.match(/^msg_c_([a-zA-Z0-9_]*)/).slice(1)[0];
			$div.text(jQuery.i18n.prop(id_string));
		});
	},
	
	loadContent: function(path) {
		$('#content').load(path, '', function() {
			CONTENT.loadMessages('#content');
			$(document).foundation();
		});
	},
	
	loadHeader: function(path) {
		$('#header').load(path, '', function() {
			CONTENT.loadMessages('#header');
		});
	},
	
	loadFooter: function(path) {
		$('#footer').load(path, '', function() {
			CONTENT.loadMessages('#footer');
		});
	}
};
