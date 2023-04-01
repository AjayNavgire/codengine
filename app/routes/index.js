const express = require("express");
const timeSheet = require("./../module/TimeSheet/timesheet.routes");
const stockTrade = require("./../module/Stock_Trade/stockTrade.routes")

const app = express();

app.use("/timesheet", timeSheet);
app.use("/stocktrade", stockTrade);

module.exports = app;