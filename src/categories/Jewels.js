import React from 'react';
import { Table, TableHead, TableRow } from '../components/ItemTable';

const JewelRows = () => {
  var jewels = JSON.parse(require('../data/jewels.json'));
  var rows = jewels.map(j => {
    return <TableRow name={j.name}
    effect={j.effect}
    droppedBy={j.droppedBy}
    purchase={j.purchase}
    profit={j.profit} />
  }).concat();
  return rows;
};

export const Jewels = () => (
  <Table>
    <TableHead />
    <JewelRows />
  </Table>
)