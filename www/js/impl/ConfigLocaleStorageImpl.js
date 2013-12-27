var ConfigLocaleStorageImpl = function() {
}
ConfigLocaleStorageImpl.prototype = Object.create(IConfig);
ConfigLocaleStorageImpl.prototype.get = function(key, attr) {
	return window.localStorage.getItem(key+attr);
};
ConfigLocaleStorageImpl.prototype.set = function(key, attr, value) {
	window.localStorage.setItem(key+attr, value);
};