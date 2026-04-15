import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
}
export default RootLayout;
