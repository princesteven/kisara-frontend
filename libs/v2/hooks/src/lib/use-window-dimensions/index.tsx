import { useState, useEffect } from 'react';

/**
 * @function
 * @name getWindowDimensions
 * @description get window dimensions { width and height }
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns {object} window dimensions
 */
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({width: 100, height: 100});

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}