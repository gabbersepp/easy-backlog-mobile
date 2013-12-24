describe("Test implementations of IConfig", function() {	
	describe("Test InMemory Implementation", function() {
		it("get() should return correct value of an further set value", function() {
			config = new ConfigInMemoryImpl();
			config.set("test", "test", 123);
			expect(config.get("test", "test")).toEqual(123);
		});
		it("set() should set value properly", function() {
			config = new ConfigInMemoryImpl();
			config.set("test1", "test2", 234);
			expect(config.get("test1", "test2")).toEqual(234);
		});
	});
});