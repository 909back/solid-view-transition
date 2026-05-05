import type { Product } from "~/interface";
import styles from "./ProductCard.module.scss";
import classNames from "classnames/bind";
import { posToStyle } from "~/utils/functions";
import Image from "./Image";
import { useNavigateViewTransition } from "~/utils/useViewTransition";

const cx = classNames.bind(styles);

interface ProductCardProps {
	data: Product;
}
export default function ProductCard(props: ProductCardProps) {
	const navigate = useNavigateViewTransition();
	const href = `/product/${props.data.id}`;
	return (
		<article
			style={{ "view-transition-name": `product-${props.data.id}` }}
			class={cx("wrapper")}
		>
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
			<a
				class={cx("link")}
				href={href}
				onClick={(e) => {
					e.preventDefault();
					navigate(href);
				}}
			/>
		</article>
	);
}
