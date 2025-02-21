import { NavLink } from "react-router-dom";
import { PageNotAvailableContainer } from "./styles";

export function PageNotAvailable() {
  return (
    <PageNotAvailableContainer>
      <h1>This page is not available.</h1>
      <h1><NavLink to="/" title="go back" className="nav-link"><span>Click here</span></NavLink> to go back.</h1>
    </PageNotAvailableContainer>
  )
}