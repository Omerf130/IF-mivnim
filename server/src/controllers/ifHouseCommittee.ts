import IfHouseCommittee from "../db/models/ifHouseCommittee";

export const createHouse = async (req,res) => {
  console.log(req.body)
  try {
    const newHouse = {...req.body};
    const newEntity = new IfHouseCommittee(req.body);
    
  } catch (error) {
    
  }
}