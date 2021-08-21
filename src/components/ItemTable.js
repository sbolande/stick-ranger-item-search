import React from 'react';
import { StyledTableRow, StyledTableHeader } from './Table';

const getLink = (path, val, specifier = null) => {
  if (val === '-') {
    return <p>{val.replace(/_/g, ' ')}</p>
  } else if (val.includes(',') && specifier !== null) {
    let vals = val.split(',');
    let specs = specifier.split(',');
    return vals.map((e, i) => <><a href={`${path}#${e}_${specs[i]}`}>{e.replace(/_/g, ' ')}</a><br /></>);
  } else if (val.includes(',')) {
    return val.split(',').map(e => <><a href={`${path}#${e}`}>{e.replace(/_/g, ' ')}</a><br /></>);
  } else {
    let hrefstring = `${path}#${val}${specifier === null ? "" : `_${specifier}`}`;
    return <a href={hrefstring}>{val.replace(/_/g, ' ')}</a>;
  }
};

// Begin exports
const TableHead = () => (
  <thead>
    <StyledTableHeader>Name</StyledTableHeader>
    <StyledTableHeader>Effect</StyledTableHeader>
    <StyledTableHeader>Dropped By</StyledTableHeader>
    <StyledTableHeader>Location</StyledTableHeader>
    <StyledTableHeader>Purchase</StyledTableHeader>
    <StyledTableHeader>Profit</StyledTableHeader>
  </thead>
);

const TableRow = (props) => (
    <StyledTableRow>
        <td class="name">{props.name}</td>
        <td class="effect">{props.effect}</td>
        <td class="dropped_by">{getLink("enemies", props.droppedBy, props.location)}</td>
        <td class="location">{getLink("locations", props.location)}</td>
        <td class="purchase">{props.purchase}</td>
        <td class="profit">{props.profit}</td>
    </StyledTableRow>
);

export { TableHead, TableRow };