# react-preload-background
This package allows you to show a static preload image while image is preloaded and then transitions

## Installation
`npm install react-background-image-loader --save`

## Usage
```javascript
  import React from 'react';
  import BackgroundImage from 'react-background-image-loader';

  export default (props) => {
    const {source, ...otherProps} = props;
    const localImage = '/path/to/local/asset';

    return(
      <BackgroundImage img={source} placeholder={localImage} {...otherProps}>
        {...child components}
      </BackgroundImage>
    );
  }
```