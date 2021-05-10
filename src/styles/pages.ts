import { makeStyles, Theme } from "@material-ui/core";

export const usePageStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(2),
    backgroundColor: "red",
    display: "flex",
    flex: 1,
  },
  rules: {
    padding: theme.spacing(1),
    flex: 1,

    //
    //padding: theme.spacing(1),
    backgroundColor: "grey",
  },
  renderArea: {
    padding: theme.spacing(1),
    backgroundColor: "blue",
    flex: 2,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
}));
