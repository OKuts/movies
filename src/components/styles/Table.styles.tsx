import styled from 'styled-components';

export const TableWrap = styled.section`
  .ant-table-cell {
    padding: 8px 8px;
  }

  .ant-table-cell.popularity ,
  .ant-table-cell.vote_count ,
  .ant-table-cell.vote_average ,
  .ant-table-cell.vote_average_as_stars ,
  .ant-table-cell.release_date {
    white-space: nowrap;
  }
  .ant-table-cell.details {
    white-space: nowrap;
    overflow:     hidden;
    text-overflow: ellipsis;
  } 
`;
