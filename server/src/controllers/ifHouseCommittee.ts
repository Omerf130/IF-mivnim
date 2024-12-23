import IfHouseCommittee from "../db/models/ifHouseCommittee";

export const getAllHouses = async (req,res) => {
  try {
    const housesList = await IfHouseCommittee.find();
    res.status(200).json({message:"Houses list recieved successfully!", list: housesList})    
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const createHouse = async (req,res) => {
  
  try {
    const newEntity = new IfHouseCommittee(req.body);
    const newHouse = await newEntity.save();
    res.status(200).json({message:"New house created!", newHouse})
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}