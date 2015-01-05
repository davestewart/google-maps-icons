Google Maps Icons
=================

## Overview

Google Maps Icons is an attempt to provides an API for Google Maps icon URLs.
 
The static `MapIcons` class contains a nested structure of namespaced methods that return the Google Maps URL for each icon.

You can choose from a variety of icon types, including:

<table>
	<thead>
		<tr><th align="left">Method</th><th>Image</th><th align="left">Description</th></tr>
	</thead>
	<tbody>
		<tr><td><code>MapIcons.cafe();</code></td><td align="middle"><img src='http://mt.google.com/vt/icon/name=icons/spotlight/cafe_L_8x.png' /></td><td>Places</td></tr>
		<tr><td><code>MapIcons.transit.bus();</code></td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/transit/bus_large.png' /></td><td>Transit</td></tr>
		<tr><td><code>MapIcons.misc.star();</code></td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/star_L_8x.png' /></td><td>Miscellaneous</td></tr>
		<tr><td><code>MapIcons.markers.text('A');</code></td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-b.png&text=A&psize=16&font=fonts/Roboto-Regular.ttf&color=FF000000&ax=44&ay=48' /></td><td>Marker</td></tr>
	</tbody>
</table>


There are also a variety of ways to style (most of) the icons:

<table>
	<thead>
		<tr><th align="left">Method</th><th>Image</th><th align="left">Description</th></tr>
	</thead>
	<tbody>
		<tr><td><code>MapIcons.post_office();</code></td><td align="middle"><img src='http://mt.google.com/vt/icon/name=icons/spotlight/post_office_L_8x.png' /></td><td>Basic icon</td></tr>
		<tr><td><code>MapIcons.post_office(3);</code></td><td align="middle"><img src='http://mt.google.com/vt/icon/name=icons/spotlight/post_office_search_L_8x.png' /></td><td>Alternative style</td></tr>
		<tr><td><code>MapIcons.post_office(3, {highlight:'00AA00'});</code></td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/post_office_search_L_8x.png&highlight=00AA00' /></td><td>Colored</td></tr>
		<tr><td><code>MapIcons.post_office(3, {alpha:0.5});</code></td><td align="middle"><img src='http://mt.google.com/vt/icon/name=icons/spotlight/post_office_search_L_8x.png?filter=80ffffff' /></td><td>Filtered</td></tr>
		<tr><td><code>MapIcons.post_office(3, {scale:2});</code></td><td align="middle"><img src='http://mt.google.com/vt/icon/name=icons/spotlight/post_office_search_L_8x.png?scale=2' /></td><td>Scaled</td></tr>
		<tr><td><code>MapIcons.local.jp.post_office();</code></td><td align="middle"><img src='http://mt.google.com/vt/icon/name=icons/spotlight/jp/post_office_japan_L_8x.png' /></td><td>Localized</td></tr>
	</tbody>
</table>


