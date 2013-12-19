describe("test", function() {
	it("asd", function() {
		var flag = false;
		runs(function() {
		var e = new EasyBacklogImpl("https://easybacklog.com/api");
		flag = e.loginCheck("5319", "8dq1ar396q56faoati7y", "/accounts.json?api_key=8dq1ar396q56faoati7y");
	});
	waitsFor(function() {
	return flag;
	}, "asd", 5000);
	});
});