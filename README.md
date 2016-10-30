# react-preload-background
This package allows you to show a static preload image while image is preloaded and then transitions

## Installation
`npm install react-preload-background --save`

## Usage
```javascript
  import React from 'react';
  import PreloadBackground from 'react-preload-background';

  export default (props) => {
    const {source, ...otherProps} = props;
    const localImage = '/path/to/local/asset';

    return(
      <PreloadBackground img={source} placeholder={localImage} {...otherProps}>
        <someOtherReactComponent />
      </PreloadBackground>
    );
  }
```

## Props
prop        | type   | notes
------------|--------|-----------------------------------------
img         | string | Remote image to be loaded
placeholder | string | Local image to be immediately displayed

## License

MIT License