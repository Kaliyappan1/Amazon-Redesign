import React from 'react';

const Toast = ({ message }) => {
  return (
    <div className="fixed bottom-20 right-20 bg-gray-800 text-white py-2 px-4 rounded-md shadow-lg">
      {message}
    </div>
  );
};

export default Toast;
