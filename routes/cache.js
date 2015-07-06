/*
 * Cache related operation
 */
var WXS = require('../wxs');
// USE FOR CLOUDFOUNDRY DEPLOYMENT
var env = JSON.parse(process.env.VCAP_SERVICES);
var wxsprops = env['DataCache-1.0'][0]['credentials'];

var wxsclient = new WXS(wxsprops);

exports.getCache = function(req, res) {
	var key = req.params.key;
	console.log("get key:" + key);
	wxsclient.get(key, function(wxsres) {
		res.json({
			value : wxsres
		});
	});
};

exports.putCache = function(req, res) {
	var key = req.query.key;
	var value = req.query.value;
	wxsclient.put(key, value, function() {
		res.json({
			value : "Put successfully."
		});
	});
};

exports.removeCache = function(req, res) {
	var key = req.params.key;
	wxsclient.remove(key, function() {
		res.json({
			value : "Remove successfully."
		});
		console.log('finished remove');
	});
};