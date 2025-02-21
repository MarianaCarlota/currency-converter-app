import smallLogo from "/assets/small-logo.svg";
import { HeaderContainer, LinksContainer, LoginButtonContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function Header() {

  const handleGoToLoginPage = () => {
    window.location.href = "https://wallet.uphold.com/login";
  };

  return (
    <HeaderContainer>
      <LinksContainer>
        <NavLink to="/page-not-found" title="personal" className="nav-link">
          <p>Personal</p>
        </NavLink>
        <NavLink to="/page-not-found" title="business" className="nav-link">
          <p>Business</p>
        </NavLink>
        <NavLink to="/page-not-found" title="partners" className="nav-link">
          <p>Partners</p>
        </NavLink>
      </LinksContainer>
      <div className="logo-icon">
        <img src={smallLogo} alt="logo" />
      </div>
      <LoginButtonContainer>
        <button onClick={handleGoToLoginPage}>Log In</button>
      </LoginButtonContainer>
    </HeaderContainer>
  )
}