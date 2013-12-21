var EasyBacklogControllerImpl = function(easyBacklogImpl, config) {
	this.easyBacklogImpl = easyBacklogImpl;
	this.config = config;
};

EasyBacklogControllerImpl.prototype = Object.create(IEasyBacklogController);

EasyBacklogControllerImpl.prototype.loginCheck = function(callBackFail, callBackSuccess) {
	this.easyBacklogImpl.call("/accounts.json", callBackSuccess, callBackFail);
};

EasyBacklogControllerImpl.prototype.getBacklogs = function(callBackFail, callBackSuccess) {
	this.easyBacklogImpl.call("/accounts/"+this.config.get("easybacklog", "accountId")+"/backlogs.json", callBackSuccess, callBackFail);
};

EasyBacklogControllerImpl.prototype.setApiKey = function(apiKey) {
	this.easyBacklogImpl.setApiKey(apiKey);
};

EasyBacklogControllerImpl.prototype.setAccountId = function(accountId) {
	this.easyBacklogImpl.setAccountId(accountId);
};