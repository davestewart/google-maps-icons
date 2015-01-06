(function(win, $, undefined)
{

	function process(parent, depth)
	{
		var str = '';
		var path = segments.join('.');
		depth = depth || 0;

		str += '<h3>' + path + '</h3>';

		if(depth > 0)
		{
			str += '<div class="indent">';
		}

		for(var name in parent)
		{
			var obj = parent[name];
			if(typeof obj === 'function')
			{
				var icon = obj.call(MapIcons);
				if(typeof icon == 'string')
				{
					var title = path + '.' + name + '();';
					str += '<p title="' +title+ '"><img src="' +icon+ '"/> <span>' +name+'</span></p>';
				}
			}
			else if(typeof obj === 'object')
			{
				segments.push(name);
				str += process(obj, depth + 1);
				segments.pop();
			}

		}
		if(depth > 0)
		{
			str += '</div>';
		}
		return str;
	}

	function init()
	{
		// inject html
			var html = process(MapIcons);
			$('.map-icons')
				.html(html)
				.find('span')
				.on('mousedown', function(event)
				{

					var $e = $(this);

					if($e.is('[contenteditable]'))
					{
						return;
					}

					var method	= $e.parent().attr('title');
					var text	= $e.text();
					$e
						.attr('contenteditable', true)
						.attr('spellcheck', false)
						.text(method)
						.on('blur', function()
						{
							console.log(this);
							$e
								.removeAttr('contenteditable')
								.text(text);
						})
				});
	}

	var segments = ['MapIcons'];

	$(init);

}(window, jQuery, undefined));

