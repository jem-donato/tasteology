import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  component: {
    textAlign: "left",
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
      },
    },
    "& .description": { paddingBottom: "30px" },
    "& .subtitle": {
      paddingBottom: "30px",
    },
    "& .subdescription": {
      fontWeight: "bold",
    },
  },
}));
