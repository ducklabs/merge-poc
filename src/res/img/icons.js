import React from "react";
import { Colors } from "../../constants/colors";
import styled from "styled-components";

const SVG = styled.svg`
  fill: ${props => props.fill};
  :hover {
    ${props => props.hoverColor && `fill: ` + props.hoverColor};
  }
`;

/*
 * To make a styled component from an SVG:
 * Open the svg in a text editor or IDE
 * Copy the contents into the left side of - https://react-svgr.com/playground/
 * Grab the return from the right side and put it in your new component
 * xmlns tags can break the component. Remove them or you may get an error telling you to.
 * Take size and color out of props
 * Put the color prop into the appropriate fill/stroke fields.
 * Use size for width and height, making sure that if the SVG isn't square you account for that when setting the properties
 * Remember to use default values for size and color. Use constants where applicable.
 */

export const AddIcon = props => {
  const { size, color } = props;
  return (
    <svg
      overflow="visible"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
      width={size || 12}
      height={size || 12}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        vectorEffect="non-scaling-stroke"
        fill={color || Colors.MountainMeadow}
        d="M14 10V0h-4v10H0v4h10v10h4V14h10v-4z"
      />
    </svg>
  );
};

export const ArrowIcon = props => {
  const { size, color } = props;
  return (
    <svg
      overflow="visible"
      preserveAspectRatio="none"
      viewBox="0 0 24 12"
      width={size ? size * 2 : 26}
      height={size || 13}
      {...props}
    >
      <path
        d="M.165.142L11.97 11.948 23.777.142z"
        vectorEffect="non-scaling-stroke"
        fill={color || Colors.MountainMeadow}
      />
    </svg>
  );
};

export const CalendarIcon = props => {
  const { size, color } = props;
  return (
    <svg
      overflow="visible"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
      width={size || 23}
      height={size || 23}
      {...props}
    >
      <path
        d="M4.67 9.34h14.66v10.67H4.67V9.34zm3.9-1.77c-.06.07-.15.1-.24.09h-.66a.314.314 0 01-.33-.3V4.34a.31.31 0 01.31-.33H8.34c.18-.01.32.13.33.3v3.02c.01.09-.03.19-.1.25v-.01zm8 0a.34.34 0 01-.24.09h-.67c-.18.01-.32-.13-.33-.31V4.33c-.01-.18.13-.32.31-.33H16.33c.18-.01.32.13.33.31v3.02c.01.09-.03.18-.09.25v-.01zm4.09-.91a1.35 1.35 0 00-1.33-1.33H18v-1c0-.92-.75-1.67-1.67-1.67h-.67c-.92.01-1.67.76-1.66 1.68v1h-4v-1c0-.92-.74-1.66-1.66-1.67h-.67C6.75 2.68 6 3.42 6 4.35v1H4.67c-.73.01-1.32.6-1.33 1.33v13.33c.01.73.6 1.32 1.33 1.33h14.66c.73-.01 1.32-.6 1.33-1.33V6.66z"
        vectorEffect="non-scaling-stroke"
        fill={color || "black"}
      />
    </svg>
  );
};

export const CaretIcon = props => {
  const { size, color, hoverColor } = props;
  return (
    <SVG
      overflow="visible"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
      width={size || 32}
      height={size || 32}
      hoverColor={hoverColor}
      fill={color || Colors.White}
      {...props}
    >
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" vectorEffect="non-scaling-stroke" />
    </SVG>
  );
};

