var ConfigMock = function(map) {
	this.map = map;
};

ConfigMock.prototype = Object.create(IConfig);

ConfigMock.prototype.get = function(key, attr) {
	if((key+attr) in this.map) {
		return this.map[(key+attr)];
	}
};