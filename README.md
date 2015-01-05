Google Maps Icons
=================



# Map Icons

## Overview

Google Maps Icons is an attempt to provides an API for Google Maps icon URLs.
 
The static `MapIcons` class contains a nested structure of namespaced methods that return the Google Maps URL for each icon.

You can choose from a variety of icon types, including:

<table>
	<thead>
		<tr><th align="left">Method</th><th align="left">Image</th><th align="left">Description</th></tr>
	</thead>
	<tbody>
		<tr><td>MapIcons.cafe();</td><td align="middle"><img src='http://mt.google.com/vt/icon/name=icons/spotlight/cafe_L_8x.png' /></td><td>Places</td></tr>
		<tr><td>MapIcons.transit.bus()</td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/transit/bus_large.png' /></td><td>Transit</td></tr>
		<tr><td>MapIcons.misc.star()</td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/star_L_8x.png' /></td><td>Miscellaneous</td></tr>
		<tr><td>MapIcons.markers.text('A')</td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-b.png&text=A&psize=16&font=fonts/Roboto-Regular.ttf&color=FF000000&ax=44&ay=48' /></td><td>Marker</td></tr>
	</tbody>
</table>


There is also a variety of ways to style the icons:

<table>
	<thead>
		<tr><th align="left">Method</th><th>Image</th><th align="left">Description</th></tr>
	</thead>
	<tbody>
		<tr><td>MapIcons.post_office();</td><td align="middle"><img src='http://mt.google.com/vt/icon/name=icons/spotlight/post_office_L_8x.png' /></td><td>Basic icon</td></tr>
		<tr><td>MapIcons.local.jp.post_office();</td><td align="middle"><img src='http://mt.google.com/vt/icon/name=icons/spotlight/jp/post_office_japan_L_8x.png' /></td><td>Localized</td></tr>		<tr><td>MapIcons.post_office(3);</td><td align="middle"><img src='http://mt.google.com/vt/icon/name=icons/spotlight/post_office_search_L_8x.png' /></td><td>Alternative style</td></tr>
		<tr><td>MapIcons.post_office(3, {highlight:'00AA00'});</td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/post_office_search_L_8x.png&highlight=00AA00' /></td><td>Colored</td></tr>
		<tr><td>MapIcons.post_office(3, {alpha:0.5});</td><td align="middle"><img src='http://mt.google.com/vt/icon/name=icons/spotlight/post_office_search_L_8x.png?filter=80ffffff' /></td><td>Filtered</td></tr>
		<tr><td>MapIcons.post_office(3, {scale:2});</td><td align="middle"><img src='http://mt.google.com/vt/icon/name=icons/spotlight/post_office_search_L_8x.png?scale=2' /></td><td>Scaled</td></tr>
	</tbody>
</table>


If you use a decent IDE, autocomplete should show you what icons are available as you type.

