import Header from "@/components/Header";
import Loading from "@/Loading";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Header></Header>

      <Suspense Outlet={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
export default RootLayout;
