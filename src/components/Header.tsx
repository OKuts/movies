import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';

import { useCurrentPath } from '../hooks';

const { Header } = Layout;


export const HeaderWrapper = () => {
    const key = useCurrentPath();

    return (
        <Header className = 'styles_header'>
            <p className = 'styles_logo'>Movie App</p>
            <Menu
                theme = 'dark' mode = 'horizontal'
                defaultSelectedKeys = { [key] }>
                <Menu.Item key = '/'><Link to = '/'>Главная</Link></Menu.Item>
                <Menu.Item key = '/films'><Link to = '/films'>Фильмы</Link></Menu.Item>
                <Menu.Item key = '/popular-films'><Link to = '/popular-films'>Популярные фильмы</Link></Menu.Item>
                <Menu.Item key = '/top-rated-films'><Link to = '/top-rated-films'>Трендовые фильмы</Link></Menu.Item>
                <Menu.Item key = '/latest-films'><Link to = '/latest-films'>Последние вышедшие фильмы</Link></Menu.Item>
            </Menu>
        </Header>
    );
};
