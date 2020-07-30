const db = require("../config/index");

module.exports = {
	findDetailProduct: async (id, callback) => {
		db.query(
			{
				sql: "SELECT * FROM detailproduct WHERE id = ?",
				values: [id],
			},
			function (err, result) {
				callback(err, result[0]);
			}
		);
	},
	DetailProduct: async (postDetail, callback) => {
		try {
			db.query(
				{
					sql: "INSERT INTO detailproduct SET ?",
					values: {
						namaproduk: postDetail.namaproduk,
						harga: postDetail.harga,
						diskon: postDetail.diskon,
						potongan_harga: postDetail.potongan_harga,
						deskripsi: postDetail.deskripsi,
						rating: postDetail.rating,
						saler: postDetail.saler,
						berat: postDetail.berat,
                        kondisi: postDetail.kondisi,
                        pemesanan: postDetail.pemesanan,
                        kategori: postDetail.kategori,
                        etalase: postDetail.etalase,
					},
				},
				function (err, result) {
					if (err) throw console.log("error when insert detailproduct");
					callback(err, result);
				}
			);
		} catch (error) {
			if (error) throw console.log("error network Create Data");
		}
	},
};
