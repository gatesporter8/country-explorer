import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 80%; 
  margin: 20px auto;
  table-layout: fixed;
  border-collapse: collapse;
`;

// width sets it to be 80% the width of its parent container
// margin 20px auto sets it to be 20px on the top, and center the left and right margin horizontally in the div
// table-layout - fixed value means that the column widths are set by the widths of the table and the cells of the first row.
// border-collapse - property sets whether the table borders are collapsed into a single border or detached as in standard HTML.

export const StyledTd = styled.td`
  padding: 10px;
  border: 1px solid black;
  border-right: 1px solid black;
`;

// The padding property in CSS is used to generate space around an element's content, inside of any defined borders.

export const StyledTh = styled.th`
  padding: 10px;
  border: 1px solid black;
  border-right: none;
  background-color: #f2f2f2;
`;

export const StyledTableImg = styled.img`
	width: 100px;
	height: auto;
	object-fit: contain;
`;