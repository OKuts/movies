// Core
import { useState } from 'react';
import { Tabs } from 'antd';
import { useParams } from 'react-router-dom';

// Hooks
import { useFilmImages } from '../hooks';

// Component
import { FilmImage } from './FilmImage';

const { TabPane } = Tabs;

const TABS_DATA = [
    { title: 'Обложки', key: 'backdrops' },
    { title: 'Постеры', key: 'posters' },
    { title: 'Логотипы', key: 'logos' },
];

export const FilmImages = () => {
    const { id } = useParams();
    const [, setTab] = useState('');
    const { data, isLoading } = useFilmImages(id);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (!data) {
        return null;
    }

    const callback = (key: string) => {
        setTab(key);
    };

    const tabsJSX = TABS_DATA.map(({ title, key }) => {
        return (
            <TabPane tab = { title } key = { key }>
                <FilmImage data = { data.data[ key ] } alt = { data.data[ key ] } />
            </TabPane>
        );
    });

    return (
        <Tabs
            defaultActiveKey = '1'
            type = 'card'
            onChange = { callback }>
            { tabsJSX }
        </Tabs>
    );
};
