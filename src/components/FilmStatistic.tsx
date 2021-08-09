/* eslint-disable node/no-extraneous-import */
/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';
import {
    Statistic, Card, Row, Col,
} from 'antd';
import { TrophyOutlined, DollarCircleOutlined } from '@ant-design/icons';

interface IFilmStatisticProp {
    popularity: number;
    budget: number;
    revenue: number;
}

export const FilmStatistic:FC<IFilmStatisticProp> = ({ popularity, budget, revenue }) => {
    return (
        <Row gutter = { 16 } justify = 'center'>
            <Col span = { 8 }>
                <Card>
                    <Statistic
                        title = 'Popularity'
                        value = { popularity }
                        precision = { 2 }
                        valueStyle = { { color: '#3f7ce1', display: 'flex'  } }
                        prefix = { <TrophyOutlined   /> } />

                </Card>
            </Col>
            <Col span = { 8 }>
                <Card>
                    <Statistic
                        title = 'Budget'
                        value = { budget }
                        precision = { 2 }
                        valueStyle = { { color: '#28d7b5' } }
                        prefix = { <DollarCircleOutlined /> } />
                </Card>
            </Col>
            <Col span = { 8 }>
                <Card>
                    <Statistic
                        title = 'Revenue'
                        value = { revenue }
                        precision = { 2 }
                        valueStyle = { { color: '#10c1bc' } }
                        prefix = { <DollarCircleOutlined /> } />
                </Card>
            </Col>
        </Row>
    );
};
