const Bootcamp = require('../models/Bootcamp');

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();
    res.status(200).json({ data: bootcamp });
  } catch (error) {
    res.status(400).json({ error: true });
  }
};

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ error: true });
    }
    res.status(200).json({ data: bootcamp });
  } catch (error) {
    res.status(400).json({ error: true });
  }
};

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ data: bootcamp });
  } catch (error) {
    res.status(400).json({ error: true });
  }
};

exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      return res.status(400).json({ error: true });
    }
    res.status(200).json({ data: bootcamp });
  } catch (error) {
    res.status(400).json({ error: true });
  }
};

exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ error: true });
    }
    res.status(200).json({ data: {} });
  } catch (error) {
    res.status(400).json({ error: true });
  }
};