The following characteristics may be customised:

  - [Style](#style)
  - [Size](#size)
  - [Scale](#scale)
  - [Alpha](#alpha)
  - [Filter](#filter)
  
## Basic usage

### Getting started

To use the icon in Google Maps, use the methods in the MapIcons class to return the icon URL, then assign it as an `icon` parameter to your marker:  

```javascript
var map    = app.map; // or whatever your map reference is
var center = map.getCenter();
var icon   = MapIcons.airport();
var marker = new google.maps.Marker({map:map, position:center, icon:icon});
```

### Localisation

Certain countries have their own localised icons. To access these, investigate the `.local` namespace for any icon groups:

```javascript
var en = MapIcons.bank();
var jp = MapIcons.local.jp.bank();
```

## API

### Markers

<table>
	<thead>
		<tr><th align="left">Method</th><th>Image</th><th align="left">Description</th></tr>
	</thead>
	<tbody>
		<tr><td><code>MapIcons.markers.text('A');</code></td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-b.png&text=A&psize=16&font=fonts/Roboto-Regular.ttf&color=FF000000&ax=44&ay=48' /></td><td>Single letter, red</td></tr>
		<tr><td><code>MapIcons.markers.text('A', 2);</code></td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-a.png&text=A&psize=16&font=fonts/Roboto-Regular.ttf&color=FF000000&ax=44&ay=48' /></td><td>Single letter, green</td></tr>
		<tr><td><code>MapIcons.markers.text('ABC');</code></td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-b.png&text=ABC&psize=9&font=fonts/Roboto-Regular.ttf&color=FF000000&ax=44&ay=48' /></td><td>Multiple letters</td></tr>
		<tr><td><code>MapIcons.markers.text('A', 1, {fontColor:'FFFFFF'});</code></td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-b.png&text=A&psize=16&font=fonts/Roboto-Regular.ttf&color=FFFFFFFF&ax=44&ay=48' /></td><td>Colored text</td></tr>
		<tr><td><code>MapIcons.markers.text('A', 1, {highlight:'00FF00'});</code></td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-b.png&text=A&psize=16&font=fonts/Roboto-Regular.ttf&color=FF000000&ax=44&ay=48&highlight=00FF00' /></td><td>Colored background</td></tr>
		<tr><td><code>MapIcons.markers.text('A', 1, {highlight:'00FF00', fontColor:'FFFFFF'});</code></td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-b.png&text=A&psize=16&font=fonts/Roboto-Regular.ttf&color=FFFFFFFF&ax=44&ay=48&highlight=00FF00&fontColor=FFFFFF' /></td><td>Colored text and background</td></tr>
		<tr><td><code>MapIcons.markers.dot();</code></td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-poi.png' /></td><td>Red dot</td></tr>
		<tr><td><code>MapIcons.markers.dot(2);</code></td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-blue.png' /></td><td>Blue dot</td></tr>
		<tr><td><code>MapIcons.markers.dot(3);</code></td><td align="middle"><img src='http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-ad.png' /></td><td>Purple dot</td></tr>
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

```javascript
MapIcons.cafe(3);
```

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

```javascript
MapIcons.transit.walk(2);
```

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

```javascript
MapIcons.bar(1, {scale:2});
```


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

```javascript
MapIcons.museum(1, {scale:2, alpha:0.5, color:'00FF00', amount:0.2});
```

### Setting customisation defaults

Passing around options the entire time could get a little cumbersome, so the library allows you to set some defaults.

In order to do this, use the static `set` method:

```javascript
MapIcons.set('size', 3); // set the size of sizable icons to 'large'
```

The method is also chainable:

```javascript
MapIcons
	.set('style', 3)
	.set('size', 3)
	.set('alpha', 0.5);
```

Or you can pass in an object:

```javascript
MapIcons.set({style:3, size:2, alpha:0.5});
```

To reset an option, set its value to `null`:

```javascript
MapIcons.set('size', null);
```

The following options can be set:

- style	
- size	
- scale	
- filter	
- alpha	
- color	
- amount	


## Appendix: all icons

<style type="text/css">
.map-icons{
	background:#FFF; 
	padding:20px
	}
	
.map-icons .indent{
	margin-left:25px;
	}
	
.map-icons p{
	padding: 0;
	margin: 6px;
	}
	
.map-icons p > * {
	vertical-align:middle;
	}
</style>

<div class="map-icons"><h3>MapIcons</h3><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/airport_L_8x.png" /> <span>airport</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/atm_L_8x.png" /> <span>atm</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/bank_dollar_L_8x.png" /> <span>bank_dollar</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/bank_euro_L_8x.png" /> <span>bank_euro</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/bank_intl_L_8x.png" /> <span>bank_intl</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/bank_pound_L_8x.png" /> <span>bank_pound</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/bank_yen_L_8x.png" /> <span>bank_yen</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/bar_L_8x.png" /> <span>bar</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/cafe_L_8x.png" /> <span>cafe</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/camping_L_8x.png" /> <span>camping</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/cemetery_L_8x.png" /> <span>cemetery</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/civic_building_L_8x.png" /> <span>civic_building</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/gas_station_L_8x.png" /> <span>gas_station</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/golf_L_8x.png" /> <span>golf</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/harbour_L_8x.png" /> <span>harbour</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/hospital_H_L_8x.png" /> <span>hospital_H</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/library_L_8x.png" /> <span>library</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/lodging_L_8x.png" /> <span>lodging</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/monument_L_8x.png" /> <span>monument</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/mountains_L_8x.png" /> <span>mountains</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/movie_L_8x.png" /> <span>movie</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/museum_L_8x.png" /> <span>museum</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/park_L_8x.png" /> <span>park</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/parking_L_8x.png" /> <span>parking</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/police_L_8x.png" /> <span>police</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/post_office_L_8x.png" /> <span>post_office</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/restaurant_L_8x.png" /> <span>restaurant</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/shopping_L_8x.png" /> <span>shopping</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/supermarket_L_8x.png" /> <span>supermarket</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/temple_L_8x.png" /> <span>temple</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/university_L_8x.png" /> <span>university</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/wc_L_8x.png" /> <span>wc</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/worship_dharma_L_8x.png" /> <span>worship_dharma</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/worship_hindu_L_8x.png" /> <span>worship_hindu</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/worship_islam_L_8x.png" /> <span>worship_islam</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/worship_jain_L_8x.png" /> <span>worship_jain</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/worship_jewish_L_8x.png" /> <span>worship_jewish</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/worship_sikh_L_8x.png" /> <span>worship_sikh</span></p><h3>MapIcons.local</h3><div class="indent"><h3>MapIcons.local.jp</h3><div class="indent"><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/jp/ancient_relic_L_8x.png" /> <span>ancient_relic</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/jp/bank_japan_L_8x.png" /> <span>bank</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/jp/buddist_temple_L_8x.png" /> <span>buddist_temple</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/jp/city_office_L_8x.png" /> <span>city_office</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/jp/circle_k_L_8x.png" /> <span>circle_k</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/jp/hot_spring_L_8x.png" /> <span>hot_spring</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/jp/lawson_L_8x.png" /> <span>lawson</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/jp/museum_japan_L_8x.png" /> <span>museum</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/jp/police_japan_L_8x.png" /> <span>police</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/jp/post_office_japan_L_8x.png" /> <span>post_office</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/jp/shrine_L_8x.png" /> <span>shrine</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/jp/seven_eleven_L_8x.png" /> <span>seven_eleven</span></p></div><h3>MapIcons.local.cn</h3><div class="indent"><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/cn/government_china_L_8x.png" /> <span>government</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/cn/historic_china_L_8x.png" /> <span>historic</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/cn/school_china_L_8x.png" /> <span>school</span></p></div></div><h3>MapIcons.transit</h3><div class="indent"><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/transit/walk_large.png" /> <span>walk</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/transit/cycle_large.png" /> <span>cycle</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/transit/car_large.png" /> <span>car</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/transit/bus_large.png" /> <span>bus</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/transit/tram_large.png" /> <span>tram</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/transit/rail_large.png" /> <span>rail</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/transit/monorail_large.png" /> <span>monorail</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/transit/metro_large.png" /> <span>metro</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/transit/funicular_large.png" /> <span>funicular</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/transit/cablecar_large.png" /> <span>cablecar</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/transit/gondola_large.png" /> <span>gondola</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/transit/ferry_large.png" /> <span>ferry</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/transit/plane_large.png" /> <span>plane</span></p><h3>MapIcons.transit.local</h3><div class="indent"><h3>MapIcons.transit.local.uk</h3><div class="indent"><p><img src="http://mt.google.com/vt/icon?name=icons/transit/localizations/uk-london-metro_large.png" /> <span>london_metro</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/transit/localizations/uk-london-overground_large.png" /> <span>london_overground</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/transit/localizations/uk-london-tramlink_large.png" /> <span>london_tramlink</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/transit/localizations/uk-rail_large.png" /> <span>rail</span></p></div><h3>MapIcons.transit.local.fr</h3><div class="indent"><p><img src="http://mt.google.com/vt/icon?name=icons/transit/localizations/fr-paris-rail_large.png" /> <span>paris_rail</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/transit/localizations/fr-paris-metro_large.png" /> <span>paris_metro</span></p></div><h3>MapIcons.transit.local.de</h3><div class="indent"><p><img src="http://mt.google.com/vt/icon?name=icons/transit/localizations/de-metro_large.png" /> <span>metro</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/transit/localizations/de-sbahn_large.png" /> <span>sbahn</span></p></div><h3>MapIcons.transit.local.es</h3><div class="indent"><p><img src="http://mt.google.com/vt/icon?name=icons/transit/localizations/es-madrid-metro_large.png" /> <span>madrid_metro</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/transit/localizations/es-madrid-rail_large.png" /> <span>madrid_rail</span></p></div><h3>MapIcons.transit.local.jp</h3><div class="indent"><p><img src="http://mt.google.com/vt/icon?name=icons/transit/localizations/jp/v1/tokyo-metro_large.png" /> <span>tokyo_metro</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/transit/localizations/jp/v1/tokyo-toei_large.png" /> <span>tokyo_toei</span></p></div></div><h3>MapIcons.transit.travelmode</h3><div class="indent"><p><img src="http://mt.google.com/vt/icon?name=icons/transit/tactile/triplabel/travelmode/walk.png" /> <span>walk</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/transit/tactile/triplabel/travelmode/cycle.png" /> <span>cycle</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/transit/tactile/triplabel/travelmode/drive.png" /> <span>drive</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/transit/tactile/triplabel/travelmode/tram.png" /> <span>tram</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/transit/tactile/triplabel/travelmode/airplane.png" /> <span>plane</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/transit/tactile/triplabel/travelmode/airplane-horizontal.png" /> <span>plane_horizontal</span></p></div></div><h3>MapIcons.misc</h3><div class="indent"><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/star_L_8x.png" /> <span>star</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/work_L_8x.png" /> <span>work</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/home_L_8x.png" /> <span>home</span></p></div><h3>MapIcons.indoor</h3><div class="indent"><p><img src="http://mt.google.com/vt/icon?name=icons/layers/indoor/toilet.png" /> <span>toilet</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/layers/indoor/elevator.png" /> <span>elevator</span></p></div><h3>MapIcons.generic</h3><div class="indent"><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/ad_L_8x.png" /> <span>ad</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/generic_emergency_L_8x.png" /> <span>emergency</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/generic_establishment_L_8x.png" /> <span>establishment</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/generic_recreation_L_8x.png" /> <span>recreation</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/generic_retail_L_8x.png" /> <span>retail</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/generic_search_L_8x.png" /> <span>search</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/generic_transit_L_8x.png" /> <span>transit</span></p></div><h3>MapIcons.markers</h3><div class="indent"><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-waypoint-b.png&text=&psize=16&font=fonts/Roboto-Regular.ttf&color=FF000000&ax=44&ay=48" /> <span>text</span></p><p><img src="http://mt.google.com/vt/icon?name=icons/spotlight/spotlight-poi.png" /> <span>dot</span></p></div></div>

## Contributing

This is an Open Source project, and as such 
