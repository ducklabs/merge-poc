## Creating components

Each component needs 2 files
`src/components/ComponentName/ComponentName.js` and `src/components/BorderButton/presets/0-default.jsx`


When we were setting up the components we weren't sure which items you want as props. In UserAttendeeComponent and AspectElevationRoseInput all the data is being shown as a JSON format, however this could be changed to props to make it easier to make changes to the components.

## Example

### BorderButton

This button doesn't have any props, but the label is setup using props.children


```
//src/components/BorderButton/BorderButton.js

import React from "react";
import PropTypes from "prop-types";
import { BorderButton as BorderButtonM } from '../_shared/ButtonComponents.jsx'
import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";

export default function BorderButton(props) {
  return (
    <BorderButtonM {...props}>
      {props.children}
    </BorderButtonM>
  );
}

// prop types can be set here for example
// disabled: PropTypes.bool
BorderButton.propTypes = {
  /**
  * @uxpinpropname Label
  */
  children: PropTypes.string,
};
```


```
src/components/BorderButton/presets/0-default.jsx

import React from "react";
import BorderButton from "../BorderButton";
import { Colors } from "../../../constants/colors";

// setting the label for the button
export default (
  <BorderButton
    uxpId="BorderButton">
  Border button
  </BorderButton>
);

```

## Config file

After each component is created it needs to be added to the `uxpin.config.js` file. This will import the component into react.
```
module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/BorderButton/BorderButton.js',
          'src/components/UserAttendeeComponent/UserAttendeeComponent.js',
          'src/components/AspectElevationRoseInput/AspectElevationRoseInput.js'
        ]
      }
    ],
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Duck Labs'
};
```

## Pushing to UXPin

### 1. Create the library within the UXPin UI

    • Go to your UXPin account
    • Enter the UXPin Editor
    • Create a new library
    • Select the option import React components
    • Copy the Auth token (don't share it with anyone and do not place it in any files checked into git repository. This token provides direct access to the library on your account.)

### 2. Push the library via the uxpin-merge CLI

`./node_modules/@uxpin/merge-cli/bin/uxpin-merge push --token YOUR_AUTH_TOKEN`



## Run experimental mode
`./node_modules/@uxpin/merge-cli/bin/uxpin-merge --disable-tunneling`


