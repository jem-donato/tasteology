import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  photoDetail: {
    fontSize: "21px",
    "& .title": {
      paddingTop: "30px",
      paddingBottom: "10px",
      fontWeight: " bold",
    },
    "& .description": {
      width: "80%",
      marginRight: "auto",
      marginLeft: "auto",
    },
  },
}));
