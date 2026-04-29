import Banner from "~/components/core/Banner";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { For, Show, Suspense } from "solid-js";
import ProductCard from "~/components/core/ProductCard";
import { useMainBanner, useMainProducts } from "../../utils/apiHooks";

const cx = classNames.bind(styles);

export default function Main() {
	const [products] = useMainProducts();
	const [banner] = useMainBanner();

	return (
		<div class={cx("page-wrapper")}>
			<Show when={banner()}>
				<section class={cx("banner-section")}>
					<Banner
						{...banner()!}
						classNames={{
							title: cx("banner1-title"),
							image: cx("banner1-image"),
						}}
					/>
				</section>
			</Show>
			<Suspense>
				<Show when={products()}>
					{(data) => (
						<div class={cx("product-list")}>
							<For each={data()}>{(item) => <ProductCard data={item} />}</For>
						</div>
					)}
				</Show>
			</Suspense>
		</div>
	);
}
