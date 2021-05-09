import {
  makeStyles,
  Theme,
  Grid,
  Input,
  Typography,
  Slider,
} from "@material-ui/core";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 250,
    margin: theme.spacing(1),
  },
  input: {
    width: 50,
  },
}));

type OwnProps = {
  name: string;
  onChange(change: number): void;
  value: number;
  min: number;
  max: number;
  hasInput?: boolean;
};

const SliderComponent: FunctionComponent<OwnProps> = ({
  onChange,
  value,
  min,
  max,
  name,
  hasInput,
}) => {
  const classes = useStyles();

  const handleChange = (change: number) => {
    if (change < min) {
      onChange(min);
    } else if (change > max) {
      onChange(max);
    } else {
      onChange(change);
    }
  };

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    if (!Array.isArray(newValue)) onChange(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.value === "" ? 0 : Number(event.target.value));
  };

  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
        {name}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={min}
            max={max}
          />
        </Grid>
        {hasInput && (
          <Grid item>
            <Input
              className={classes.input}
              value={value}
              margin="dense"
              onChange={handleInputChange}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default SliderComponent;
