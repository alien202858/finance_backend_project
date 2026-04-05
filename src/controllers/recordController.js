const Record = require("../models/Record");

exports.createRecord = async (req, res) => {
  try {
    console.log("USER:", req.user);
    console.log("BODY:", req.body);

    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { amount, type } = req.body;

    if (!amount || !type) {
      return res.status(400).json({ message: "Amount and type required" });
    }

    const record = await Record.create({
      ...req.body,
      user: req.user.id
    });

    res.json(record);
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};


exports.getRecords = async (req, res) => {
  const records = await Record.find();
  res.json(records);
};

exports.updateRecord = async (req, res) => {
  const record = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(record);
};

exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
