// Core
import { FC, useEffect, useState } from 'react';
import {
    Routes, Route, Outlet, Navigate,
} from 'react-router-dom';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { observer } from 'mobx-react-lite';

// Components
import {
    LatestFilm,
    PopularFilms,
    TopRatedFilms,
    FilmPage,
    FilmImagesPage,
    TrendingFilmsPage,
} from './pages';
import { HeaderWrapper, Footer } from './components';
import { MainWrapper, SectionWrapper } from './components/styles';

// Other
import { useStore } from './hooks';
import ScrollToTopButton from './components/ScrollToTopButton';


export const App: FC = observer(() => {
    const { uiStore } = useStore();
    const { errorMessage, resetError } = uiStore;
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        if (errorMessage) {
            const notify = () => toast.error(errorMessage, {
                position:        'top-right',
                autoClose:       7000,
                hideProgressBar: false,
                closeOnClick:    true,
                pauseOnHover:    true,
                draggable:       true,
                progress:        undefined,
            });
            notify();

            resetError();
        }
    }, [errorMessage]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 400) {
                setShowButton(true);
            } else if (window.scrollY <= 375) {
                setShowButton(false);
            }
        });
    }, []);

    return (
        <>
            <ToastContainer newestOnTop transition = { Slide } />

            <SectionWrapper className = 'ant-layout'>
                <HeaderWrapper />
                <MainWrapper className = 'ant-layout-content' >
                    <Routes>
                        <Route path = '/' element = { <Outlet /> }>
                            <Route path = '/' element = { <TrendingFilmsPage /> } />
                            <Route path = '/popular-films' element = { <PopularFilms /> } />
                            <Route path = '/latest-films' element = { <LatestFilm /> } />
                            <Route path = '/films' element = { <Outlet key = 'Outlet' /> } >
                                <Route path = '/:id' element = { <FilmPage /> } />
                                <Route path = '/:id/images' element = { <FilmImagesPage /> } />
                                <Route path = '/' element = { <Navigate to = '/top-rated-films' /> } />
                            </Route>
                            <Route path = '/top-rated-films' element = { <TopRatedFilms /> } />
                        </Route>
                        <Route path = '*' element = { <Navigate to = '/' /> } />
                    </Routes>
                    { showButton && <ScrollToTopButton setShowButton = { setShowButton } /> }
                </MainWrapper>
                <Footer />
            </SectionWrapper>
        </>
    );
});
