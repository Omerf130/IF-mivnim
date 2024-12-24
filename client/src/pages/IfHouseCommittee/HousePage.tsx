import { useParams } from "react-router-dom";
import { useGetHouseByIdQuery } from "../../services/houseApi";
import { FormControl } from "@mui/material";
import "./HousePage.scss";

const HousePage = () => {
  const { id } = useParams();
  if (!id) return null;
  const { data: houseData, isLoading } = useGetHouseByIdQuery(id);

  console.log(houseData);

  return (
    <div className="housepage_card">
      <div className="housepage_title">{houseData?.item.title}</div>
      <div className="housepage_subtitle">{houseData?.item.subtitle}</div>
      <div className="housepage_image_wrapper">
        {houseData?.item.image.map((image, index) => (
          <img className="housepage_img" key={index} src={image} />
        ))}
      </div>
      <p className="housepage_p">
        {houseData?.item.body} Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Alias deleniti, dolorum ducimus laborum non quod nihil
        ut debitis quam, exercitationem rerum omnis dolores aperiam
        necessitatibus sapiente nostrum error quos quas?
      </p>
      <form>
        <input className="housepage_name" type="text" placeholder="שם מלא" />
        <input className="housepage_bug" type="text" placeholder="מה התקלה?" />
      </form>
    </div>
  );
};

export default HousePage;
