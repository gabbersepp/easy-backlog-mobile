describe("Easybacklog", function() {
	if(typeof conf_apiKey !== "undefined") {
		describe("Test real Easybacklog API", function() {
			var easyBacklog;
			
			beforeEach(function() {
				this.easyBacklog = new EasyBacklogControllerImpl(new EasyBacklogImpl("https://easybacklog.com/api", conf_apiKey));
			});
			
			it("login with api key should success", function() {
				var ready = false, success = false, cSuccess = function(data) {success = true; ready = true;}, cFail = function(data) {success = false; ready = true;};
				runs(function() {
					this.easyBacklog.loginCheck(cFail, cSuccess);
				});
				waitsFor(function() {
					return ready;
				}, "authenticate", 5000);
				
				runs(function() {
					expect(success).toBeTruthy();
				});
			});
			
			it("login with wrong api key should fail", function() {
				this.easyBacklog = new EasyBacklogControllerImpl(new EasyBacklogImpl("https://easybacklog.com/api", conf_apiKey+"m"));
				var ready = false, success = false, cSuccess = function(data) {success = true; ready = true;}, cFail = function(data) {success = false; ready = true;};
				runs(function() {
					this.easyBacklog.loginCheck(cFail, cSuccess);
				});
				waitsFor(function() {
					return ready;
				}, "authenticate", 5000);
				
				runs(function() {
					expect(success).not.toBeTruthy();
				});
			});
		});
	}
	
	describe("Test fake Easybacklog API", function() {
		var eb, e;
		beforeEach(function() {
			this.eb = {
				call: function(destination, success, fail) {
					if(destination.match("accounts/[0-9]*/backlogs")) {
						success();
					}else if(destination.match("backlogs/[0-9]*/themes")) {
						success();
					}
				}
			};
		});
		
		it("Backlogs should be loaded", function() {
			map = {};
			map["easybacklogaccountId"] = 123;
			this.e = new EasyBacklogControllerImpl(this.eb, new ConfigMock(map));
			var ready = false, success = false, cSuccess = function(data) {success = true; ready = true;}, cFail = function(data) {success = false; ready = true;};
			runs(function() {
				this.e.getBacklogs(cFail, cSuccess);
			});
			waitsFor(function() {
				return ready;
			}, "authenticate", 5000);
			
			runs(function() {
				expect(success).toBeTruthy();
			});
		});
		
		it("Themes should be loaded", function() {
			map = {};
			map["easybacklogaccountId"] = 123;
			this.e = new EasyBacklogControllerImpl(this.eb, new ConfigMock(map));
			var ready = false, success = false, cSuccess = function(data) {success = true; ready = true;}, cFail = function(data) {success = false; ready = true;};
			runs(function() {
				this.e.getThemes(1, cFail, cSuccess);
			});
			waitsFor(function() {
				return ready;
			}, "authenticate", 5000);
			
			runs(function() {
				expect(success).toBeTruthy();
			});
		});
	});
});