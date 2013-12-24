describe("ContentTest.suite1", function() {
	describe("Common content Tests", function() {
		var content;
		beforeEach(function(){
			var Map = {};
			Map['msg_key1'] = "blub";
			Map['msg_key2'] = "blub2";
			var mockL18n = new jQueryL18nMock(Map);
			$.fn.foundation = function(){};
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
		
		it("content should be loaded into #header", function() {
			spyOn(this.content, "loadMessages").andReturn();
			this.content = new Content(new jQueryL18nImpl());
			setFixtures('<div id="header"></div><div id="header2"></div>');
			runs(function() {
				this.content.loadHeader("spec/testData/ContentTest/content.html");
			});
			waits(200);
			runs(function() {
				expect($("#header")).toContainText("success");
				expect($("#header2")).not.toContainText("success");
			});
		});
		
		it("content should be loaded into #footer", function() {
			spyOn(this.content, "loadMessages").andReturn();
			setFixtures('<div id="footer"></div><div id="footer2"></div>');
			runs(function() {
				this.content.loadFooter("spec/testData/ContentTest/content.html");
			});
			waits(200);
			runs(function() {
				expect($("#footer")).toContainText("success");
				expect($("#footer2")).not.toContainText("success");
			});
		});
		
		it("content should be loaded into #content", function() {
			spyOn(this.content, "loadMessages").andReturn();
			setFixtures('<div id="content"></div><div id="content2"></div>');
			runs(function() {
				this.content.loadContent("spec/testData/ContentTest/content.html");
			});
			waits(300);
			runs(function() {
				expect($("#content")).toContainText("success");
				expect($("#content2")).not.toContainText("success");
			});
		});
	});
});