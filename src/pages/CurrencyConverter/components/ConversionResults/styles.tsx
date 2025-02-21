import styled from 'styled-components';

export const CurrencyConversionContainer = styled.div`
  padding: 1.25rem 3.75rem 1.25rem 1.75rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    padding: 0;
    font-size: 12px;
  }
`

export const CurrencyConversionItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  span {
    font-size: 12px;
    line-height: 18px;
  }
`

export const CurrencyName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  img {
    height: 12px;
    width: 12px;
  }
`