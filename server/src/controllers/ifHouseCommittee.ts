import { Request, Response } from "express";
import IfHouseCommittee from "../db/models/ifHouseCommittee";

export const getAllHouses = async (req: Request,res: Response) => {
  try {
    const housesList = await IfHouseCommittee.find();
    res.status(200).json({message:"Houses list recieved successfully!", list: housesList})    
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const getHouseById = async (req: Request,res: Response) => {
  const {id} = req.params;

  try {
    const house = await IfHouseCommittee.findById(id);
    res.status(200).json({message: "house recieved successfully!", item: house});   
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

export const createHouse = async (req: Request,res: Response) => {
  
  try {
    const newEntity = new IfHouseCommittee(req.body);
    const newHouse = await newEntity.save();
    res.status(200).json({message:"New house created!", item: newHouse})
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}