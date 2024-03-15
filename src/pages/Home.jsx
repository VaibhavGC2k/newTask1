import { Button } from "@mui/material";
import Images from "../components/Images";
import { fetchImages } from "../features/imagesSlice";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state)=>state.images.isLoading)
  return (
    <>
      <Images />
      <h3 className="homeText">Click below to fetch Data</h3>
      <Button onClick={() => console.log(dispatch(fetchImages()))}>Fetch Images</Button>
    </>
  );
};

export default Home;
