import { useState } from 'react';

const useFileHandler = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [error, setError] = useState('');

  const changeHandler = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setError('');
    } else {
      setError('Failed to load file');
    }
  };

  return {
    file,
    preview,
    error,
    changeHandler,
  };
};

export default useFileHandler;
