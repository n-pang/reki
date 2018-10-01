var fs = require('fs');
var request = require('/application/node-v8.12.0-win-x64/node_modules/request');
var cheerio = require('/application/node-v8.12.0-win-x64/node_modules/cheerio');

request(
	{
		uri: "http://rei19.hatenablog.com/archive/2013",
	}, 
	function(error, response, body) {
		var $ = cheerio.load(body, {decodeEntities: false});
 
		$('script').each(function() {
			$(this).remove();
		});
		fs.writeFile('./output-test.html', $.html(), function (err) {
			console.log('Written html');
		});
	}
);
