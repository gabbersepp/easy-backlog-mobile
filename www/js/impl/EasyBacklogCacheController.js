/**
 * Controller that loads entities from cache if available
 * @param easyBacklogImpl
 * @param config
 * @constructor
 */
var EasyBacklogCacheController = function(ebImpl, configImpl, cacheImpl) {
    this.easyBacklogImpl = new EasyBacklogControllerImpl(ebImpl, configImpl);
    this.config = configImpl;
    this.cache = cacheImpl;
};

EasyBacklogCacheController.prototype = Object.create(IEasyBacklogController);

EasyBacklogCacheController.prototype.loginCheck = function(callBackFail, callBackSuccess) {
    this.easyBacklogImpl.loginCheck(callBackFail, callBackSuccess);
};

EasyBacklogCacheController.prototype.getBacklogs = function(callBackFail, callBackSuccess) {
    if (typeof this.cache.get("easybacklog", "backlogs") === "undefined") {
        var c = this.cache;
        callBackSuccessSave = function(data) {
            c.set("easybacklog", "backlogs", data);
            callBackSuccess(data);
        }
        this.easyBacklogImpl.getBacklogs(callBackFail, callBackSuccessSave);
    }else {
        callBackSuccess(this.cache.get("easybacklog", "backlogs"));
    }
};

EasyBacklogCacheController.prototype.setApiKey = function(apiKey) {
    this.easyBacklogImpl.setApiKey(apiKey);
};

EasyBacklogCacheController.prototype.setAccountId = function(accountId) {
    this.easyBacklogImpl.setAccountId(accountId);
};

EasyBacklogCacheController.prototype.getThemes = function(backlogId, callBackFail, callBackSuccess) {
    if (typeof this.cache.get("easybacklog-"+backlogId, "themes") === "undefined") {
        var c = this.cache;
        var bId = backlogId;
        callBackSuccessSave = function(data) {
            c.set("easybacklog-"+bId, "themes", data);
            callBackSuccess(data);
        }
        this.easyBacklogImpl.getThemes(backlogId, callBackFail, callBackSuccessSave);
    }else {
        callBackSuccess(this.cache.get("easybacklog-"+backlogId, "themes"));
    }
};

EasyBacklogCacheController.prototype.getStories = function(themeId, callBackFail, callBackSuccess) {
    if (typeof this.cache.get("easybacklog-"+themeId, "stories") === "undefined") {
        var c = this.cache;
        var bId = themeId;
        callBackSuccessSave = function(data) {
            c.set("easybacklog-"+bId, "stories", data);
            callBackSuccess(data);
        }
        this.easyBacklogImpl.getStories(themeId, callBackFail, callBackSuccessSave);
    }else {
        callBackSuccess(this.cache.get("easybacklog-"+themeId, "stories"));
    }
};

EasyBacklogCacheController.prototype.getStory = function(storyId, callBackFail, callBackSuccess) {
    if (typeof this.cache.get("easybacklog-"+storyId, "story") === "undefined") {
        var c = this.cache;
        var bId = storyId;
        callBackSuccessSave = function(data) {
            c.set("easybacklog-"+bId, "story", data);
            callBackSuccess(data);
        }
        this.easyBacklogImpl.getStory(storyId, callBackFail, callBackSuccessSave);
    }else {
        callBackSuccess(this.cache.get("easybacklog-"+storyId, "story"));
    }
};

EasyBacklogCacheController.prototype.getSprints = function(backlogId, callBackFail, callBackSuccess) {
    if (typeof this.cache.get("easybacklog-"+backlogId, "sprints") === "undefined") {
        var c = this.cache;
        var bId = backlogId;
        callBackSuccessSave = function(data) {
            c.set("easybacklog-"+bId, "sprints", data);
            callBackSuccess(data);
        }
        this.easyBacklogImpl.getSprints(backlogId, callBackFail, callBackSuccessSave);
    }else {
        callBackSuccess(this.cache.get("easybacklog-"+backlogId, "sprints"));
    }
};