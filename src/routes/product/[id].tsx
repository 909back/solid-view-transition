import styles from "./[id].module.scss";
import classNames from "classnames/bind";
import { useParams } from "@solidjs/router";

const cx = classNames.bind(styles);

export default function ProductDetail() {
  const params = useParams();
  return (
    <>
      <p>Product Id: {params.id}</p>
    </>
  );
}
