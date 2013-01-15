## Backbone Inspector

Forked [Ember Inspector](https://github.com/juggy/ember_inspector), for Backbone Views instead. 

Backbone Inspector is a Google Chrome Inspector extension for Backbone developers. It displays a sidebar panel in the Inspector
which provides information about the Backbone view backing the currently selected element in the DOM.
It also assigns the view object to a global variable _V which can then be used within the console for further inspecting.

![](http://i.imgur.com/SLixP.png)

### Backbone Notes
* Backbone doesn't keep track of views the same way Ember does, so for now I've just hacked something on top of Backbone just as a proof on concept.
* Inside `Backbone.View`, add the line: `window.BackboneViews[this.cid] = this;`
* Inside `_ensureElement`, add the line: `attrs['data-bb-view'] = this.cid;`
* This gives each view element a `data-bb-view` attribute matching its internal `cid`, and keeps track of them `window.BackboneViews`.
* __There's probably a better way to do this, just hacking about to get something awesome.__

### How to use it
* In Google Chrome, go to chrome://flags/ and enable Experimental Extension APIs. Relaunch your browser.
* Open Tools-->Extensions (ensure Development mode is checked) and click on "Load unpacked extension..." to install the extension. You will need to reload Chrome once the extension is installed.

### Wish list
* Customizable property watchlist
* Configurable global variable (change default _V to something else)
* Display clickable parentView and childViews

### Release Notes
#### v1.1
* Display the first ancestor backed by an Ember view if the selected element does not have one.
* When displaying an ancestor, the attribute "distance" shows the number of DOM levels it is away from the selected element.
