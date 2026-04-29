import { createSignal, splitProps } from "solid-js";
import type { JSX } from "solid-js";
import styles from "./Image.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ImageProps = JSX.ImgHTMLAttributes<HTMLImageElement>;

export default function Image(props: ImageProps) {
	const [loaded, setLoaded] = createSignal(false);
	const [local, rest] = splitProps(props, ["class", "classList", "onLoad"]);

	return (
		<img
			{...rest}
			class={cx("image", local.class, { loaded })}
			classList={local.classList}
			decoding="async"
			loading="lazy"
			onLoad={(e) => {
				setLoaded(true);
				if (typeof local.onLoad === "function") local.onLoad(e);
			}}
		/>
	);
}
