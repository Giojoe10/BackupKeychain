import React from 'react';
import BackupCard from 'renderer/Components/BackupCard';

import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const adapter = new JSONFile('../../assets/db.json');
const defaultData = { backups: [] };
const db = new Low(adapter, defaultData)
// https://github.com/typicode/lowdb

function Gallery() {
  const { gamelist } = require('../../assets/gamelist.json');
  return (
    <div className="bg-background p-10 gap-5 grid grid-cols-4 justify-center items-center min-h-screen">
      {gamelist.map((game, index) => (
        <BackupCard
          title={game.title}
          path={game.path}
          image={game.image}
          index={index}
        />
      ))}
    </div>
  );
}

export default Gallery;