export const CloseIcon = props => {
  const { color, size } = props;
  return (
    <svg
      overflow="visible"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
      width={size || "16"}
      height={size || "16"}
    >
      <g>
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          style={{
            fill: color || Colors.Lynch,
            transitionProperty: "fill",
            transition: "0.2s ease-in-out",
          }}
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
};

export const BinocularsIcon = props => {
  const { color, size } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="none" d="M0 0h26v26H0z" />
        <g fill={color} fillRule="nonzero">
          <path d="M24.794 16.387l-.013-.035a5.023 5.023 0 00-.32-.867l-2.648-7.151a3.552 3.552 0 00-1.311-1.783l-.094-.669a.526.526 0 00-.022-.093 2.585 2.585 0 00-2.462-1.761c-1.396 0-2.558 1.145-2.59 2.553v.023l.022 1.036c-.241.41-.396.866-.456 1.338h-3.8a3.52 3.52 0 00-.456-1.337l.022-1.017v-.02c-.032-1.408-1.194-2.552-2.59-2.552a2.586 2.586 0 00-2.462 1.762.527.527 0 00-.021.09l-.095.647a3.553 3.553 0 00-1.31 1.783L1.54 15.485c-.134.279-.24.569-.321.867l-.013.035a.523.523 0 00-.03.136 5.066 5.066 0 109.998.979.583.583 0 00.003-.06l-.011-1.756h3.669l-.012 1.86.001.028v.092a5.066 5.066 0 1010-1.143.522.522 0 00-.03-.136zM20.826 8.69l1.73 4.673a5.058 5.058 0 00-6.666 1.198l.032-5.135c0-1.371 1.127-2.487 2.513-2.487.446 0 .884.119 1.269.344.025.02.053.036.081.05a2.505 2.505 0 011.041 1.357zm-9.696 1.337h3.74l-.017 2.777h-3.706l-.017-2.777zm6.794-4.95a1.54 1.54 0 011.425.934 3.569 3.569 0 00-2.964.528c.053-.812.73-1.462 1.54-1.462zM8.076 5.1c.8 0 1.471.636 1.537 1.436a3.569 3.569 0 00-2.95-.53A1.542 1.542 0 018.076 5.1zM5.174 8.69a2.515 2.515 0 014.52-.58c.251.394.384.852.384 1.32l.032 5.132a5.058 5.058 0 00-6.667-1.199l1.73-4.673zm.937 12.995a4.019 4.019 0 01-3.892-5.015l.285-.768a4.017 4.017 0 113.607 5.783zm5.048-7.046l-.005-.786h3.692l-.005.786H11.16zm8.73 7.046a4.018 4.018 0 113.607-5.784l.285.769a4.019 4.019 0 01-3.892 5.015z" />
          <path d="M6.111 14.077a3.59 3.59 0 100 7.179 3.59 3.59 0 000-7.18zm0 6.13a2.541 2.541 0 110-5.082 2.541 2.541 0 010 5.083zM19.825 14.077a3.59 3.59 0 100 7.179 3.59 3.59 0 000-7.18zm0 6.13a2.541 2.541 0 110-5.082 2.541 2.541 0 010 5.083z" />
        </g>
      </g>
    </svg>
  );
};

export const WorkflowIcon = props => {
  const { color, size } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="none" d="M0 0h26v26H0z" />
        <path
          d="M10.256 4.687h7.273a4.067 4.067 0 010 8.134h-.74M8.903 12.821h-.617a4.067 4.067 0 000 8.135h7.395"
          stroke={color}
          strokeWidth={1.109}
        />
        <g transform="translate(2 .25)">
          <path
            fill={color}
            fillRule="nonzero"
            d="M5.706 2.588l-.455.503-1.833 1.943-.534-.545-.475-.503-.93.985.475.503.989 1.048.455.503.475-.503L6.18 4.077l.474-.504z"
          />
          <circle stroke={color} strokeWidth={1.109} cx={4.067} cy={4.437} r={3.882} />
        </g>
        <g transform="translate(8.655 8.384)">
          <path
            fill={color}
            fillRule="nonzero"
            d="M5.706 2.588l-.455.503-1.833 1.943-.534-.545-.475-.503-.93.985.475.503.989 1.048.455.503.475-.503L6.18 4.077l.474-.504z"
          />
          <circle stroke={color} strokeWidth={1.109} cx={4.067} cy={4.437} r={3.882} />
        </g>
        <g transform="translate(15.31 16.519)">
          <path
            fill={color}
            fillRule="nonzero"
            d="M5.706 2.588l-.455.503-1.833 1.943-.534-.545-.475-.503-.93.985.475.503.989 1.048.455.503.475-.503L6.18 4.077l.474-.504z"
          />
          <circle stroke={color} strokeWidth={1.109} cx={4.067} cy={4.437} r={3.882} />
        </g>
      </g>
    </svg>
  );
};

