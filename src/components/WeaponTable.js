import React from 'react';
import styled from 'styled-components';
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
const WeaponTableHead = () => (
  <thead>
    <StyledTableHeader>Icon</StyledTableHeader>
    <StyledTableHeader>Name</StyledTableHeader>
    <StyledTableHeader>Dropped By</StyledTableHeader>
    <StyledTableHeader>Type</StyledTableHeader>
    <StyledTableHeader>AT</StyledTableHeader>
    <StyledTableHeader>AGI</StyledTableHeader>
    <StyledTableHeader>Range</StyledTableHeader>
    <StyledTableHeader className="hidden">MP</StyledTableHeader>
    <StyledTableHeader className="hidden">Bonus AT</StyledTableHeader>
    <StyledTableHeader className="hidden">Bonus Bullets</StyledTableHeader>
    <StyledTableHeader className="hidden">Buy</StyledTableHeader>
    <StyledTableHeader className="hidden">Sell</StyledTableHeader>
  </thead>
);

const WeaponTableRow = (props) => {
    const expand = (hidden) => {
        // document.getElementsByClassName(hidden)
        //     .foreach(e => {
        //       e.style.display = e.style.display === "block" ? "none" : "block";
        //     });
    };
    // return <div className="expando_table" onMouseOver={expand(`hidden`)}>
    return<>
        <StyledTableRow>
            <td className="icon" rowSpan="2" colSpan="1">{props.imagePath}</td>
            <td className="name" rowSpan="2" colSpan="1">{props.name}</td>
            <td className="dropped_by" colSpan="1">{getLink("enemies", props.droppedBy, props.location)}</td>
            <td className="type" colSpan="1">{props.type}</td>
            <td className="at" colSpan="1">{props.at}</td>
            <td className="agi" colSpan="1">{props.agi}</td>
            <td className="range" colSpan="1">{props.range}</td>
        {/* </StyledTableRow>
        <StyledTableRow className={`${props.name},hidden`}> */}
            <td className="mP" colSpan="1">{props.mp}</td>
            <td className="bonusAt" colSpan="1">{props.bonusAt}</td>
            <td className="bpc" colSpan="1">{props.bpc}</td>
            <td className="buy" colSpan="1">{props.buy}</td>
            <td className="sell" colSpan="1">{props.sell}</td>
        </StyledTableRow>
        <StyledTableRow className={`${props.name},hidden`}>
            <td className="notes" colSpan="11"><strong>Notes: </strong>{props.notes}</td>
        </StyledTableRow>
    </>
};

export { WeaponTableHead, WeaponTableRow };