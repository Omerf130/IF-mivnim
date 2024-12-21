import mongoose from "mongoose";
import ifHouseCommitteeSchema from "../schemas/ifHouseCommittee";

const IfHouseCommittee = mongoose.model("IfHouseCommittee", ifHouseCommitteeSchema);

export default IfHouseCommittee;