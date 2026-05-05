import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";
import styles from "./[...404].module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

export default function NotFound() {
  return (
    <main class={cx('container')}>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        Go back to <a href="/">Home</a>
      </p>
    </main>
  );
}
