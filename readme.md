## Backbone Inspector

A Chrome Developer Tools extension for Backbone developers. It creates a new sidebar panel in the Elements tab to provides information on the Backbone view backing the currently selected DOM element.

It also assigns the view object to a global variable `_V` which can then be used within the console for further inspecting.

![](http://i.imgur.com/SLixP.png)

### Usage Notes
Backbone doesn't keep track of views the same way Ember does, so for now I've just hacked something on top of Backbone just as a proof of concept.

* Put somewhere: `window.BackboneViews = {};`
* Inside `Backbone.View`, add the line: `window.BackboneViews[this.cid] = this;`
* Inside `_ensureElement`, add the line: `attrs['data-bb-view'] = this.cid;`
* This gives each view element a `data-bb-view` attribute matching its internal `cid`, and keeps track of them `window.BackboneViews`.
* __For now, this is just a proof of concept to get something awesome out. See the "Future" section for how I plan to make this better.__

### How to use it
* In Google Chrome, go to chrome://flags/ and enable Experimental Extension APIs. Relaunch your browser.
* Open Tools-->Extensions (ensure Development mode is checked) and click on "Load unpacked extension..." to install the extension. You will need to reload Chrome once the extension is installed.

### Future
* Remove requirement of editing the core Backbone library - most likely by including a new core View class to extend from
* Collection/Model explorers, likely in a new Dev Tools tab
* Look more into what Yehuda's doing with his [Ember Inspector](https://www.youtube.com/watch?feature=player_embedded&v=0B9leRf5kuo), see what we can acomplish with Backbone
* View parent/child views - again, not sure as Backbone doesn't provide this functionality. Could become a new extension for one of the popular Backbone frameworks - BBB/LayoutManager or Marionette, for example.

Forked [Ember Inspector](https://github.com/juggy/ember_inspector), for Backbone Views instead. 
