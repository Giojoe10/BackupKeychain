import React from 'react';

function Header() {
  return (
    <div className="bg-background2 text-2xl font-bold flex justify-center items-center h-12 drop-shadow-sm border-b">
      <a href="/">
        <h1 className="text-white font-bold">Backup Manager</h1>
      </a>
    </div>
  );
}

export default Header;
