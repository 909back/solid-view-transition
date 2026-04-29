import Banner from "~/components/core/Banner";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { BANNER_1, PRODUCTS } from "~/utils/data";
import { Index } from "solid-js";
import ProductCard from "~/components/core/ProductCard";

const cx = classNames.bind(styles);

export default function Main() {
  return (
    <div class={cx("page-wrapper")}>
      <section class={cx("banner-section")}>
        <Banner {...BANNER_1} classNames={{
          title: cx('banner1-title'),
          image: cx('banner1-image')
        }} />
      </section>
      <div class={cx('product-list')}>
        <Index each={PRODUCTS}>
          {(item) => <ProductCard data={item()} />}
        </Index>
      </div>
    </div>
  );
}
