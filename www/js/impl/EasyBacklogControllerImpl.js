var EasyBacklogControllerImpl = function(easyBacklogImpl) {
	this.easyBacklogImpl = easyBacklogImpl;
};

EasyBacklogControllerImpl.prototype = Object.create(IEasyBacklogController);

EasyBacklogControllerImpl.prototype.loginCheck = function(callBackFail, callBackSuccess) {
	this.easyBacklogImpl.call("/accounts.json", callBackSuccess, callBackFail);
};

EasyBacklogControllerImpl.prototype.getBacklogs = function(callBackFail, callBackSuccess) {
	this.easyBacklogImpl.call("/accounts/"+conf_account+"/backlogs.json", callBackSuccess, callBackFail);
};

EasyBacklogControllerImpl.prototype.setApiKey = function(apiKey) {
	this.easyBacklogImpl.setApiKey(apiKey);
};