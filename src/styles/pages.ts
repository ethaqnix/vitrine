import { makeStyles, Theme } from "@material-ui/core";

export const usePageStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flex: 1,
  },
  rules: {
    flex: 1,
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    backgroundColor: "grey",
  },
  renderArea: {
    margin: theme.spacing(1),
    flex: 2,
    justifyContent: "",
  },
}));
