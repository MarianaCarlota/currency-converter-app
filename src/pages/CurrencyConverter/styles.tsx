import styled from 'styled-components';

export const CurrencyConverterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const FormContainer = styled.div`
  display: flex;
  width: 22rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3.5rem 0 1.5rem;

  h2 {
    max-width: 22rem;
    color: ${(props) => props.theme['gray-900']};
  }

  p {
    padding: 1rem 0;
    color: ${(props) => props.theme['gray-400']};
    text-align: center;
    line-height: 24px;
    font-size: 14px;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme['gray-50']};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  height: 3rem;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const AmountInput = styled.input`
  border: none;
  background-color: transparent;
  font-size: 1.25rem;

  &:focus {
    outline: none;
  }
`

export const CurrencyButton = styled.div`
  button {
    background-color: ${(props) => props.theme['white']};
    border-radius: 1rem;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  img {
    height: 12px;
    width: 12px;
  }

  span {
    font-size: 12px;
  }
`

export const CurrencyOptionsDropdown =  styled.div`
  margin: 0.25rem 0;
  position: absolute;
  width: 6rem;
  max-height: 8rem;
  background-color: ${(props) => props.theme['white']};
  box-shadow: 1px 4px 10px 1px lightgray;
  border-radius: 0.5rem;
  overflow: auto;
`

export const Currency = styled.div`
  button {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 1rem;
    
    img {
      height: 12px;
      width: 12px;
    }
  }
`

