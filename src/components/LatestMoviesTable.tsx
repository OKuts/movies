import { Table, Image } from 'antd';
import { Link } from 'react-router-dom';

import { useLatestMovie } from '../hooks';
import { LatestMovieHeaderWrapper } from './styles';


const tableTitle = () => (
    <LatestMovieHeaderWrapper >
        <span>Последние фильмы</span>
        <span>Фильмы, которые недавно вышли в прокат</span>
    </LatestMovieHeaderWrapper>
);

export const LatestMovies = () => {
    const { data, isFetched } = useLatestMovie();
    const columns = [
        {
            title:     'постер',
            dataIndex: 'poster_path',
            key:       'poster_path',
            width:     '15%',
            // eslint-disable-next-line
            render:    (url: string) => url ? <Image width = { '100%' } src =  { url } /> : 'отсутствует',
        },
        {
            title:     'Название',
            dataIndex: 'title',
            key:       'title',
            width:     '10%',
        },
        {
            title:     'Дата выхода',
            dataIndex: 'release_date',
            key:       'release_date',
            width:     '10%',
            render:    (view: string) => view || 'отсутствует',
        },
        {
            title:     'Доходность',
            dataIndex: 'revenue',
            key:       'revenue',
            width:     '10%',
        },
        {
            title:     'Статус',
            dataIndex: 'status',
            key:       'status',
            width:     '10%',
        },
        {
            title:     'Популярность',
            dataIndex: 'popularity',
            key:       'popularity',
            width:     '10%',
        },
        {
            title:     'Краткое описание',
            dataIndex: 'overview',
            key:       'overview',
            render:    (view: string) => view || 'отсутствует',
        },
        {
            title:     'Детали',
            dataIndex: 'id',
            key:       'id',
            width:     '150px',
            // eslint-disable-next-line
            render:    (id: number) => <Link to = { `/films/${id}` }>Подробнее...</Link>,
        },
    ];

    if (isFetched) {
        return (
            <Table
                bordered
                pagination = { { hideOnSinglePage: true } }
                title = { tableTitle }
                columns = { columns }
                rowKey = 'id'
                dataSource = { [data] } />
        );
    }

    return null;
};
