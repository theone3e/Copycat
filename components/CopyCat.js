import React from 'react';
import {styles} from '../styles';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {
  render() {
    const {copying, toggleTape, value, handleChange, name} = this.props;

    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: '80px'}} >Copy Cat {name || "Tom"} </h1>
        <input 
        type='text'
        value={value}
        onChange={handleChange} 
        />
        <img 
          style={styles.imgStyles}
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
        <p> {copying ? value : !value} </p>
      </div>
    );
  };
}

CopyCat.propTypes = {
  coyping: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  hadnleChange: PropTypes.func.isRequired,
  name: PropTypes.string
}