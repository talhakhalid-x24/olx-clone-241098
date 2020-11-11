import React, {useState} from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './scrollArrow.css';

const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
      <button className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}>
        <KeyboardArrowUpIcon /><span>Back to top</span>
      </button>
  );
}

export default ScrollArrow;