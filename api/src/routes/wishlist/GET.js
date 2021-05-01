const server = require("express").Router();
const { Users, Wishlists, Products } = require("../../db");

server.get("/", async (req, res) => {

    try {

        const wishlist = await Wishlists.findAll({
            include: [
                {
                    model: Users,
                    attributes: ['id', 'name']
                },
                {
                    model: Products,
                    through: { attributes: [] },
                },
            ],
        })

        res.json(wishlist)

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", status:500});
    }

});

server.get("/:userId", async (req, res) => {

    const { userId } = req.params

    try {

        const userWishlist = await Wishlists.findOne({
            where: {
                userId
            },
            include: [
                {
                    model: Users,
                    attributes: ['id', 'name']
                },
                {
                    model: Products,
                    through: { attributes: [] },
                },
            ],
        })

        res.json(userWishlist)

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", status:500});
    }

});

module.exports = server;
