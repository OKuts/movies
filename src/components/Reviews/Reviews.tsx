import React, { FC } from 'react';
import {
    Comment,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { useReviews } from '../../hooks/useReviews';

export const Reviews: FC = () => {
    const { id: filmId } = useParams();
    const { data: listReviews, isFetched } = useReviews(filmId);

    const renderJSX = listReviews?.data?.map((item) => (
        <li key = { item.id }>
            <Comment
                author = { item.author }
                avatar = { <UserOutlined /> }
                content = { item.content } />
        </li>
    ));

    return (
        <section>
            <h2>Отзывы</h2>
            { !listReviews && isFetched ? 'Отзывов нет' : renderJSX }
        </section>
    );
};
