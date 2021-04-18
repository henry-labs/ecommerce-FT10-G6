const server = require("express").Router();
const { Products } = require("../../db");

server.put("/:idProduct/category/:idCategory", (req, res) => {
  const { idProduct, idCategory } = req.params;

  Products.findByPk(idProduct)
    .then((product) => {
      if (product === null) {
        return res.status(400).json({ message: "That product doesn't exist", status: 400 });
      }
      product
        .addCategories(idCategory)
        .then((p) => res.status(200).json(product))
        .catch((error) => {
          console.log(error)
          res.status(500).json({ message: "Internal server error", status: 500 })
        });
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ message: "Internal server error", status: 500 })
    });
});

server.put("/:id", (req, res) => {
  const idProduct = req.params.id;
  const {
    name,
    description,
    price,
    available,
    fileLink,
    preview,
    authorId,
    seriesId,
  } = req.body;

  Products.update(
    {
      name: name,
      description: description,
      price: price,
      available: available,
      fileLink: fileLink,
      preview: preview,
      authorId: authorId,
      seriesId: seriesId,
    },
    {
      where: {
        id: idProduct,
      },
    }
  ).then(() => {
    Products.findOrCreate({
      where: {
        id: idProduct,
      },
    })
      .then((resp2) => {
        res.status(200).json(resp2[0]);
      })
      .catch(() => {
        console.log(error)
        res.status(500).json({ message: "Internal server error", status: 500 })
      });
  });
});

module.exports = server;
