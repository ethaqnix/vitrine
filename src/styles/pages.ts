import { makeStyles, Theme } from "@material-ui/core";

export const usePageStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: 10,
    display: "flex",
    width: "600",
    height: "400",
    flex: 1,
  },
  rules: {
    flex: 1,
    height: "400px",
  },
  renderArea: {
    flex: 2,
    justifyContent: "",
  },
}));
