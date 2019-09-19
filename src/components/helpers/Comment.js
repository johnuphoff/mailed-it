import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  const el = useRef();

  useEffect( () => {
    el.current.outerHTML = `<!-- ${props.text} -->`;
  }, [props] );
  return (
    <div ref={el}/>
  );
};

Comment.propTypes = {
  text: PropTypes.string.isRequired
}

export default Comment;
