export const sizeTypContents = {
  title: "Size Type",
  nRows: 5,
  nCols: 5,
  headers: [
    "Destructive Size",
    "Avalanche Destructive Potential",
    "Typical Mass",
    "Typical Impact Pressure",
    "Typical Path Length",
  ],
  rows: [
    [
      // Row for Size 1
      { contents: "<span><strong>1</strong></span>", isTH: true },
      { contents: "<span>Relatively harmless to people</span>", isTH: false },
      { contents: "<span>&#60; 10t</span>", isTH: false },
      { contents: "<span>1 kPa</span>", isTH: false },
      { contents: "<span>10m</span>", isTH: false },
    ],

    [
      // Row for Size 2
      { contents: "<span><strong>2</strong></span>", isTH: true },
      {
        contents: "<span>Could bury, injure or kill a person</span>",
        isTH: false,
      },
      { contents: "<span>10<sup>2</sup>t</span>", isTH: false },
      { contents: "<span>10 kPa</span>", isTH: false },
      { contents: "<span>100m</span>", isTH: false },
    ],

    [
      // Row for Size 3
      { contents: "<span><strong>3</strong></span>", isTH: true },
      {
        contents:
          "<span>Could bury and destroy a car, damage a truck, destroy a wood frame house or break a few trees",
        isTH: false,
      },
      { contents: "<span>10<sup>3</sup>t</span>", isTH: false },
      { contents: "<span>100kPa</span>", isTH: false },
      { contents: "<span>1,000m</span>", isTH: false },
    ],

    [
      // Row for Size 4
      { contents: "<span><strong>4</strong></span>", isTH: true },
      {
        contents:
          "<span>Could bury and destroy a railway car, large truck, buildings or a forest area of approx. 4 ha.",
        isTH: false,
      },
      { contents: "<span>10<sup>4</sup>t</span>", isTH: false },
      { contents: "<span>500kPa</span>", isTH: false },
      { contents: "<span>2,000m</span>", isTH: false },
    ],

    [
      // Row for Size 5
      { contents: "<span><strong>5</span></strong>", isTH: true },
      {
        contents:
          "<span>Largest snow avalanche known. Could destroy a village or a forestarea of approx. 40 ha.",
        isTH: false,
      },
      { contents: "<span>10<sup>5</sup>t</span>", isTH: false },
      { contents: "<span>1,000kPa</span>", isTH: false },
      { contents: "<span>3,000m</span>", isTH: false },
    ],
  ],
};
