import { useState } from 'react';
import { Table } from 'antd';


import { useTopRatedFilms } from '../hooks/useTopRatedFilms';
import { Columns } from '../types/MoviesListModel';

export const TopRatedFilmsTable = () => {
    const [page, setPage] = useState(1);
    // const [loading, setLoading] = useState(false);
    const query = useTopRatedFilms(page);

    const onChange = (newPage: number) => {
        setPage(newPage);
        // setLoading(true);
    };

    const columns = [
        Columns.poster_path,
        Columns.title,
        Columns.release_date,
        Columns.vote_count,
        Columns.vote_average,
        Columns.genres,
        Columns.overview,
        Columns.details,
    ];

    if (query.isFetched) {
        return <Table
            rowKey = 'id'
            columns = { columns }
            dataSource = { query.data }
            pagination = { {
                onChange, total: 2000, showSizeChanger: false, pageSize: 20, current: page,
            } } />;
    }

    return <>loading</>;
};
