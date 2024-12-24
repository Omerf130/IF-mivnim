import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { useGetAllHousesQuery } from "../../services/houseApi";
import IfHouseCard from "./IfHouseCard";
import Box from "@mui/material/Box";

const IfHouseCommittee = () => {
  const { data: houseData, isLoading } = useGetAllHousesQuery();

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            marginTop: "40px",
            padding: "10px 20px" 
          }}
        >
          {houseData?.list.map((card) => (
            <IfHouseCard key={card._id} card={card} />
          ))}
        </Box>
      )}
    </div>
  );
};

export default IfHouseCommittee;
