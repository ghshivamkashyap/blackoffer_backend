const Data = require("../Models/Data");

exports.getdata = async (req, res) => {
  try {
    let result = await Data.find();

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
