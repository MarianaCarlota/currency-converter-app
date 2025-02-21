import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  .logo-icon {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  p {
    color: ${(props) => props.theme['gray-400']};
    text-decoration: none;
    font-size: 12px;
  }

  .nav-link {
    text-decoration: none;
  }
`

export const LoginButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    background-color: ${(props) => props.theme['green-400']};
    color: ${(props) => props.theme['white']};
    border: none;
    border-radius: 1rem;
    padding: 0.5rem 2rem;
    font-size: 12px;
    cursor: pointer;
  }

  button:hover {
    background-color: ${(props) => props.theme['green-500']};
  }
`