export const ReportIcon = props => {
  const { color, size } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 26 26" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="none" d="M0 0h26v26H0z" />
        <g fill={color} fillRule="nonzero">
          <path d="M21.77.63H7.709a1.39 1.39 0 00-1.38 1.38v2.266H4.062a1.39 1.39 0 00-1.38 1.38v18.36c0 .755.625 1.38 1.38 1.38h14.063a1.39 1.39 0 001.38-1.38V21.75h2.266a1.39 1.39 0 001.38-1.38V2.01c-.026-.755-.625-1.38-1.38-1.38zm-3.385 23.36c0 .13-.104.234-.26.234H4.062a.233.233 0 01-.234-.234V5.63c0-.13.104-.234.235-.234h2.265V20.37c0 .755.625 1.38 1.38 1.38h10.677v2.24zm3.62-3.62c0 .13-.104.26-.26.26H7.708a.261.261 0 01-.26-.26V2.01c0-.13.104-.26.26-.26h14.063c.13 0 .26.104.26.26v18.36h-.026z" />
          <path d="M18.906 13.833h-8.36a.578.578 0 00-.572.573c0 .313.26.573.573.573h8.36c.312 0 .572-.26.572-.573a.578.578 0 00-.573-.573zM18.906 17.219h-8.36a.578.578 0 00-.572.573c0 .312.26.573.573.573h8.36c.312 0 .572-.26.572-.573a.578.578 0 00-.573-.573zM18.906 10.474h-8.36a.578.578 0 00-.572.573c0 .312.26.573.573.573h8.36c.312 0 .572-.26.572-.573a.562.562 0 00-.573-.573zM11.536 8.313h1.016c.13 0 .208-.105.208-.209V6.49a.205.205 0 00-.208-.209h-1.016a.205.205 0 00-.208.209v1.614c0 .104.104.209.208.209zM14.063 8.313h1.015c.13 0 .208-.105.208-.209V5.318a.205.205 0 00-.208-.209h-1.015a.205.205 0 00-.209.209v2.76c0 .13.104.235.209.235zM16.589 8.313h1.015c.13 0 .209-.105.209-.209V4.198a.224.224 0 00-.209-.208H16.59a.205.205 0 00-.209.208v3.906c0 .104.104.209.209.209z" />
        </g>
      </g>
    </svg>
  );
};

export const MagnifyingGlassIcon = props => {
  const { color, size } = props;
  return (
    <svg
      overflow="visible"
      preserveAspectRatio="none"
      viewBox="-0.51 0 51 51"
      width={size || 18}
      height={size || 18}
      {...props}
    >
      <path
        className="prefix__st0"
        d="M35 6C27-2 14-2 6 6s-8 21 0 29 21 8 29 0 8-21 0-29zm-1.4 27.6c-7.2 7.2-18.9 7.2-26.2 0C.2 26.4.2 14.7 7.4 7.4 14.6.2 26.3.2 33.6 7.4c7.2 7.2 7.2 19 0 26.2zM38 37l-2 2 12 12 2-2-12-12z"
        vectorEffect="non-scaling-stroke"
        fill={color || "#38464e"}
      />
    </svg>
  );
};

export const CheckIcon = props => {
  const { color, size, weight } = props;

  switch (weight) {
    case "medium": {
      return (
        <svg
          overflow="visible"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          {...props}
        >
          <path
            d="M20.05 8.23c0-.27-.1-.52-.29-.71l-1.42-1.41c-.39-.39-1.02-.39-1.41-.01l-.01.01-6.83 6.84-3.06-3.07c-.39-.39-1.02-.39-1.41-.01l-.01.01-1.41 1.41c-.39.39-.39 1.02-.01 1.41l.01.01 5.18 5.18c.39.39 1.02.39 1.41.01l.01-.01 9-9a.99.99 0 00.29-.71l-.04.05z"
            vectorEffect="non-scaling-stroke"
            fill={color}
          />
        </svg>
      );
    }
    case "light": {
      return (
        <svg
          overflow="visible"
          preserveAspectRatio="none"
          viewBox="0 0 14 10.6"
          width={size}
          height={size / 1.32}
          {...props}
        >
          <path
            d="M0 5.6l5 5 9-9L12.4 0 4.955 7.541 1.543 4.13z"
            vectorEffect="non-scaling-stroke"
            fill={color}
          />
        </svg>
      );
    }
  }
};
CheckIcon.defaultProps = {
  color: "#1dc39a",
  size: 24,
  weight: "medium",
};