Additionally, the following characteristics may be customised:

  - [Style](#style)
  - [Size](#size)
  - [Scale](#scale)
  - [Alpha](#alpha)
  - [Filter](#filter)
 
## Basic usage

### Getting started

To use the icon in Google Maps, use the methods in the MapIcons class to return the icon URL, then assign it as an `icon` parameter to your marker:  

	var map    = app.map; // or whatever your map reference is
	var center = map.getCenter();
	var icon   = MapIcons.airport();
	var marker = new google.maps.Marker({map:map, position:center, icon:icon});

### Localisation

Certain countries have their own localised icons. To access these, investigate the `.local` namespace for any icon groups:
 
	var en = MapIcons.bank();
	var jp = MapIcons.local.jp.bank();


## API

### Markers

<table>
	<thead>
		<tr><th align="left">Method</th><th>Image</th><th align="left">Description</th></tr>
	</thead>
	<tbody>
		<tr><td>MapIcons.markers.text('A');</td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-b.png&text=A&psize=16&font=fonts/Roboto-Regular.ttf&color=FF000000&ax=44&ay=48' /></td><td>Single letter, red</td></tr>		<tr><td>MapIcons.markers.text('A', 2);</td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-a.png&text=A&psize=16&font=fonts/Roboto-Regular.ttf&color=FF000000&ax=44&ay=48' /></td><td>Single letter, green</td></tr>
		<tr><td>MapIcons.markers.text('ABC');</td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-b.png&text=ABC&psize=9&font=fonts/Roboto-Regular.ttf&color=FF000000&ax=44&ay=48' /></td><td>Multiple letters</td></tr>
		<tr><td>MapIcons.markers.text('A', 1, {fontColor:'FFFFFF'});</td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-b.png&text=A&psize=16&font=fonts/Roboto-Regular.ttf&color=FFFFFFFF&ax=44&ay=48' /></td><td>Colored text</td></tr>
		<tr><td>MapIcons.markers.text('A', 1, {highlight:'00FF00'});</td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-b.png&text=A&psize=16&font=fonts/Roboto-Regular.ttf&color=FF000000&ax=44&ay=48&highlight=00FF00' /></td><td>Colored background</td></tr>
		<tr><td>MapIcons.markers.text('A', 1, {highlight:'00FF00', fontColor:'FFFFFF'});</td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-b.png&text=A&psize=16&font=fonts/Roboto-Regular.ttf&color=FFFFFFFF&ax=44&ay=48&highlight=00FF00&fontColor=FFFFFF' /></td><td>Colored text and background</td></tr>
		<tr><td>MapIcons.markers.dot();</td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-poi.png' /></td><td>Red dot</td></tr>
		<tr><td>MapIcons.markers.dot(2);</td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-blue.png' /></td><td>Blue dot</td></tr>
		<tr><td>MapIcons.markers.dot(3);</td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-ad.png' /></td><td>Purple dot</td></tr>
	</tbody>
</table>

### Styling

The top-level "spotlight" icons allow you to choose alertantive icons.

For these icons, specify an initial `style` index from 1 to 4, which changes the look of the icon:

<table>
	<thead>
		<tr>
			<th width="30">Style</th>
			<th width="30">Image</th>
			<th align="left">Query</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td align="middle">1</td>
			<td align="middle"><img src="http://mt.google.com/vt/icon/name=icons/spotlight/cafe_L_8x.png"/></td>
			<td>cafe_L_8x.png</td>
		</tr>
		<tr>
			<td align="middle">2</td>
			<td align="middle"><img src="http://mt.google.com/vt/icon/name=icons/spotlight/cafe_v_L_8x.png"/></td>
			<td>cafe_v_L_8x.png</td>
		</tr>
		<tr>
			<td align="middle">3</td>
			<td align="middle"><img src="http://mt.google.com/vt/icon/name=icons/spotlight/cafe_search_L_8x.png"/></td>
			<td>cafe_search_L_8x.png</td>
		</tr>
		<tr>
			<td align="middle">4</td>
			<td align="middle"><img src="http://mt.google.com/vt/icon/name=icons/spotlight/cafe_search_v_L_8x.png"/></td>
			<td>cafe_search_v_L_8x.png</td>
		</tr>
	</tbody>	
</table>

Here's how that looks in code:

	MapIcons.cafe(3);


### Sizing

The  majority of the `transit` icons allow you to specify a size index from 1 to 3:

<table>
	<thead>
		<tr>
			<th width="30">Size</th>
			<th width="30">Image</th>
			<th align="left">Query</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td align="middle">1</td>
			<td align="middle"><img src="http://mt.google.com/vt/icon/name=icons/spotlight/transit/walk_tiny.png"/></td>
			<td>walk_tiny.png</td>
		</tr>
		<tr>
			<td align="middle">2</td>
			<td align="middle"><img src="http://mt.google.com/vt/icon/name=icons/spotlight/transit/walk_small.png"/></td>
			<td>walk_small.png</td>
		</tr>
		<tr>
			<td align="middle">3</td>
			<td align="middle"><img src="http://mt.google.com/vt/icon/name=icons/spotlight/transit/walk_large.png"/></td>
			<td>walk_large.png</td>
		</tr>
	</tbody>	
</table>

Here's how that looks in code:

	MapIcons.transit.walk(2);


### Scaling

All icons may be scaled by setting the `scale` parameter of the optional `options` object. Simply pass a value from 1 to 4 (note that values below 0.1 will be clamped):

<table>
	<thead>
		<tr>
			<th width="30">Scale</th>
			<th width="150">Image</th>
			<th align="left">Query</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td align="middle">1</td>
			<td align="middle"><img src="http://mt.google.com/vt/icon/name=icons/spotlight/bar_search_v_L_8x.png&scale=1"></td>
			<td>bar_search_v_L_8x.png&scale=1</td>
		</tr>
		<tr>
			<td align="middle">2</td>
			<td align="middle"><img src="http://mt.google.com/vt/icon/name=icons/spotlight/bar_search_v_L_8x.png&scale=2"></td>
			<td>bar_search_v_L_8x.png&scale=2</td>
		</tr>
		<tr>
			<td align="middle">3</td>
			<td align="middle"><img src="http://mt.google.com/vt/icon/name=icons/spotlight/bar_search_v_L_8x.png&scale=3"></td>
			<td>bar_search_v_L_8x.png&scale=3</td>
		</tr>
		<tr>
			<td align="middle">4</td>
			<td align="middle"><img src="http://mt.google.com/vt/icon/name=icons/spotlight/bar_search_v_L_8x.png&scale=4"></td>
			<td>bar_search_v_L_8x.png&scale=4</td>
		</tr>
	</tbody>	
</table>

Here's how that looks in code:

	MapIcons.bar(1, {scale:2});



### Coloring

All icons can be colored to a certain degree using the query parameters provided by Google.

You simply pass one or more of these key/value pairs in the `options` parameter:
 
- `color` - a Hex color from 000000 to FFFFFF, which will colorize the icon
- `amount` - a Number from 0 to 1, which is the amount of color to paint
- `alpha` - a Number from 0 to 1, which will change the opacity of the icon
- `filter` - an ARGB Hex string, which is the combination of the above values should you require it 

Note that unsupplied values will default to 1, and any values below 0.1 will be clamped at 0.1.

Options can be combined in various ways to give you a variety of looks (note that you may also set the `filter` string directly):

<table>
	<thead>
		<tr><th align="middle">Alpha</th><th align="middle">Color</th><th align="middle">Amount</th><th align="middle">Image</th><th align="middle">Filter Result</th></tr>
	</thead>
	<tbody>
		<tr><td align="middle"></td><td align="middle"></td><td align="middle"></td><td align="middle"><img src="http://mt.google.com/vt/icon/name=icons/spotlight/museum_L_8x.png?scale=2"/></td><td align="middle">(None)</td></tr>
		<tr><td align="middle">0.5</td><td align="middle"></td><td align="middle"></td><td align="middle"><img src="http://mt.google.com/vt/icon/name=icons/spotlight/museum_L_8x.png?scale=2&filter=80FFFFFF"/></td><td align="middle">80FFFFFF</td></tr>
		<tr><td align="middle"></td><td align="middle">00FF00</td><td align="middle"></td><td align="middle"><img src="http://mt.google.com/vt/icon/name=icons/spotlight/museum_L_8x.png?scale=2&filter=FF00FF00"/></td><td align="middle">FF00FF00</td></tr>
		<tr><td align="middle"></td><td align="middle">00FF00</td><td align="middle">0.2</td><td align="middle"><img src="http://mt.google.com/vt/icon/name=icons/spotlight/museum_L_8x.png?scale=2&filter=FFCCFFCC"/></td><td align="middle">FFCCFFCC</td></tr>
		<tr><td align="middle">0.5</td><td align="middle">00FF00</td><td align="middle">0.2</td><td align="middle"><img src="http://mt.google.com/vt/icon/name=icons/spotlight/museum_L_8x.png?scale=2&filter=80CCFFCC"/></td><td align="middle">80CCFFCC</td></tr>
	</tbody>
</table>

Here's how that last option looks in code:

	MapIcons.museum(1, {scale:2, alpha:0.5, color:'00FF00', amount:0.2});


### Setting customisation defaults

Passing around options the entire time could get a little cumbersome, so the library allows you to set some defaults.

In order to do this, use the static `setOption` method:

	MapIcons.setOption('size', 3); // set the size of sizable icons to 'large'

The method is also chainable:

	MapIcons
		.setOption('style', 3)
		.setOption('size', 3)
		.setOption('alpha', 0.5);

Or you can pass in an object:

	MapIcons.setOption({style:3, size:2, alpha:0.5});

To reset an option, set its value to `null`:

	MapIcons.setOption('size', null);

The following options can be set:

- style	
- size	
- scale	
- filter	
- alpha	
- color	
- amount	


## Contributing

This is an Open Source project, and as such 
