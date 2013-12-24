var CustomDataAttributesImpl = function(content) {
	this.content = content;
};
CustomDataAttributesImpl.prototype = Object.create(ICustomDataAttributes);

/*
Search for elements within wihtinDivId that have data-loadOnClik set to "yes" and install onClick Handler that will load the location specified in the data-location attribute into the specified data-location-section
*/
CustomDataAttributesImpl.prototype.setOnClickEvent = function(withinDivId) {
	$dataElements = $(withinDivId).find("[data-cda-loadOnClick='yes']");
	c = this.content;
	
	$dataElements.each(function() {
		$e = $(this);
		loc = $e.attr("data-cda-location");
		section = $e.attr("data-cda-location-section");
		content = c;
		
		if (typeof location !== "undefined" && typeof section !== "undefined") {
			$e.click(function() {
				content.loadIntoSection(loc, section);
			});
		}
	});
};