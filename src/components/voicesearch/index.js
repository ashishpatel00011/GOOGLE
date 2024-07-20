import React from 'react';
import './index.css';

const VoiceSearchBox = () => {
  return (
    <div className="container-fluid d-flex align-items-center
     justify-content-center  voicemodel">
      <div className='col-md-4  bg-light voice search'>
      <div className='border-bottom w-100 d-flex align-items-center
       justify-content-between py-2 '> 
       <h3>voice search</h3>
       <i className='fa fa-times btn btn-sm'></i>
    </div>
    </div> 
    </div>
  );
};

export default VoiceSearchBox;

// // { voiceText, clearVoiceSearch }
// <div className='col-md-4 bg-light voice-search'>
// <div className='border-bottom w-100 d-flex align-items-center
// justify-content-between py-2 '>
// <h3>voice search</h3>
// <i className='fa fa-times btn btn-sm'></i>    
// </div>   
// <div className='w-100 d-flex align-items-center
// justify-content-center py-2'>
// <div className='col-md-2 micicon bg-denger text white'>

// </div>
// </div>
// </div>