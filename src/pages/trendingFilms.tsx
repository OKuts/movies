import { FC } from 'react';
import { Tabs, Typography } from 'antd';
import { TrendingCards } from '../components';

export const TrendingFilmsPage:FC = () => {
    const { Title } = Typography;
    const { TabPane } = Tabs;

    return (
        <>
            <Title>Трендовые фильмы</Title>
            <Tabs defaultActiveKey = 'day' centered>
                <TabPane
                    tab = 'За сегодня'
                    key = 'day'>
                    <TrendingCards time = 'day' />
                </TabPane>
                <TabPane
                    tab = 'За неделю'
                    key = 'week'>
                    <TrendingCards time = 'week' />
                </TabPane>
            </Tabs>
        </>
    );
};
