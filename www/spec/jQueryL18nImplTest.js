describe("l18N.suite1", function() {
	describe("Test implementation of jQueryL18n Interface", function() {
		it("message should be loaded", function() {
			 var ok = "OK";
			 var jQueryL18n = new jQueryL18nImpl();
			 jQueryL18n.properties("de_DE");
			 var val = jQueryL18n.getMsg("msg_common_button_ok");
			 expect(val).toEqual(ok);
		});
	});
});