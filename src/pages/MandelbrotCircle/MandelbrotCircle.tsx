import { Button } from "@material-ui/core";

import React, { FunctionComponent, useState } from "react";
import SliderComponent from "../../components/Slider";
import useInterval from "../../hooks/useInterval";
import { usePageStyles } from "../../styles/pages";
import SVGLine from "../../utils/SVGCreator/SVGLine";
import Controls from "./Controls";

type OwnProps = {};

// https://www.youtube.com/watch?v=qhbuKbxJsk8

const MandelbrotCircle: FunctionComponent<OwnProps> = () => {
  const pageClasses = usePageStyles();
  const [multiplierFactor, setMultiplierFactor] = useState(2);
  const [numberOfIteration, setNumberOfIteration] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const getPoints = () =>
    new Array(numberOfIteration).fill(0).map((_, i) => {
      return {
        y: 500 + Math.sin((i / numberOfIteration) * (2 * Math.PI)) * 500,
        x: 500 + Math.cos((i / numberOfIteration) * (2 * Math.PI)) * 500,
      };
    });

  const getLines = () => {
    const points = getPoints();
    const lines = [];
    for (let i = 0; i < numberOfIteration; i++) {
      lines.push(points[(i * multiplierFactor) % numberOfIteration]);
    }
    return lines;
  };

  useInterval(
    () => {
      if (numberOfIteration === 2000) {
        setMultiplierFactor((multiplierFactor + 1) % 50);
        setNumberOfIteration(2);
      } else {
        setNumberOfIteration(numberOfIteration + 1);
      }
    },
    isPlaying ? 100 : null
  );

  const handlePlayButton = () => {
    setIsPlaying(!isPlaying);
  };

  const lines = getLines();
  const points = getPoints();
  return (
    <div className={pageClasses.root}>
      <div className={pageClasses.rules}>
        <Controls handlePlay={handlePlayButton} />
        <Button variant="contained" onClick={handlePlayButton}>
          {isPlaying ? "Stop" : "Play"}
        </Button>
        <SliderComponent
          name="nombre d'itérations"
          value={numberOfIteration}
          onChange={(newValue) => {
            setNumberOfIteration(newValue);
          }}
          max={2000}
          min={1}
          hasInput={true}
        />
        <SliderComponent
          name="coefficient"
          value={multiplierFactor}
          onChange={(newValue: number) => {
            setMultiplierFactor(newValue);
          }}
          max={100}
          min={2}
          hasInput={true}
        />
      </div>
      <svg
        viewBox="0 0 1000 1000"
        height="600"
        width="600"
        className={pageClasses.renderArea}
      >
        <circle
          cx="500"
          cy="500"
          r="500"
          fill="url(#exampleGradient)"
          stroke={"black"}
          strokeWidth={1}
        />
        {lines.map((line, i) => (
          <SVGLine pointA={points[i % numberOfIteration]} pointB={line} />
        ))}
      </svg>
    </div>
  );
};

export default MandelbrotCircle;
