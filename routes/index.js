
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.ejs', { title: 'Express test' })
};

exports.contact = function ( req, res ){
   res.render('contact', { title: 'Contact' })
};