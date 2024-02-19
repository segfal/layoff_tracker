import Typed from 'typed.js'
import React, {useEffect, useRef} from 'react'

const TypingEffect = ({ strings }) => {
    const el = useRef(null);
    const typed = useRef(null);
  
    useEffect(() => {
      const options = {
        strings,
        typeSpeed: 50,
        backSpeed: 50,
        loop: false,
      };
  
      typed.current = new Typed(el.current, options);
  
      return () => {
        typed.current.destroy();
      };
    }, [strings]);
  
    return <span ref={el} />;
  };
  
  export default TypingEffect;