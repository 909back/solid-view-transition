import type { Product } from "~/interface";
import { A } from "@solidjs/router";
import styles from "./ProductCard.module.scss";
import classNames from "classnames/bind";
import { posToStyle } from "~/utils/functions";
import Image from "./Image";

const cx = classNames.bind(styles);

interface ProductCardProps {
	data: Product;
}
export default function ProductCard(props: ProductCardProps) {
	return (
		<article class={cx("wrapper")}>
			<div class={cx("image")}>
				<Image
					style={posToStyle(props.data.imagePos)}
					src={props.data.image}
					sizes="30vw"
				/>
			</div>
			<div class={cx("information")}>
				<p class={cx("title")}>{props.data.title}</p>
				<p class={cx("price")}>₩ {props.data.price.toLocaleString("kr")}</p>
			</div>
			<A class={cx("link")} href={`/product/${props.data.id}`}></A>
		</article>
	);
}
