import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  component: {
    textAlign: "left",
    paddingTop: "120px",
    paddingBottom: "120px",
    "& .title": {
      fontSize: "30px",
      fontWeight: "300px",
    },
    "& .divider": {
      paddingTop: "30px",
      paddingBottom: "30px",
      width: "100%",

      "& .MuiDivider-root": {
        borderColor: "white",
        marginRight: "auto", // center it
        marginLeft: "auto", // center it
      },
    },
    "& .description": { fontSize: "21px", paddingBottom: "30px" },
    "& .subtitle": {
      fontSize: "15px",
      color: "#cf1430",
      fontWeight: "bold",
      paddingBottom: "30px",
    },
    "& .subdescription": {
      fontSize: "21px",
      fontWeight: "bold",
    },
  },
}));
