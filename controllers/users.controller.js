const db = require("../models/db");

module.exports.getAllCategory = (req, res) => {
  db.execute(`SELECT ct.id, ct.category_name FROM project.wcp_category`)
    .then((data) => {
      let [rows] = data;
      res.status(200).json({
        data: rows,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getProductByCategoryId = (req, res) => {
  let id = req.params.id;

  db.execute(
    `SELECT pr.id, pr.product_name, pr.price, pr.description FROM project.wcp_product as pr 
  inner join project.wcp_category as ct 
  on pr.category_id = ct.id
  where ct.id = ? 
  and ct.is_deleted = 0
  and pr.is_deleted = 0`,
    [id]
  )
    .then((data) => {
      let [rows] = data;
      res.status(200).json({
        data: rows,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
