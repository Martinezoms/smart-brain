import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">{'This magic brain will detect faces in your picture. Give it a try'}</p>
      <div className="center">
        <div className="pa4 br3 shadow-5 center form">
          <input type="text" className="f4 pa2 w-70 center" onChange={onInputChange} />
          <button className="grow link br2 dib white bg-light-purple w-30 f4 ph3 pv2" onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
