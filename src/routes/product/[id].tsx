import styles from "./[id].module.scss";
import classNames from "classnames/bind";
import { useParams } from "@solidjs/router";
import { Suspense, Show, createSignal, For } from "solid-js";
import { useProduct } from "~/utils/apiHooks";
import type { Position, Size } from "~/interface";
import { posToStyle } from "~/utils/functions";
import Button from "~/components/core/Button";
import Image from "~/components/core/Image";
import IconArrowLeft from "~/components/icons/ic-arrow-left";
import { useNavigate } from "@solidjs/router";

const cx = classNames.bind(styles);

function OrderButton() {
	return (
		<div class={cx("order-button-wrapper")}>
			<Button size="L" fluid>
				Buy Now!
			</Button>
		</div>
	);
}

interface ProductSizeTabProps {
	default: Size;
	data: Size[];
}
function ProductSizeTab(props: ProductSizeTabProps) {
	const [selVal, setSelVal] = createSignal(props.default);

	return (
		<div class={cx("size-select-tab")}>
			<p class={cx("size-select-label")}>Size</p>
			<div class={cx("size-select-tabs")}>
				<For each={props.data}>
					{(item) => (
						<Button
							variant={item === selVal() ? "solid" : "outline"}
							onClick={() => setSelVal(item)}
						>
							{item}
						</Button>
					)}
				</For>
			</div>
		</div>
	);
}

function ProductThumbnail(props: {
	viewTransitionName: string;
	src: string;
	pos?: Position;
}) {
	const navigate = useNavigate();
	return (
		<section
			style={{"view-transition-name": props.viewTransitionName}}
			class={cx("thumbnail")}
		>
			<div class={cx("thumbnail-inner")}>
				<Image
					class={cx("thumbnail-image")}
					style={posToStyle(props.pos)}
					src={props.src}
					fetchpriority="high"
				/>
			</div>
			<div class={cx("thumbnail-top")}>
				<Button contentType="icon" variant="link" onClick={() => navigate(-1)}>
					<IconArrowLeft />
				</Button>
			</div>
		</section>
	);
}

export default function ProductDetail() {
	const params = useParams();
	const [product] = useProduct(Number(params.id) || 0);

	return (
		<Suspense>
			<Show when={product()}>
				{(data) => (
					<>
						<ProductThumbnail
							viewTransitionName={`product-${data().id}`}
							src={data().image}
							pos={data().imagePos}
						/>
						<article class={cx("information")}>
							<header class={cx("information-header")}>
								<h2 class={cx("product-title")}>{data().title}</h2>
								<p class={cx("product-desc")}>2026 BOSS COLLECTION</p>
								<p class={cx("product-price")}>
									₩ {data().price.toLocaleString()}
								</p>
							</header>
							<Show when={data().sizes}>
								{(sizes) => <ProductSizeTab default="M" data={sizes()} />}
							</Show>
							<OrderButton />
						</article>
					</>
				)}
			</Show>
		</Suspense>
	);
}
