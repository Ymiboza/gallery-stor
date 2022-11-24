const Art = require("../models/art");

/**
 * Get all arts
 * @param {*} req
 * @param {*} res
 */
const getArts = async (req, res) => {
  try {
    const arts = await Art.find();
    res.status(200).json(arts);
  } catch (error) {
    res.status(500).json({ message: "Failed to get list of pictures" });
  }
};

const getArt = async (req, res) => {
  try {
    const art = await Art.find({ _id: req.params.id });
    res.status(200).json(art);
  } catch (error) {
    res.status(400).json({ message: "Art not found" });
  }
};

/**
 * Create art
 * @param {*} req
 * @param {*} res
 */
const createArt = async (req, res) => {
  const errors = {};

  if (!req.file) {
    errors.artImage = { message: "Please enter a art image" };
  }

  if (!req.body.name) {
    errors.name = { message: "Please enter a name" };
  }

  if (!req.body.price) {
    errors.price = { message: "Please enter a price" };
  }

  if (req.body.description && req.body.description.length > 500) {
    errors.description = { message: "Description too big" };
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const { name, price, description } = req.body;
    const art = await Art.create({
      name,
      price,
      description,
      artImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`,
    });

    res.status(200).json(art);
  } catch (error) {
    res.status(500).json({ message: "Failed to create pictures" });
  }
};

module.exports = {
  getArts,
  createArt,
  getArt,
};
