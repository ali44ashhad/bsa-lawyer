import {dpdp} from "../models/dpdp.js";

export const createDpdp = async (req, res) => {
  try {
    const newDpdp = new dpdp(req.body);
    const savedData = await newDpdp.save();

    res.status(201).json({
      success: true,
      message: "DPDP data created successfully",
      data: savedData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/* ==============================
   ✅ GET ALL DPDP
============================== */
export const getAllDpdp = async (req, res) => {
  try {
    const data = await dpdp.find();

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ==============================
   ✅ GET SINGLE DPDP BY ID
============================== */
export const getSingleDpdp = async (req, res) => {
  try {
    const data = await dpdp.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ==============================
   ✅ UPDATE DPDP
============================== */
export const updateDpdp = async (req, res) => {
  try {
    const updatedData = await dpdp.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedData) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Data updated successfully",
      data: updatedData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/* ==============================
   ✅ DELETE DPDP
============================== */
export const deleteDpdp = async (req, res) => {
  try {
    const deletedData = await dpdp.findByIdAndDelete(req.params.id);

    if (!deletedData) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Data deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};