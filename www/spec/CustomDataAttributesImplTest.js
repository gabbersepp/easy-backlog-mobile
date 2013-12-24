describe("CustomDataAttributesImpl:", function() {
	describe("setOnClick", function() {
		it("should set onClick to all html elements that have specified the necessary data attributes", function() {
			var str = '<div id="withinDiv"><div data-cda-loadOnClick="yes" data-cda-location="test.html" data-cda-location-section="#test" id="testdiv"></div>'+
					  '<a data-cda-loadOnClick="yes" data-cda-location="test2.html" data-cda-location-section="#test2" id="testa"></a>'+
					  '<button data-cda-loadOnClick="yes" data-cda-location="test3.html" data-cda-location-section="#test3" id="testbutton"></button></div>';
					  
			setFixtures(str);
			content = jasmine.createSpyObj('Content', ['loadIntoSection']);
			cda = new CustomDataAttributesImpl(content);
			cda.setOnClickEvent("#withinDiv");
			
			$("#testdiv").click();
			expect(content.loadIntoSection).toHaveBeenCalledWith("test.html", "#test");
			$("#testa").click();
			expect(content.loadIntoSection).toHaveBeenCalledWith("test2.html", "#test2");
			$("#testbutton").click();
			expect(content.loadIntoSection).toHaveBeenCalledWith("test3.html", "#test3");
		});
	});
});