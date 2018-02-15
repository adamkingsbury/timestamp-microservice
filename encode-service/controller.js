var moment = require('moment');

module.exports = function(req, res) {
  
  if (req.params.time === undefined){
    return returnEmpty(req,res);
  }
  
  var ts = moment(req.params.time);
  
  if (!ts.isValid()){
    return returnEmpty(req,res);
  }
  
  var info = {
    unix: ts.valueOf(),
    text: ts.format('dddd[, the] do [of] MMMM, YYYY [at] h:mmA [and] ss [second(s)]'),
    details: ts.toObject(),
    valueSubmitted: req.params.time
  };
    
  return res.status(200).send(info);
};

var returnEmpty = function(req,res){
  res.status(200).json({
      unix: '',
      text: '',
      details: '',
      valueSubmitted: req.params.time
    });
};