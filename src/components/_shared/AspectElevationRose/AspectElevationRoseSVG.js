import React from "react";
import * as d3 from "d3-shape";
import { Colors } from "../../../constants/colors";

const SVG_HEIGHT = 360;
const SVG_WIDTH = 360;

// TODO: This can be retrieved from the constants endpoint
const aspectElevationObject = {
  "'Alpine'": ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
  "'Treeline'": ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
  "'Below Treeline'": ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
};

const Aspect = ({ aspect, index, createArc, isSelected, onClick }) => (
  <g key={index} className="arc" onClick={onClick}>
    <path
      d={createArc(aspect)}
      fill={isSelected ? `${Colors.BondiBlue}` : "white"}
      stroke={`${Colors.Silver}`}
      strokeWidth={2}
    />
  </g>
);

// TODO: after discussing with Kim, we thought of only keeping
// the labels for N, E, W, S and to get rid of elevations
const AspectLabels = ({ pie }) => (
  <g transform={"translate(180, 180)"}>
    {pie.map((aspect, index) => [
      <text
        key={index}
        transform={`translate(${d3
          .arc()
          .innerRadius(150)
          .outerRadius(180)
          .centroid(aspect)})`}
        textAnchor="middle"
        alignmentBaseline="middle"
        fill={`${Colors.LimedSpruce}`}
        fontSize={12}
        fontWeight="normal"
      >
        {aspect.data}
      </text>,
    ])}
  </g>
);

const AspectElevationRoseSVG = props => {
  const value = props.value;
  const calcInnerRadius = index => {
    /* This calculates the inner radius of each elevation band and makes
        the center bands slightly bigger and a bit easier to click */

    if (index > 0) {
      return 15 + index * (45 * 1.08 ** (3 - index));
    } else return 0;
  };
  const calcOuterRadius = index => {
    /* This calculates the outer radius of each elevation band and makes
        the center bands slightly bigger and a bit easier to click */

    return 15 + (index + 1) * (45 * 1.08 ** (2 - index));
  };

  const createPie = d3
    .pie()
    .value(1)
    .startAngle(d => (Math.PI / d.length) * -1)
    .sort(d => d.index);
  const createArc = index =>
    d3
      .arc()
      .innerRadius(calcInnerRadius(index))
      .outerRadius(calcOuterRadius(index));

  return (
    <svg viewBox={`0 0 ${SVG_HEIGHT} ${SVG_WIDTH}`}>
      {Object.keys(aspectElevationObject).map((elevation, index) => (
        <g key={index} transform={"translate(180 180)"}>
          {createPie(aspectElevationObject[elevation]).map((aspect, i) => (
            <Aspect
              key={i}
              aspect={aspect}
              elevation={elevation}
              // The check on existence of handleChange prevents an error if this is a read only rendering of rose
              onClick={event => {
                props.handleChange && props.handleChange(elevation, aspect.data, event);
              }}
              index={i}
              createArc={createArc(index)}
              isSelected={value[elevation].includes(aspect.data)}
            />
          ))}
        </g>
      ))}
      <AspectLabels pie={createPie(aspectElevationObject["'Alpine'"])} />
      {/* To easily re-enable the elevation-band labels, just import this component -> <ElevationLabels /> */}
    </svg>
  );
};

export default AspectElevationRoseSVG;
