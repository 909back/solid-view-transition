import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
import { type Banner as BannerData } from "~/interface";
import Label from "./Label";
import Image from "./Image";

const cx = classNames.bind(styles);

type ClassNames = Partial<
	Record<keyof Omit<BannerData, "backgroundColor"> | "root", string>
>;

interface BannerProps extends BannerData {
	className?: string;
	classNames?: ClassNames;
	image: string;
}
export default function Banner(props: BannerProps) {
	return (
		<div style={{ background: props.backgroundColor }} class={cx(props.className, props.classNames?.root, "banner")}>
      <Image class={cx("banner-image", props.classNames?.image)} src={props.image} width={300} fetchpriority="high" loading="eager" />
			<div class={cx("banner-info")}>
				<div class={cx("banner-info-inner")}>
					<h3 class={cx("banner-title", props.classNames?.title)}>{props.title}</h3>
					<p class={cx("banner-description", props.classNames?.description)}>{props.description}</p>
				</div>
				<Label>{props.price}</Label>
        <a class={cx("banner-link")} href={props.link}></a>
			</div>
		</div>
	);
}
