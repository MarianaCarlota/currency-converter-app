import { FooterBottom, FooterContainer, ListOfLinks, ListOfLinksContainer, StoreIconLinks, TopFooterContainer, BottomLinks } from "./styles";
import smallLogo from "/assets/small-logo.svg"
import appleLogo from "/assets/apple-logo.png"
import googlePlayLogo from "/assets/google-play-logo.png"
import qrCode from "/assets/qr-code.png"
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <FooterContainer>
      <TopFooterContainer>
        <ListOfLinksContainer>
        <img src={smallLogo} alt="logo" />
          <ListOfLinks>
            <p>Products</p>
            <ul>
              <li>Consumers</li>
              <li>Business</li>
              <li>Partners</li>
            </ul>
          </ListOfLinks>
          <ListOfLinks>
            <p>Company</p>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </ListOfLinks>
          <ListOfLinks>
            <p>Help</p>
            <ul>
              <li>FAQ & Support</li>
              <li>Platform Status</li>
              <li>Criptionary</li>
              <li>Pricing</li>
              <li>Legal</li>
            </ul>
          </ListOfLinks>
          <ListOfLinks>
            <p>Social</p>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Linkedin</li>
            </ul>
          </ListOfLinks>
        </ListOfLinksContainer>
        <StoreIconLinks>
          <div>
          <img src={appleLogo} alt="apple logo" />
          <img src={googlePlayLogo} alt="google play logo" />
          </div>
        </StoreIconLinks>
      </TopFooterContainer>
      <FooterBottom>
        <div>
          <p>Uphold Europe Limited, Reg No. 09281410, Registered Office: Interchange Triangle, Chalk Farm Road, London, England, NW1 8AB|</p>
          <BottomLinks>
            <p>© Uphold, Inc. 2018. All Rights Reserved.</p>
            <NavLink to="/page-not-found" title="agreements" className="nav-link">
              <p>Agreements</p>
            </NavLink>
            <NavLink to="/page-not-found" title="privacy and data policy" className="nav-link">
              <p>Privacy & Data Policy</p>
            </NavLink>
            <NavLink to="/page-not-found" title="cookie policy" className="nav-link">
              <p>Cookie Policy</p>
            </NavLink>
          </BottomLinks>
        </div>
        <img src={qrCode} alt="qr code" />
      </FooterBottom>
    </FooterContainer>
  )
}