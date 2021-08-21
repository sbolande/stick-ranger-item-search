import React from 'react';
import { Table } from './Table';
import { WeaponTableHead, WeaponTableRow } from './WeaponTable';
import { TableHead, TableRow } from './ItemTable';

const descriptionText = (text) => {
  let lines = text.split('\n');
  let lineOne = lines.shift();
  lines = lines.map(line => {
    return <><br />{line}</>;
  });
  return <p><strong>Notes: </strong>{lineOne}{lines}</p>;
};

export const WeaponTableList = (props) => {
  var weapons = require(`../data/weapons/${props.category}.json`);
  var tables = Object.keys(weapons).map(tier => {
    return <div className="weapon_container">
      <h2 id={tier}>{tier.replace(/_/g, ' ')}</h2>
      <Table>
        <WeaponTableHead />
        {weapons[tier].weaponList.map(weapon => {
          return <WeaponTableRow
            imagePath={weapon.imagePath}
            name={weapon.name}
            droppedBy={weapon.droppedBy}
            location={weapon.location}
            type={weapon.type}
            at={props.at}
            agi={props.agi}
            range={props.range}
            mp={props.mp}
            bonusAt={props.bonusAt}
            bpc={weapon.bpc}
            buy={weapon.buy}
            sell={weapon.sell}
            notes={weapon.notes} />
        })}
      </Table>
      <br />
    </div>
  });
  return tables;
};