export const SavingIcon = props => {
  const { color, size } = props;

  return (
    <svg
      overflow="visible"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
      width={size || 17}
      height={size || 17}
      {...props}
    >
      <path
        d="M20 5.34a.616.616 0 00-.41-.61.598.598 0 00-.73.15l-1.35 1.33c-.73-.7-1.58-1.25-2.51-1.63a7.86 7.86 0 00-6.06.06 7.877 7.877 0 00-4.3 4.26 7.88 7.88 0 000 6.21c.8 1.92 2.33 3.45 4.26 4.25.98.42 2.03.64 3.1.64 1.17 0 2.34-.25 3.4-.75 1.06-.49 2-1.22 2.75-2.13.05-.06.08-.15.08-.23 0-.08-.04-.16-.1-.21l-1.43-1.44a.392.392 0 00-.26-.09.33.33 0 00-.24.12 5.307 5.307 0 01-6.27 1.65 5.334 5.334 0 01-2.84-2.84 5.286 5.286 0 010-4.13 5.272 5.272 0 012.84-2.86c1.93-.82 4.16-.43 5.7 1L14.2 9.53c-.21.18-.27.47-.15.72.09.26.34.43.61.42h4.66c.37 0 .67-.3.68-.67V5.34z"
        vectorEffect="non-scaling-stroke"
        fill={color || Colors.Lynch}
      />
    </svg>
  );
};

export const FloppyIcon = props => {
  const { size, color } = props;
  return (
    <svg
      overflow="visible"
      preserveAspectRatio="none"
      viewBox="0 0 12.75 12.75"
      width={size || 12.75}
      height={size || 12.75}
      {...props}
    >
      <path
        d="M9.917 0h-8.5C.63 0 0 .637 0 1.417v9.916c0 .78.63 1.417 1.417 1.417h9.916a1.42 1.42 0 001.417-1.417v-8.5zM6.375 11.333A2.122 2.122 0 014.25 9.208c0-1.175.95-2.125 2.125-2.125 1.176 0 2.125.95 2.125 2.125 0 1.176-.95 2.125-2.125 2.125zM8.5 4.25H1.417V1.417H8.5z"
        vectorEffect="non-scaling-stroke"
        fill={color || Colors.Lynch}
      />
    </svg>
  );
};

