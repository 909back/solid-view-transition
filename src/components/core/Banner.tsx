import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
import { type Banner as BannerData } from "~/interface";
import Label from "./Label";

const cx = classNames.bind(styles);

type ClassNames = Partial<
	Record<keyof Omit<BannerData, "backgroundColor"> | "root", string>
>;

interface BannerProps extends BannerData {
	className?: string;
	classNames?: ClassNames;
	image: string;
}
export default function Banner({
	className,
	classNames,
	title,
  backgroundColor,
	description,
	image,
	price,
  link,
}: BannerProps) {
	return (
		<div style={{"background": backgroundColor }} class={cx(className, classNames?.root, "banner")}>
      <img class={cx('banner-image', classNames?.image)} src={image} />
			<div class={cx("banner-info")}>
				<div class={cx("banner-info-inner")}>
					<h3 class={cx("banner-title", classNames?.title)}>{title}</h3>
					<p class={cx("banner-description", classNames?.description)}>{description}</p>
				</div>
				<Label>{price}</Label>
        <a class={cx('banner-link')} href={link}></a>
			</div>
		</div>
	);
}
