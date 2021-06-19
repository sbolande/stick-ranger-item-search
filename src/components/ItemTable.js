import React from 'react';
import styled from 'styled-components';
const StyledTableRow = styled.tr`&:hover {background-color: #f5f5f5;}`;
const StyledTableHeader = styled.th`
padding: 15px;
text-align: center;
border-bottom: 1px solid #dddddd;
`;

// Begin exports
const Table = styled.table`
width: 90%;
margin: 15px;
`;

const TableHead = () => (
  <thead>
    <StyledTableHeader>Name</StyledTableHeader>
    <StyledTableHeader>Effect</StyledTableHeader>
    <StyledTableHeader>Dropped By</StyledTableHeader>
    <StyledTableHeader>Purchase</StyledTableHeader>
    <StyledTableHeader>Profit</StyledTableHeader>
  </thead>
);

const TableRow = (props) => (
    <StyledTableRow>
        <td class="name">{props.name}</td>
        <td class="effect">{props.effect}</td>
        <td class="dropped_by">{props.droppedBy}</td>
        <td class="purchase">{props.purchase}</td>
        <td class="profit">{props.profit}</td>
    </StyledTableRow>
);

export { Table, TableHead, TableRow };