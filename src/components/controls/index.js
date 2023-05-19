import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Controls({onAdd, title, closeModal = null}){
  return (
    <div className='Controls'>
      {/* <button onClick={() => onAdd()}>{title}</button> */}
      {closeModal ? <button onClick={() => closeModal()}>{title}</button> :  <button onClick={() => onAdd()}>{title}</button> }
    </div>
  )
}

Controls.propTypes = {
  onAdd: PropTypes.func,
  closeModal: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => {}

}

export default React.memo(Controls);
