import type { Product } from "~/interface";
import { A } from "@solidjs/router";
import styles from "./ProductCard.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ProductCardProps {
	data: Product;
}
export default function ProductCard({ data }: ProductCardProps) {
	return (
		<article class={cx("wrapper")}>
			<div class={cx("image")}>
				<img
					style={{
						top: `${data.imagePos?.top ?? 0}px`,
						right: `${data.imagePos?.right ?? 0}px`,
						bottom: `${data.imagePos?.bottom ?? 0}px`,
						left: `${data.imagePos?.left ?? 0}px`,
					}}
					src={data.image}
				/>
			</div>
			<div class={cx("information")}>
				<p class={cx("title")}>{data.title}</p>
				<p class={cx("price")}>₩ {data.price.toLocaleString('kr')}</p>
			</div>
			<A class={cx("link")} href={`/product/${data.id}`}></A>
		</article>
	);
}
