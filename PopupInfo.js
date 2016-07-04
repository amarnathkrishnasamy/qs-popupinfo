define( ['jquery', 'underscore', 'text!./PopupInfo.css', './extensionUtils', './PopupInfo-properties', './PopupInfo-initialproperties'],
	
	function ( $, _, cssContent, extensionUtils, props, initProps ) {
		'use strict';
		
		extensionUtils.addStyleToHeader(cssContent);
		
		return {
			definition: props,
			initialProperties: initProps,
			snapshot: {
				canTakeSnapshot: false
			},

			paint: function ($element, layout) {
				
				$element.empty();
				
				var id  = layout.qInfo.qId + "_popup";
				var qMatrix = layout.qHyperCube.qDataPages[0].qMatrix;

				var popup = '<button id="qv-object-PopupInfo_holder_' + id + '" class="qv-object-PopupInfo_holder"><font style="Helvetica Neue, Helvetica, Arial, sans-serif;"><b><i>i</i></b></font></button>'; 
        
				$element.append(popup);
				
				popup = '<div id="qv-object-PopupInfo_modal_' + id + '" class="qv-object-PopupInfo_modal">';
				popup += '<div id="qv-object-PopupInfo_modal_content_' + id + '" class="qv-object-PopupInfo_modal-content">';
				$('body').append(popup);
				
				var targetdiv = document.getElementById('qv-object-PopupInfo_modal_content_'+id);
				
				targetdiv.innerHTML='<span id="qv-object-PopupInfo_close_' + id + '" class="qv-object-PopupInfo_close">X</span></div></div>' + qMatrix[0][0].qText;
				
				var modalwindow = document.getElementById('qv-object-PopupInfo_modal_'+id);
				var modalholder = document.getElementById('qv-object-PopupInfo_holder_'+id);
				var spanclose = document.getElementById('qv-object-PopupInfo_close_'+id);
				
				
				modalholder.onclick = function() {
					modalwindow.style.display = "block";
				}

				spanclose.onclick = function() {
					modalwindow.style.display = "none";
				}

				window.onclick = function(event) {
					if (event.target == modalwindow) {
						modalwindow.style.display = "none";
					}
				}
			}
		};
	} 
);
