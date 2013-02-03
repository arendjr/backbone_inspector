## Backbone Inspector

On this branch I'm attempting to automate usage of the plugin. The aim being that the extension will inject the relevant code into Backbone when it's loaded. For now, I'm struggling with accessing the global scope correctly in the extension, so I'll get back to it later once I've done some more reading on the Chrome Extensions API. But this is the code that needs to be run:

_This removes the requirement for the user to make manual changes to Backbone_:

```js
BackboneViews = {};
Backbone.View.prototype._oldConfigure = Backbone.View.prototype._configure;
Backbone.View.prototype._configure = function(options) {
	this.attributes = this.attributes || {};
	this.attributes['data-bb-view'] = this.cid;
	BackboneViews[this.cid] = this;
	Backbone.View.prototype._oldConfigure.call(this, options);
};
```

For now, just run that code in the console. New Backbone views are then set up correctly for the extension.

Also need to accurately detect Backbone. For now, I'm just assuming Backbone is on the global namespace, and not wrapped as an AMD module.

---

A Chrome Developer Tools extension for Backbone developers. It creates a new sidebar panel in the Elements tab to provides information on the Backbone view backing the currently selected DOM element.

It also assigns the view object to a global variable `_V` which can then be used within the console for further inspecting.

![](http://i.imgur.com/SLixP.png)

### How to use it
* In Google Chrome, go to chrome://flags/ and enable Experimental Extension APIs. Relaunch your browser.
* Open Tools-->Extensions (ensure Development mode is checked) and click on "Load unpacked extension..." to install the extension. You will need to reload Chrome once the extension is installed.

### Future
* Remove requirement of editing the core Backbone library - most likely by including a new core View class to extend from ([see Issue](https://github.com/danharper/backbone_inspector/issues/1))
* Collection/Model explorers, likely in a new Dev Tools tab
* Look more into what Yehuda's doing with his [Ember Inspector](https://www.youtube.com/watch?feature=player_embedded&v=0B9leRf5kuo), see what we can acomplish with Backbone
* View parent/child views - again, not sure as Backbone doesn't provide this functionality. Could become a new extension for one of the popular Backbone frameworks - BBB/LayoutManager or Marionette, for example.

Forked [Ember Inspector](https://github.com/juggy/ember_inspector), for Backbone Views instead. 