export const SettingsIcon = props => {
  const { color, size } = props;
  return (
    <svg viewBox="-0.513 0 57 57" width={size} height={size} {...props}>
      <path
        d="M56.5 22.1l-.6-2.1c-.6-2.3-2.7-4-5.1-4-.5 0-.9.1-1.4.2l-2.7.7c-.7-1.2-1.5-2.2-2.5-3.2l1.1-1.9c.7-1.2.9-2.7.5-4.1-.4-1.4-1.2-2.5-2.5-3.3l-1.9-1.1c-.8-.5-1.7-.7-2.7-.7-1.9 0-3.7 1-4.6 2.7L33 7.2c-1.3-.3-2.7-.5-4-.5L28.4 4c-.6-2.3-2.7-4-5.1-4-.5 0-.9.1-1.4.2l-2.1.6c-1.4.4-2.5 1.3-3.2 2.5-.7 1.2-.9 2.7-.5 4.1l.7 2.8c-1.1.7-2.1 1.5-3 2.4l-1.8-1c-.8-.5-1.7-.7-2.7-.7-1.9 0-3.7 1-4.6 2.7l-1.1 1.9c-.8 1-.9 2.5-.6 3.8.4 1.4 1.2 2.5 2.5 3.3l1.8 1.1c-.3 1.3-.5 2.6-.5 3.9l-2.8.7c-1.4.4-2.5 1.3-3.2 2.5-.7 1.2-.9 2.7-.5 4.1L.7 37c.6 2.3 2.7 4 5.1 4 .5 0 .9-.1 1.4-.2l2.9-.8c.7 1.1 1.5 2.1 2.4 3.1l-1 1.8c-.7 1.2-.9 2.7-.5 4.1.4 1.4 1.2 2.5 2.5 3.3l1.9 1.1c.8.5 1.7.7 2.7.7 1.9 0 3.7-1 4.6-2.7l1-1.8c1.3.3 2.5.5 3.8.5l.8 2.9c.6 2.3 2.7 4 5.1 4 .5 0 .9-.1 1.4-.2l2.1-.6c2.8-.8 4.5-3.7 3.8-6.6l-.8-2.9C41 46 42 45.2 43 44.3l1.8 1.1c.8.5 1.7.7 2.7.7 1.9 0 3.7-1 4.6-2.7l1.1-1.9c.7-1.2.9-2.7.5-4.1-.4-1.4-1.2-2.5-2.5-3.3l-1.8-1c.3-1.3.5-2.5.5-3.8l2.8-.7c1.4-.4 2.5-1.3 3.2-2.5.7-1.2.9-2.6.6-4zm-2.3 3.1c-.4.8-1.2 1.3-2 1.6L48 27.9v.8c0 1.6-.2 3.2-.7 4.8l-.2.7 3.1 1.8c.8.4 1.3 1.2 1.6 2 .2.9.1 1.8-.3 2.5l-1.1 1.9c-.6 1-1.7 1.7-2.9 1.7-.6 0-1.2-.2-1.7-.5l-3.1-1.8-.5.5c-1.2 1.2-2.5 2.2-3.9 3l-.7.4 1.2 4.4c.5 1.8-.6 3.6-2.4 4.1l-2.1.6c-.3.2-.6.2-.9.2-1.5 0-2.8-1-3.2-2.5L29 48.1h-.8c-1.6 0-3.2-.2-4.8-.7l-.7-.2-1.8 3.1c-.6 1-1.7 1.7-2.9 1.7-.6 0-1.2-.2-1.7-.4l-1.9-1.1c-.8-.5-1.3-1.2-1.6-2-.2-.9-.1-1.8.3-2.5l1.8-3.1-.5-.5c-1.2-1.2-2.2-2.5-3-3.9l-.4-.7L6.6 39h-.7c-1.5 0-2.8-1-3.2-2.5l-.6-2.1c-.2-.9-.1-1.8.3-2.5.4-.8 1.2-1.3 2-1.6l4.3-1.2v-.8c0-1.6.2-3.3.6-4.9l.2-.7-3.1-1.8c-.8-.5-1.3-1.2-1.6-2-.2-.9-.1-1.8.3-2.5l1.1-1.9c.6-1 1.7-1.7 2.9-1.7.6 0 1.2.2 1.7.5L14 15l.5-.5c1.2-1.2 2.5-2.2 3.8-3l.7-.5-1.1-4.2c-.2-.9-.1-1.8.3-2.5.4-.8 1.2-1.3 2-1.6l2.1-.6c1.8-.5 3.6.6 4.1 2.4l.9 3.4.3.7h.8c1.7 0 3.3.2 5 .7l.7.2 1.8-3.2c.6-1 1.7-1.7 2.9-1.7.6 0 1.2.2 1.7.5l1.9 1.1c.8.4 1.3 1.2 1.6 2 .2.9.1 1.8-.3 2.5L41.8 14l.5.5c1.2 1.2 2.2 2.6 3.1 4.1l.4.7 4.1-1.1c1.8-.5 3.6.6 4.1 2.4l.6 2.1c.2.8.1 1.7-.4 2.5zm-25.9-8.3c-6.3 0-11.5 5.2-11.5 11.6S22 40.1 28.3 40.1s11.5-5.2 11.5-11.6-5.1-11.6-11.5-11.6zm0 21.2c-5.3 0-9.5-4.3-9.5-9.6s4.3-9.6 9.5-9.6 9.5 4.3 9.5 9.6-4.2 9.6-9.5 9.6z"
        vectorEffect="non-scaling-stroke"
        fill={color || Colors.CuriousBlue}
      />
    </svg>
  );
};

