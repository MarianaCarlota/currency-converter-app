import styled from 'styled-components';

export const PageNotAvailableContainer = styled.div`
  width: 100%;
  margin-top: 5rem;
  h1 {
    line-height: 3.5rem;
    span {
      color: ${(props) => props.theme['green-400']};
      font-weight: bold;
    }

    span:hover {
      color: ${(props) => props.theme['green-500']};
    }
  }

  .nav-link {
    text-decoration: none;
  }
`