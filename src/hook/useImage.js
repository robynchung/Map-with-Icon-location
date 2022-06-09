import React from 'react';

export default function useImage() {
  const [image, setImage] = React.useState(null);
  const imageInputRef = React.useRef();

  const handleChange = event => {
    if (window.FileReader) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function (loadEv) {
        localStorage.setItem('file', loadEv.target.result);

        setImage(localStorage.getItem('file'));
      };

      reader.onerror = function () {
        console.log(reader.error);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    setImage(null);

    localStorage.setItem('file', '');
    imageInputRef.current.value = '';
  };

  React.useEffect(() => {
    const file = localStorage.getItem('file');

    if (file) {
      setImage(file);
    }
  }, []);

  return { handleChange, handleClick, image, imageInputRef };
}
