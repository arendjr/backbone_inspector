(function(){
	var getSelectedBackboneView = function() {
		// _V is a global of the selected view for experimentation in the console
		_V = undefined;

		var level;
		function findView(elm, n) {
			if (elm == null) { return undefined; }
			level = n || 0;
			var found = BackboneViews[elm.getAttribute('data-bb-view')];
			if (found == null) {
				level++;
				found = findView(elm.parentElement, level);
			}
			return found;
		}

		var view = findView($0),
			data = { __proto__: null };
		if (view) {
			_V = view;
			if (level > 0) { data.distance = level; }
			data.id = view.cid;
			data.view = view;
			data.options = view.options;
			data.collection = view.collection;
			data.model = view.model;
		}
		return data;
	};

	chrome.devtools.panels.elements.createSidebarPane("Backbone View", function(sidebar) {
		function updatePanel() {
			sidebar.setExpression("(" + getSelectedBackboneView.toString() + ")()");
		}

		updatePanel();
		chrome.devtools.panels.elements.onSelectionChanged.addListener(updatePanel);
	});
})();