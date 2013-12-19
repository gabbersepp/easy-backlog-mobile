var EasyBacklogImpl = function(url) {
	this.url = url;
};
EasyBacklogImpl.prototype = Object.create(IEasyBacklog);
EasyBacklogImpl.prototype.loginCheck = function(userId, apiKey, destination) {
	$.ajax({
		url: this.url+destination,
		cache: false,
		async: true,
		type: 'GET',
		dataType:"jsonp"
	}).done(function(data) {
		alert(data);
		return true;
	});
};