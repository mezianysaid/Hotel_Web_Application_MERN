import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contactus.module.css';
import { TextareaAutosize } from '@mui/base';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Contactus = () => (
  <div className={styles.Contactus}>
    <div className='card m-10 bg-white rounded'>
      <p className='font-bold text-gray-800 text-center'> Contact Us </p>
      <div className='border-t  border-gray-200'>
      
      <div className='grid grid-cols-1 m-8 mb-6 pb-5 space-x-10 sm:grid-cols-3'>
        
      
      <div className='grid col-span-2 '>
    
        <TextField
        className=''
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={2}
          placeholder="Type something here ......"
        />
       </div>
       <div className='col-span-1 py-5'>
       <button class="bg-cyan-700 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center" >
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>


      <span>Send</span>
    </button>
       </div>
       </div>
       
      </div>
    </div>
  </div>
);

Contactus.propTypes = {};

Contactus.defaultProps = {};

export default Contactus;
