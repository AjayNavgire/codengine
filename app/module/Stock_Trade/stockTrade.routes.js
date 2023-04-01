//Routes
const router = require("express").Router();
const stockTrade = require("./stockTrade.controller");

// Retrieve all trades
router.post("/", stockTrade.createTrade);

router.get("/", stockTrade.getAllTrade);

router
.route("/id")
.get(stockTrade.getTradeDetails)
.delete(stockTrade.deleteTrade)
.put(stockTrade.updateTrade)
.patch(stockTrade.patchTrade);


module.exports = router;