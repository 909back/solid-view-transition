import { MetaProvider, Title, Link } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import MainLayout from "~/components/layout/MainLayout";
import "~/styles/global.scss";
import "~/styles/view-transition.scss";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>BOSS</Title>
          <Link
            rel="icon"
            href="/favicon/light.ico"
            media="(prefers-color-scheme: light)"
          />
          <Link
            rel="icon"
            href="/favicon/dark.ico"
            media="(prefers-color-scheme: dark)"
          />
          <MainLayout>
            <Suspense>{props.children}</Suspense>
          </MainLayout>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
