import { FC } from 'react';
import { Table, TableProps } from 'antd';
import { TableWrap } from './styles';

export const MoviesList:FC<TableProps<never>> = (props) => {
    return (<TableWrap><Table
        { ...props  }
        rowKey = 'id'
        bordered />
    </TableWrap>);
};
