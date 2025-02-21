import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LayoutContainer } from "../styles";

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <Header />
        <Outlet />
        <Footer />
      </LayoutContainer>
    </div>
  )
}