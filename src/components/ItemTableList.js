import React from 'react';
import { Table } from './Table';
import { TableHead, TableRow } from './ItemTable';

const descriptionText = (text) => {
  let lines = text.split('\n');
  let lineOne = lines.shift();
  lines = lines.map(line => {
    return <><br />{line}</>;
  });
  return <p><strong>Notes: </strong>{lineOne}{lines}</p>;
};

export const ItemTableList = (props) => {
  var items = require(`../data/items/${props.category}.json`);
  var tables = Object.keys(items).map(type => {
    return <div className="item_container">
      <h2 id={type}>{type.replace(/_/g, ' ')}</h2>
      <Table>
        <TableHead />
        {items[type].itemList.map(item => {
          return <TableRow
            name={item.name}
            effect={item.effect}
            droppedBy={item.droppedBy}
            location={item.location}
            purchase={item.purchase}
            profit={item.profit} />
        })}
      </Table>
      <p><strong>Restrictions: </strong>{items[type].restrictions}</p>
      {items[type].description !== "N/A" && descriptionText(items[type].description)}
      <br />
    </div>
  });
  return tables;
};