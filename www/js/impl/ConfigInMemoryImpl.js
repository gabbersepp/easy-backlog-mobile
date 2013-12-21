var ConfigInMemoryImpl = function() {
	this.map = {};
}
ConfigInMemoryImpl.prototype = Object.create(IConfig);
ConfigInMemoryImpl.prototype.get = function(key, attr) {
	return this.map[key+attr];
};
ConfigInMemoryImpl.prototype.set = function(key, attr, value) {
	return this.map[key+attr] = value;
};