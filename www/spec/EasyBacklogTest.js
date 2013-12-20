describe("Test Easybacklog API", function() {
	var easyBacklog;
	
	beforeEach(function() {
		this.easyBacklog = new EasyBacklogImpl("https://easybacklog.com/api", conf_apiKey);
	});
	
	it("login with api key should success", function() {
		var ready = false, success = false, cSuccess = function(data) {success = true; ready = true;}, cFail = function(data) {success = false; ready = true;};
		runs(function() {
			this.easyBacklog.loginCheck("/accounts.json", cSuccess, cFail);
		});
		waitsFor(function() {
			return ready;
		}, "authenticate", 5000);
		
		runs(function() {
			expect(success).toBeTruthy();
		});
	});
});