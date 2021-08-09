import styled from 'styled-components';

export const LatestMovieHeaderWrapper = styled.div`
    & span:nth-child(1) {
        margin-right: 12px;
        margin-bottom: 0;
        overflow: hidden;
        font-size: 20px;
        font-weight: 600;
        line-height: 32px;
        color: rgba(0, 0, 0, 0.85);
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    & span:nth-child(2) {
        margin-right: 12px;
        overflow: hidden;
        font-size: 14px;
        line-height: 1.5715;
        color: rgba(0, 0, 0, 0.45);
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;
