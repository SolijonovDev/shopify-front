import { useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';
import styles from './canvas.module.scss';

export const Canvas = ({ src }) => {
  const myCanvas = useRef();

  useEffect(() => {
    const { offsetWidth, offsetHeight } = myCanvas.current;
    const context = myCanvas.current.getContext('2d');
    const image = new Image();
    image.src = src;
    image.onload = () => {
      context.drawImage(image, 0, 0, offsetWidth, offsetHeight);
    };
  });

  return <canvas className={styles.canvas} ref={myCanvas} />;
};

Canvas.propTypes = {
  src: PropTypes.string,
};
