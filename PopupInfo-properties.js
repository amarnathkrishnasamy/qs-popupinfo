define( [], function ( ) {
  'use strict';
  
	var dimensions = {
        uses: "dimensions",
        min: 0,
		max: 0
    };
	
	var measures = {
        uses: "measures",
        min: 0,
		max: 1
    };

    var settings = {
        uses: "settings"
/* 		items: {
			PopupInfo_popupText: {
				type: "string",
			//	component: "textarea",
				label: "Text to Display",
				ref: "PopupInfo_popupText",
				expression: "optional",
				defaultValue: "Popup Text to be added"
			}
		} */
    };

    // Return values
    return {
        type: "items",
        component: "accordion",
        items: {
			dimensions: dimensions,
			measures: measures,
            settings: settings
        }
    };
});
