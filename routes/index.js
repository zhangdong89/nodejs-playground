
/*
 * GET home page.
 */

exports.index = function(req, res){
  console.log('~~~ index\t\t' + req.protocol + ' is secured? ' + (req.secure ? 'YES' : 'NO'));
  res.render('index');
};

exports.test = function(req, res){
  var isSecure = req.secure ? 'YES' : 'NO';
  console.log('~~~ test\t\t' + req.protocol + ' is secured? ' + isSecure);
  res.render('test', { protocol: req.protocol, secure: isSecure});
};
