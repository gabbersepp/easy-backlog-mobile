describe("Test implementations of IConfig", function() {
	describe("Test XML Implementation", function() {
		it("get() should return correct value of an further set value", function() {
			config = new ConfigXmlImpl();
			runs(function() {
				config.setPath("spec/testData/ConfigTest/config.xml");
			});
			waits(200);
			runs(function() {
				expect(config.get("outer", "key")).toEqual("inner_key");
			});
		});
		it("set() should set value properly", function() {
			config = new ConfigXmlImpl();
			runs(function() {
				config.setPath("spec/testData/ConfigTest/config.xml");
			});
			waits(200);
			runs(function() {
				config.set("outer", "key", 234);
				expect(config.get("outer", "key")).toEqual("234");
			});
		});
	});
	
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