export const ResourcesIcon = props => {
  const { color, size } = props;
  return (
    <svg viewBox="0 -0.989 48 48" width={size} height={size} {...props}>
      <path
        d="M11.7 37l8-14.2 4.4 5.6 4.5-3.9L32.8 38l6.5-7.5 7.3 7.2 1.4-1.4-8.8-8.8-5.6 6.5-3.5-10.9 2-1.8 5.4 5.3 9.7-20.3-1.8-.9L37 23.1l-4.7-4.7-2.8 2.4-4-12.6-6 10.7-5.3-6.8L2 27.2V0H0v46h46.3v-2H2v-7h9.7zm13.2-23.5l2.9 9-3.5 3.1-3.6-4.6 4.2-7.5zm-10.8 2.1l4.2 5.5L10.5 35H2v-4.6l12.1-14.8z"
        vectorEffect="non-scaling-stroke"
        fill={color || Colors.CuriousBlue}
      />
    </svg>
  );
};

export const HelpIcon = props => {
  const { color, size } = props;
  return (
    <svg viewBox="0 0 52 52" width={size} height={size} {...props}>
      <path
        d="M26 0C11.7 0 0 11.7 0 26s11.7 26 26 26 26-11.7 26-26S40.3 0 26 0zm0 50C12.8 50 2 39.2 2 26S12.8 2 26 2s24 10.8 24 24-10.8 24-24 24zm4.8-35.7c-.7-.7-1.5-1.2-2.4-1.6-.9-.4-2-.6-3.1-.6-1.2 0-2.3.2-3.3.6-1 .4-1.9 1-2.6 1.7l1.8 1.9c.3-.3.6-.5.8-.7l.9-.6c.3-.2.6-.3 1-.4.4-.1.8-.1 1.2-.1.7 0 1.4.1 2 .4.6.2 1.1.6 1.6 1 .4.5.8 1 1 1.7.2.7.4 1.5.4 2.3 0 .7-.1 1.3-.3 1.9-.2.5-.5 1-.8 1.4-.3.4-.7.8-1.2 1.1-.4.3-.9.6-1.3 1-.4.3-.9.7-1.3 1.1-.4.4-.8.8-1.2 1.3-.3.5-.6 1.1-.8 1.8s-.3 1.5-.3 2.5v1.2h2.7v-1.8c0-.5.1-1 .2-1.4.2-.7.6-1.3 1-1.7.4-.5.9-.9 1.5-1.3.5-.4 1.1-.8 1.6-1.2.5-.4 1-.9 1.5-1.5.4-.6.8-1.2 1.1-2 .3-.8.4-1.8.4-3 0-1-.2-1.9-.5-2.8-.5-.8-1-1.6-1.6-2.2zm-5.2 22.3c-.2-.2-.4-.3-.6-.5-.2-.1-.5-.2-.8-.2-.3 0-.5.1-.8.2-.2.1-.4.3-.6.5-.2.2-.3.4-.4.6-.1.2-.1.5-.1.8 0 .3.1.5.2.8.1.2.2.5.4.6.2.2.4.3.6.4.3.2.5.2.8.2.3 0 .5-.1.7-.2.2-.1.4-.3.6-.5.2-.2.3-.4.4-.6.1-.2.1-.5.1-.8 0-.2 0-.5-.1-.7-.1-.2-.2-.4-.4-.6z"
        vectorEffect="non-scaling-stroke"
        fill={color || Colors.CuriousBlue}
      />
    </svg>
  );
};

export const PencilIcon = props => {
  const { color, size } = props;
  return (
    <svg
      viewBox="0 0 50 50"
      width={size}
      height={size}
      fill={color || Colors.CuriousBlue}
      {...props}
    >
      <path d="M9.6 40.4l2.5-9.9L27 15.6l7.4 7.4-14.9 14.9-9.9 2.5zm4.3-8.9l-1.5 6.1 6.1-1.5L31.6 23 27 18.4 13.9 31.5z" />
      <path d="M17.8 37.3c-.6-2.5-2.6-4.5-5.1-5.1l.5-1.9c3.2.8 5.7 3.3 6.5 6.5l-1.9.5z" />
      <path d="M29.298 19.287l1.414 1.414-13.01 13.02-1.414-1.412zM11 39l2.9-.7c-.3-1.1-1.1-1.9-2.2-2.2L11 39zM35 22.4L27.6 15l3-3 .5.1c3.6.5 6.4 3.3 6.9 6.9l.1.5-3.1 2.9zM30.4 15l4.6 4.6.9-.9c-.5-2.3-2.3-4.1-4.6-4.6l-.9.9z" />
    </svg>
  );
};
