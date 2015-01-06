(function(window, undefined)
{

// ---------------------------------------------------------------------------------
// utility functions

	/**
	 * Utility function to add properties to one object from another, with optional filter
	 * @param	{Object}	obj			The source object to be extends
	 * @param	{Object}	props		The Object to copy properties from
	 * @param	{Object}	[filter]	An optional Object to act as a filter; that is, only named keys on this object will be copied from the props object
	 * @param	{Boolean}	[skipNull]	An optional flag to skip the copying of null or undefined properties
	 * @returns {Object}				The original Object with new properties
	 */
	function extend(obj, props, filter, skipNull)
	{
		// return an new empty Object if null is passed in
			if( ! obj )
			{
				return {};
			}

		// filter
			filter = filter || props;

		// extend properties
			for(var name in filter)
			{
				// don't overwrite existing properties
				if( ! (name in obj) )
				{
					// only copy defined values
					if( skipNull && (props[name] === null || typeof props[name] === 'undefined') )
					{
						continue;
					}
					obj[name] = props[name];
				}
			}

		// return
			return obj;
	}

	/**
	 * Utility function to convert a hash of values into a query string
	 * @param	{Object}	options		A hash of query string name/values
	 * @returns {string}
	 */
	function makeQuery(options)
	{
		var value, query = [];
		for(var name in options)
		{
			value = options[name];
			if( ! (value === null || typeof value === 'undefined') )
			{
				query.push(name + '=' + value);
			}
		}
		return (query.length ? '?' : '') + query.join('&');
	}

	/**
	 * Utility function to create a 2-part hex value from a number
	 * @param	{Number}	value		A Number from 0 to 255
	 * @returns {string}				The Hex string
	 */
	function makeHex(value)
	{
		var str	= Math.round(value).toString(16);
		return str.length == 1 ? '0' + str : str;
	}


// ---------------------------------------------------------------------------------
// internal functions

	/**
	 * Creates the full name for spotlight icons which have a "style" suffix (see below) of 1 of 4 types
	 * @param	{String}	name		An icon name
	 * @param	{Number}	style		A Number from 1 to 4
	 * @returns {string}				The full icon name
	 */
	function makeName(name, style)
	{
		return name + styles[style || settings.style];
	}

	/**
	 * Appends the a size string such as "_large" to icons that need it
	 * @param	{String}	name		An icon name
	 * @param	{Number}	size		An integer from 1 to 3
	 * @returns {string}				The full icon name
	 */
	function makeSize(name, size)
	{
		return name + sizes[size || settings.size];
	}


// ---------------------------------------------------------------------------------
// public functions

	/**
	 * Creates a filter string such as "FF00FFCC" from alpha, color and amount components
	 * @param	{Number}	alpha		A value from 0 to 1
	 * @param	{String}	color		A Hex color value
	 * @param	{Number}	amount		A value from 0 to 1
	 * @returns {string}				The built filter string
	 */
	function makeFilter(alpha, color, amount)
	{
		// parameters
			alpha		= typeof alpha === 'number' ? alpha : 1;
			amount		= typeof amount === 'number' ? amount : 1;
			color		= color == null ? 'FFFFFF' : color;

		// color
			color		= color.toLowerCase();

		// alpha
			alpha		= makeHex(alpha * 255);

		// correct alpha if 00
			if(alpha == '00')
			{
				alpha = '10';
			}

		// amount
			if(amount < 1)
			{
				color = color.match(/.{2}/g).map(function(h)
				{
					var dec = parseInt(h, 16);
					var val = 255 - (255 - dec) * amount;
					return makeHex(val);

				}).join('');
			}

		// filter
			var filter = alpha + color;

		// return
			return filter === 'ffffffff' ? '' : filter;
	}

	/**
	 * Creates the URL for a named icon
	 * @param	{String}	group		The name of the icon group
	 * @param	{String}	name		The name of the icon
	 * @param	{Object}	options		A hash of query string name/values
	 * @returns {string}				The final URL
	 */
	function makeURL(group, name, options)
	{
		// return empty string if no group or name
			if(group == null || name == null)
			{
				return '';
			}

		// params
			options			= options || {};

		// variables
			var icon		= groups[group] + name + '.png';
			var params		= { name:icon };

		// assign global settings (unfortunately, this code has gotten too clever / abstract for clarity now)
			var filteredSettings = extend({}, settings, group == 'marker' ? markerOptions : iconOptions);
			extend(params, filteredSettings, null, true);

		// assign options
			extend(params, options);

		// filter
			if(params.filter && typeof params.filter === 'object')
			{
				var filter = makeFilter(params.filter.alpha, params.filter.color, params.filter.amount);
				if(filter)
				{
					params.filter = filter;
				}
			}

		// return URL
			return 'http://mt.google.com/vt/icon' + makeQuery(params);
	}


// ---------------------------------------------------------------------------------
// private variables

	// ---------------------------------------------------------------------------------
	// properties

		/** @type {Object} A hash of paths relating to the icon style */
		var groups =
		{
			'marker'				:'icons/spotlight/spotlight-',
			'spotlight'				:'icons/spotlight/',
			'spotlight/japan'		:'icons/spotlight/jp/',
			'spotlight/china'		:'icons/spotlight/cn/',
			'transit'				:'icons/spotlight/transit/',
			'transit/travelmode'	:'icons/transit/tactile/triplabel/travelmode/',
			'transit/local'			:'icons/transit/localizations/',
			'indoor'				:'icons/layers/indoor/'
		};

		var fonts =
		[
			'fonts/Roboto-Regular.ttf',
			'fonts/Roboto-Bold.ttf',
			'fonts/arialuni_t.ttf'
		];

		/** @type {Array} icon name suffixes for spotlight icons */
		var styles =
		[
			'',
			'_L_8x',
			'_v_L_8x',
			'_search_L_8x',
			'_search_v_L_8x'
		];

		var sizes =
		[
			'',
			'_tiny',
			'_small',
			'_large'
		];


	// ---------------------------------------------------------------------------------
	// options

		var styleOptions =
		{
			style		:1,
			size		:3
		};

		var iconOptions =
		{
			scale		:null,
			highlight	:null,
			filter		:null
		};

		var markerOptions = extend
		({
			text		:null,
			psize		:null,
			font		:null,
			color		:null,
			ax			:null,
			ay			:null
		}, iconOptions);


	// ---------------------------------------------------------------------------------
	// default settings

		var settings = {};
		extend(settings, styleOptions);
		extend(settings, markerOptions);


// ---------------------------------------------------------------------------------
// MapIcons class

	window.MapIcons =
	{

		// ---------------------------------------------------------------------------------
		// methods

			/**
			 * Sets default options
			 * @param	{String}	name		The name of the property to set
			 * @param	{*}			value		The value to set the property to
			 * @returns {MapIcons}				The MapIcons object
			 */
			set:function(name, value)
			{
				if(typeof name === 'object')
				{
					for(var prop in name)
					{
						this.set(prop, name[prop]);
					}
				}
				else
				{
					if(name in settings)
					{
						settings[name] = value;
					}
				}
				return this;
			},


		// ---------------------------------------------------------------------------------
		// spotlight

			airport:function(style, options){
				return makeURL('spotlight', makeName('airport', style), options);
			},
			atm:function(style, options){
				return makeURL('spotlight', makeName('atm', style), options);
			},
			bank_dollar:function(style, options){
				return makeURL('spotlight', makeName('bank_dollar', style), options);
			},
			bank_euro:function(style, options){
				return makeURL('spotlight', makeName('bank_euro', style), options);
			},
			bank_intl:function(style, options){
				return makeURL('spotlight', makeName('bank_intl', style), options);
			},
			bank_pound:function(style, options){
				return makeURL('spotlight', makeName('bank_pound', style), options);
			},
			bank_yen:function(style, options){
				return makeURL('spotlight', makeName('bank_yen', style), options);
			},
			bar:function(style, options){
				return makeURL('spotlight', makeName('bar', style), options);
			},
			cafe:function(style, options){
				return makeURL('spotlight', makeName('cafe', style), options);
			},
			camping:function(style, options){
				return makeURL('spotlight', makeName('camping', style), options);
			},
			cemetery:function(style, options){
				return makeURL('spotlight', makeName('cemetery', style), options);
			},
			civic_building:function(style, options){
				return makeURL('spotlight', makeName('civic_building', style), options);
			},
			gas_station:function(style, options){
				return makeURL('spotlight', makeName('gas_station', style), options);
			},
			golf:function(style, options){
				return makeURL('spotlight', makeName('golf', style), options);
			},
			harbour:function(style, options){
				return makeURL('spotlight', makeName('harbour', style), options);
			},
			hospital:function(style, options){
				return makeURL('spotlight', makeName('hospital_H', style), options);
			},
			library:function(style, options){
				return makeURL('spotlight', makeName('library', style), options);
			},
			lodging:function(style, options){
				return makeURL('spotlight', makeName('lodging', style), options);
			},
			monument:function(style, options){
				return makeURL('spotlight', makeName('monument', style), options);
			},
			mountains:function(style, options){
				return makeURL('spotlight', makeName('mountains', style), options);
			},
			movie:function(style, options){
				return makeURL('spotlight', makeName('movie', style), options);
			},
			museum:function(style, options){
				return makeURL('spotlight', makeName('museum', style), options);
			},
			park:function(style, options){
				return makeURL('spotlight', makeName('park', style), options);
			},
			parking:function(style, options){
				return makeURL('spotlight', makeName('parking', style), options);
			},
			police:function(style, options){
				return makeURL('spotlight', makeName('police', style), options);
			},
			post_office:function(style, options){
				return makeURL('spotlight', makeName('post_office', style), options);
			},
			restaurant:function(style, options){
				return makeURL('spotlight', makeName('restaurant', style), options);
			},
			shopping:function(style, options){
				return makeURL('spotlight', makeName('shopping', style), options);
			},
			supermarket:function(style, options){
				return makeURL('spotlight', makeName('supermarket', style), options);
			},
			temple:function(style, options){
				return makeURL('spotlight', makeName('temple', style), options);
			},
			university:function(style, options){
				return makeURL('spotlight', makeName('university', style), options);
			},
			wc:function(style, options){
				return makeURL('spotlight', makeName('wc', style), options);
			},
			worship_dharma:function(style, options){
				return makeURL('spotlight', makeName('worship_dharma', style), options);
			},
			worship_hindu:function(style, options){
				return makeURL('spotlight', makeName('worship_hindu', style), options);
			},
			worship_islam:function(style, options){
				return makeURL('spotlight', makeName('worship_islam', style), options);
			},
			worship_jain:function(style, options){
				return makeURL('spotlight', makeName('worship_jain', style), options);
			},
			worship_jewish:function(style, options){
				return makeURL('spotlight', makeName('worship_jewish', style), options);
			},
			worship_sikh:function(style, options){
				return makeURL('spotlight', makeName('worship_sikh', style), options);
			},

		// ---------------------------------------------------------------------------------
		// localisations

			local:
			{
				jp:
				{
					ancient_relic:function(style, options){
						return makeURL('spotlight/japan', makeName('ancient_relic', style), options);
					},
					bank:function(style, options){
						return makeURL('spotlight/japan', makeName('bank_japan', style), options);
					},
					buddist_temple:function(style, options){
						return makeURL('spotlight/japan', makeName('buddist_temple', style), options);
					},
					city_office:function(style, options){
						return makeURL('spotlight/japan', makeName('city_office', style), options);
					},
					circle_k:function(style, options){
						return makeURL('spotlight/japan', makeName('circle_k', style), options);
					},
					hot_spring:function(style, options){
						return makeURL('spotlight/japan', makeName('hot_spring', style), options);
					},
					lawson:function(style, options){
						return makeURL('spotlight/japan', makeName('lawson', style), options);
					},
					museum:function(style, options){
						return makeURL('spotlight/japan', makeName('museum_japan', style), options);
					},
					police:function(style, options){
						return makeURL('spotlight/japan', makeName('police_japan', style), options);
					},
					post_office:function(style, options){
						return makeURL('spotlight/japan', makeName('post_office_japan', style), options);
					},
					shrine:function(style, options){
						return makeURL('spotlight/japan', makeName('shrine', style), options);
					},
					seven_eleven:function(style, options){
						return makeURL('spotlight/japan', makeName('seven_eleven', style), options);
					}
				},

				cn:
				{
					government:function(style, options){
						return makeURL('spotlight/china', makeName('government_china', style), options);
					},
					historic:function(style, options){
						return makeURL('spotlight/china', makeName('historic_china', style), options);
					},
					school:function(style, options){
						return makeURL('spotlight/china', makeName('school_china', style), options);
					}
				}

			},

		// ---------------------------------------------------------------------------------
		// transit

			transit:
			{
				walk:function(size, options){
					return makeURL('transit', makeSize('walk', size), options);
				},
				cycle:function(size, options){
					return makeURL('transit', makeSize('cycle', size), options);
				},
				car:function(size, options){
					return makeURL('transit', makeSize('car', size), options);
				},
				bus:function(size, options){
					return makeURL('transit', makeSize('bus', size), options);
				},
				tram:function(size, options){
					return makeURL('transit', makeSize('tram', size), options);
				},
				rail:function(size, options){
					return makeURL('transit', makeSize('rail', size), options);
				},
				monorail:function(size, options){
					return makeURL('transit', makeSize('monorail', size), options);
				},
				metro:function(size, options){
					return makeURL('transit', makeSize('metro', size), options);
				},
				funicular:function(size, options){
					return makeURL('transit', makeSize('funicular', size), options);
				},
				cablecar:function(size, options){
					return makeURL('transit', makeSize('cablecar', size), options);
				},
				gondola:function(size, options){
					return makeURL('transit', makeSize('gondola', size), options);
				},
				ferry:function(size, options){
					return makeURL('transit', makeSize('ferry', size), options);
				},
				plane:function(size, options){
					return makeURL('transit', makeSize('plane', size), options);
				},

				local:
				{
					uk:
					{
						london_metro:function(size, options){
							return makeURL('transit/local', makeSize('uk-london-metro', size), options);
						},
						london_overground:function(size, options){
							return makeURL('transit/local', makeSize('uk-london-overground', size), options);
						},
						london_tramlink:function(size, options){
							return makeURL('transit/local', makeSize('uk-london-tramlink', size), options);
						},
						rail:function(size, options){
							return makeURL('transit/local', makeSize('uk-rail', size), options);
						}
					},

					fr:
					{
						paris_rail:function(size, options){
							return makeURL('transit/local', makeSize('fr-paris-rail', size), options);
						},
						paris_metro:function(size, options){
							return makeURL('transit/local', makeSize('fr-paris-metro', size), options);
						}
					},

					de:
					{
						metro:function(size, options){
							return makeURL('transit/local', makeSize('de-metro', size), options);
						},
						sbahn:function(size, options){
							return makeURL('transit/local', makeSize('de-sbahn', size), options);
						}
					},

					es:
					{
						madrid_metro:function(size, options){
							return makeURL('transit/local', makeSize('es-madrid-metro', size), options);
						},
						madrid_rail:function(size, options){
							return makeURL('transit/local', makeSize('es-madrid-rail', size), options);
						}
					},

					jp:
					{
						tokyo_metro:function(size, options){
							return makeURL('transit/local', makeSize('jp/v1/tokyo-metro', size), options);
						},
						tokyo_toei:function(size, options){
							return makeURL('transit/local', makeSize('jp/v1/tokyo-toei', size), options);
						}
					}

				},

				travelmode:
				{
					walk:function(options){
						return makeURL('transit/travelmode', 'walk', options);
					},
					cycle:function(options){
						return makeURL('transit/travelmode', 'cycle', options);
					},
					drive:function(options){
						return makeURL('transit/travelmode', 'drive', options);
					},
					tram:function(options){
						return makeURL('transit/travelmode', 'tram', options);
					},
					plane:function(options){
						return makeURL('transit/travelmode', 'airplane', options);
					},
					plane_horizontal:function(options){
						return makeURL('transit/travelmode', 'airplane-horizontal', options);
					}
				}

			},

		// ---------------------------------------------------------------------------------
		// misc

			misc:
			{
				star:function(options){
					return makeURL('spotlight', makeName('star'), options);
				},

				work:function(options){
					return makeURL('spotlight', makeName('work'), options);
				},

				home:function(options){
					return makeURL('spotlight', makeName('home'), options);
				}

			},

			indoor:
			{
				toilet:function(options){
					return makeURL('indoor', 'toilet', options);
				},

				elevator:function(options){
					return makeURL('indoor', 'elevator', options);
				}
			},

			generic:
			{
				ad:function(style, options){
					return makeURL('spotlight', makeName('ad', style), options);
				},

				emergency:function(style, options){
					return makeURL('spotlight', makeName('generic_emergency', style), options);
				},

				establishment:function(style, options){
					return makeURL('spotlight', makeName('generic_establishment', style), options);
				},

				recreation:function(style, options){
					return makeURL('spotlight', makeName('generic_recreation', style), options);
				},

				retail:function(style, options){
					return makeURL('spotlight', makeName('generic_retail', style), options);
				},

				search:function(style, options){
					return makeURL('spotlight', makeName('generic_search', style), options);
				},

				transit:function(style, options){
					return makeURL('spotlight', makeName('generic_transit', style), options);
				}
			},


		// ---------------------------------------------------------------------------------
		// markers

			markers:
			{
				/**
				 * Builds a text marker
				 * @see								http://mt.google.com/vt/icon?text=A&psize=16&font=fonts/arialuni_t.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-b.png&ax=44&ay=48&scale=1				 * @param {String} text			The icon text
				 * @param	{Number}	style		The color of the marker, 1 for green, 2 for red
				 * @param	{Object}	options		A hash of options, which are fontSize, fontName (Roboto-Regular, Roboto-Bold, arialuni_t) fontColor, ax, ay, scale as well as the usual styling options
				 * @returns {string}				The URL for the new icon
				 */
				text:function(text, style, options)
				{
					// params
						text			= text || 'A';
						options			= options || {};

					// variables
						var name		= 'waypoint-' + (style === 2 ? 'a' : 'b');
						var fontName	= 'fonts/' + (options.fontName || 'Roboto-Regular') + '.ttf';
						var fontSize	= options.fontSize || ([0,16,12,9][text.length] || 16);
						var color		= options.fontColor  ? 'FF' + options.fontColor : 'FF000000';

					// options
						var params =
						{
							name		:name,
							text		:text,
							psize		:fontSize,
							font		:fontName,
							color		:color,
							ax			:44,
							ay			:48
						};

					// add any options
						extend(params, options);

					// return
						return makeURL('marker', name, params);
				},

				/**
				 * Builds a dot marker
				 * @param	{Number}	style		The style of the marker, 1 for red, 2 for blue, 3 for purple
				 * @param	{Object}	options		A hash of options, which are the same as normal icons
				 * @returns {string}
				 */
				dot:function(style, options)
				{
					if(style === 4)
					{
						return this.text('•', 2, {fontColor:'333333', fontSize:30});
					}
					else
					{
						var name = ['', 'poi','waypoint-blue','ad'][style || 1];
						return makeURL('marker', name, options);
					}

				}
			}


	};


}(window, undefined));