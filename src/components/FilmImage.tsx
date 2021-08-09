// Core
import { FC } from 'react';
import {
    Card, Image, Col, Row,
} from 'antd';

// Types
import { IImage } from '../types';

const { Meta } = Card;

type IProps = {
    data: IImage[];
    alt: string;
};

export const FilmImage: FC<IProps> = ({ data, alt }) => {
    const cardJSX = data.map(({
        id, file_path, vote_average, vote_count,
    }) => {
        return (
            <Col key = { id } span = { 8 }>
                <Card>
                    <Card.Grid style = { { width: '100%' } }>
                        <Image alt = { alt } src = { file_path } />
                        <Meta
                            title = { `Средняя оценка изображения: ${vote_average}` }
                            description = { `Количество голосов: ${vote_count}` } />
                    </Card.Grid>
                </Card>
            </Col>
        );
    });

    return (
        <Row gutter = { 16 }>
            { cardJSX }
        </Row>
    );
};
