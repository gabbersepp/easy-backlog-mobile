var EasyBacklogImpl = function(url, apiKey) {
	this.url = url;
	this.apiKey = apiKey;
};
EasyBacklogImpl.prototype = Object.create(IEasyBacklog);
EasyBacklogImpl.prototype.loginCheck = function(destination, callBackSuccess, callBackFail) {
	var callSuccess = callBackSuccess;
	var callFail = callBackFail;
	$.ajax({
		url: this.buildUrl(destination),
		cache: false,
		async: true,
		type: 'GET',
		dataType:"json"
	}).done(function(data) {
		callSuccess(data);
	}).fail(function(data) {
		callFail(data);
	});
};

EasyBacklogImpl.prototype.buildUrl = function(destination) {
	return this.url+destination+"?api_key="+this.apiKey;
}