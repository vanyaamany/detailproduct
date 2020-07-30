const express = require("express");
const app = express();
const DetailProduct = require("../model/detailproduct");


app.get("/v1/api/tokopedia/detailproduct/:id", (req, res) => {
	const userId = req.params.id;
	DetailProduct.findDetailProduct(userId, (err, result) => {
		console.log(result);
		if (err) throw console.log("error When Find One Data...", err);
		// res.send(result);
		res.render("detailproduct", { title: "express" });
	});
});

app.post("/v1/api/tokopedia/detailproduct", (req, res) => {
	DetailProduct.DetailProduct(req.body, (err, result) => {
		if (err) console.log("When Routing Create detailproduct", err);
		res.send(result);
	});
});

module.exports = app;