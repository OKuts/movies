import { Table, Image } from 'antd';

import { ColumnsType } from 'antd/lib/table';
import { IPopularMovieModel } from '../types';

import { usePopularFilms } from '../hooks';
import { Columns } from '../types/MoviesListModel';


export const PopularFilmsTable = () => {
    const query = usePopularFilms(1);

    // Потребовалось указать тип у columns, чтобы TS не ругался на атрибут columns у <Table> ¯\_(ツ)_/¯
    // @see https://github.com/ant-design/ant-design/issues/21869#issuecomment-595116831
    // @see https://ant.design/components/table/#Using-in-TypeScript
    const columns: ColumnsType<IPopularMovieModel> = [
        {
            ...Columns.poster_path,
            width:  '15%',
            align:  'center',
            // eslint-disable-next-line react/display-name
            render: (url: string) => <Image src = { url } />,
        },
        {
            ...Columns.title,
            width: '10%',
            align: 'center',
        },
        {
            ...Columns.popularity,
            width: '10%',
            align: 'center',
        },
        {
            ...Columns.vote_count,
            width: '10%',
            align: 'center',
        },
        {
            ...Columns.vote_average,
            width: '10%',
            align: 'center',
        },
        {
            ...Columns.overview,
            // TODO: check if it's working (width: 'auto')
            width: 'auto',
        },
        {
            ...Columns.details,
            width: '150px%',
            align: 'center',
        },
    ];

    if (query.isFetched) {
        return (<Table
            columns = { columns }
            dataSource = { query.data }
            pagination = { {
                total:           1000,
                showSizeChanger: false,
                showQuickJumper: true,
                showLessItems:   false,
            } }
            bordered
            rowKey = 'id'
            title = { () => <div className = 'ant-table-title'>
                <div className = 'ant-page-header-heading'>
                    <div className = 'ant-page-header-heading-left'>
                        <span className = 'ant-page-header-heading-title'>Популярные фильмы</span>
                    </div>
                </div>
            </div> } />);
    }

    return <>loading</>;
};
