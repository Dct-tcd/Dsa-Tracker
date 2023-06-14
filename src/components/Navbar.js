import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Status from './Status';

function Navbar({ mode, setMode }) {
  const [hidden1, setHidden1] = useState(false);

  const handleClick = () => {
    mode === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    let timer;

    if (hidden1) {
      timer = setTimeout(() => {
        setHidden1(false);
      }, 4000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [hidden1]);

  return (
    <div>
      <div className="flex justify-between bg-green-600">
        <div className="text-gray-200 font-lg text-left hover:text-gray-200 m-3 h-8">
          <Link className="pl-2 font-large" to="/">
            Dsa tracker
          </Link>
        </div>
        <div
          className="flex align-bottom text-base pr-3"
          onClick={() => {
            setHidden1(!hidden1);
          }}
        >
          <img className="w-8 h-9 cursor-pointer" src="bulb.png" alt="Hot Tip" />
          <div className="text-gray-200 text-right m-2 h-8 cursor-pointer">Hot Tip</div>
        </div>
      </div>
      <Status visible={hidden1} />
    </div>
  );
}

export default Navbar;
