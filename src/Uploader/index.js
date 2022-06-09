/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import UploadInput from './styles/UploadInput';

export default function Uploader({ handleChange, handleClick, imageInputRef }) {
  return (
    <>
      <div>
        <form>
          <UploadInput
            type="file"
            accept="image/*"
            id="file"
            onChange={handleChange}
            ref={imageInputRef}
          />
          <label htmlFor="file">Select file</label>
        </form>
      </div>

      <div>
        <button onClick={handleClick}>Delete Image</button>
      </div>
    </>
  );
}
