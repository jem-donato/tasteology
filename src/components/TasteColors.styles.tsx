import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  tasteColors: {
    textAlign: "center",
    paddingTop: "120px",
    paddingBottom: "120px",
    "& .divider": {
      paddingTop: "30px",
      paddingBottom: "30px",
      width: "100%",

      "& .MuiDivider-root": {
        borderColor: "white",
        marginRight: "auto", // center it
        marginLeft: "auto", // center it
        width: "40%",
      },
    },
  },
}));
