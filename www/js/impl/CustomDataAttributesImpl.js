var CustomDataAttributesImpl = function(content) {
	this.content = content;
};
CustomDataAttributesImpl.prototype = Object.create(ICustomDataAttributes);

/*
Search for elements within wihtinDivId that have data-loadOnClik set to "yes" and install onClick Handler that will load the location specified in the data-location attribute into the specified data-location-section
this.content could be null because both Content and This must be instanciated with the instance of each other. So pass contentInstance until we know how to solve this cycle reference
*/
CustomDataAttributesImpl.prototype.setOnClickEvent = function(withinDivId, contentInstance) {
	$dataElements = $(withinDivId).find("[data-cda-loadOnClick='yes']");
	c = this.content;
	
	$dataElements.each(function() {
		$e = $(this);
		loc = $e.attr("data-cda-location");
		section = $e.attr("data-cda-location-section");
		content = c;
		
		if (typeof location !== "undefined" && typeof section !== "undefined") {
			$e.click(function() {
				$e = $(this);
				loc = $e.attr("data-cda-location");
				section = $e.attr("data-cda-location-section");
				paramName = $e.attr("data-cda-location-param-name");
				paramValue = $e.attr("data-cda-location-param-value");
				
				if (typeof paramName !== "undefined" && typeof paramValue !== "undefined") {
					alert("asd");
					window.Session.set("cda", paramName, paramValue);
				}
				
				if (typeof contentInstance !== "undefined") {
					contentInstance.loadIntoSection(loc, section);
				}else{
					content.loadIntoSection(loc, section);
				}
			});
		}
	});
};