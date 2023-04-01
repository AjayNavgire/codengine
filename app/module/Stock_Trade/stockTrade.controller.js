
var db = require('../../config/db.config');


exports.createTrade = (req, res) => {

    const post = req.body;
  
  // validate trade
  if (post.Type !== 'buy' && post.Type !== 'sell' || post.Shares < 1 || post.Shares > 100) {
    return res.status(400).json({ error: 'Invalid trade' });
  }
  

  var col_names = Object.keys(post);
  col_names.pop("id");
  var sql_fields = [];
  var sql_valuse = [];
  var sql_set_fields = [];
  col_names.forEach(function (name){
    sql_fields.push(name);
    sql_valuse.push(db.escape(post[name]));
    sql_set_fields.push(name + "=" + db.escape(post[name]));
  })

  // save trade to database or data structure
  var sql = "INSERT INTO stock_trade ("+sql_set_fields.join(",")+") VALUES ("+ sql_valuse.join(",")+");"

  db.query(sql, function(err, result){
    console.log(result);
    console.log(sql);
  })
  
  res.status(201).json(trade);

};

exports.getAllTrade = (req, res) => {

    let trades = getAllTrades();
  
    // filter by type if type parameter is specified
    if (req.query.type) {
      trades = trades.filter(trade => trade.Type === req.query.type);
    }
    
    // filter by user_id if user_id parameter is specified
    if (req.query.user_id) {
      trades = trades.filter(trade => trade.User_id === parseInt(req.query.user_id));
    }
    
    res.status(200).json(trades);
};

exports.getTradeDetails = (req, res) => {


};

exports.deleteTrade = (req, res) => {


};

exports.updateTrade = (req, res) => {


};

exports.patchTrade = (req, res) => {

};

