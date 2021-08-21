import styled from 'styled-components';
const StyledTableRow = styled.tr`
border-bottom: 1px solid #dddddd;
&:hover {background-color: #f5f5f5;}
`;
const StyledTableHeader = styled.th`
padding-bottom: 2px;
border-bottom: 1px solid #dddddd;
`;
const Table = styled.table`
width: 90%;
margin: 15px;
`;
export { StyledTableRow, StyledTableHeader, Table };