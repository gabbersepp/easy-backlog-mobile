describe("Common content Tests", function() {
	var content;
	beforeEach(function(){
		var Map = {};
		Map['msg_key1'] = "blub";
		Map['msg_key2'] = "blub2";
		var mockL18n = new jQueryL18nMock(Map);
		this.content = new Content(mockL18n);
	});
	
	it("loadMessages() should load all messages within the specified div", function() {
		setFixtures('<div id="no_msg"><div id="msg_c_key1"></div></div><div id="msg"><div id="msg_c_key1"></div></div>');
		this.content.loadMessages("#msg");
		expect($("#msg")).toHaveText("blub");
	});
	
	it("loadMessages() should not load all messages outside the specified div", function() {
		setFixtures('<div id="no_msg"><div id="msg_c_key1"></div></div><div id="msg"><div id="msg_c_key1"></div></div>');
		this.content.loadMessages("#msg");
		expect($("#no_msg")).not.toHaveText("blub");
	});
});