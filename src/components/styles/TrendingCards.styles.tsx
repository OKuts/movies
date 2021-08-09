import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardLink = styled(Link)`
    width: calc(20% - 20px);
    margin: 0 10px 20px;

    &>div {
      height: 100%;
    }

    @media(max-width: 970px) {
      width: calc(25% - 20px);
    }
    
    @media(max-width: 768px) {
      width: calc(33.33% - 20px);
    }

    @media(max-width: 640px) {
      width: calc(50% - 20px);
    }

    @media(max-width: 520px) {
      width: 100%;
    }
`;
