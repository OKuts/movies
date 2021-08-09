import { Image, Rate } from 'antd';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const getStars = (vote:number):number => {
    const voteOrg = vote / 2.0;

    return Math.round(2 * voteOrg) / 2;
};

export const Columns = {
    poster_path: {
        title:     'Постер',
        dataIndex: 'poster_path',
        key:       'poster_path',
        clasName:  'poster_path',

        render(text: string) {
            return <Image width = { 200 } src = { text } />;
        },
    },
    title: {
        title:     'Название',
        dataIndex: 'title',
        key:       'title',
        clasName:  'title',
    },

    popularity: {
        title:     'Популярность',
        dataIndex: 'popularity',
        key:       'popularity',
        clasName:  'popularity',
    },
    vote_count: {
        title:     'Количество голосов',
        dataIndex: 'vote_count',
        key:       'vote_count',
        clasName:  'vote_count',
    },

    vote_average: {
        title:     'Средняя оценка',
        dataIndex: 'vote_average',
        key:       'vote_average',
        clasName:  'vote_average',
    },
    vote_average_as_stars: {
        title:    'Популярность',
        key:      'vote_average_as_stars',
        clasName: 'vote_average_as_stars',
        render(record: { vote_average: number }) {
            return <Rate
                disabled
                allowHalf
                value = { getStars(record.vote_average) } />;
        },
    },
    genres: {
        title:     'Жанры',
        dataIndex: 'genres',
        key:       'genres',
        className: 'genres',
        render(genres: string[]) {
            return genres.map((el) => <p key = { el }>{ el }</p>);
        },
    },
    overview: {
        title:     'Краткое описание',
        width:     '20%',
        dataIndex: 'overview',
        key:       'overview',
        clasName:  'overview',
    },
    details: {
        title:     'Детали',
        dataIndex: 'id',
        key:       'details',
        clasName:  'details',
        render(id: number) { return <Link to = { `/films/${id}` }>Подробнее...</Link>; },
    },
    release_date: {
        title:     'Дата выхода',
        dataIndex: 'release_date',
        key:       'release_date',
        className: 'release_date',
        render(date: string) {
            return format(new Date(date), 'dd.MM.yyyy');
        },
    },

};
