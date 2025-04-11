import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  photoDetail: {
    fontSize: "21px",
    "& .title-detail": {
      paddingTop: "30px",
      paddingBottom: "10px",
      fontWeight: " bold",
    },
    "& .description-detail": {
      width: "80%",
      marginRight: "auto",
      marginLeft: "auto",
    },
  },
}));
