import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  margin-top: auto;
  border-top: 0.3px solid ${(props) => props.theme['gray-400']};
  padding: 2.5rem 0 0;
`

export const TopFooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  img {
    width: 4.5rem;
  }
`

export const ListOfLinksContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5rem;
`

export const ListOfLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    padding-bottom: 1rem;
    font-size: 12px;
    color: ${(props) => props.theme['gray-900']};
  }

  ul {
    list-style-type: none;
    li {
      font-size: 10px;
      line-height: 20px;
      color: ${(props) => props.theme['gray-900']};
    }
  }
`

export const StoreIconLinks = styled.div`
  div {
    display: flex;
    align-items: flex-end;
    gap: 1.25rem;

    img {
      height: auto;
      width: 1.5rem;
      opacity: 60%;
    }
  }
`

export const FooterBottom = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;

  img {
    height: 2.5rem;
    opacity: 60%;
  }

  p {
    color: ${(props) => props.theme['gray-400']};
    font-size: 10px;
    line-height: 20px;
  }
`

export const BottomLinks = styled.div`
  display: flex;
  gap: 1rem;

  .nav-link {
    text-decoration: none;
  }
`