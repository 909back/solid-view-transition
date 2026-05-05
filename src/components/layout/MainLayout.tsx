import { type JSX } from "solid-js";
import styles from "./MainLayout.module.scss";
import classnames from "classnames/bind";
import { useViewTransition } from "~/utils/useViewTransition";

const cx = classnames.bind(styles);

interface MainLayoutProps {
	children?: JSX.Element;
}

export default function MainLayout(props: MainLayoutProps) {
	// useViewTransition()
	return (
		<div class={cx("wrapper")}>
			<div class={cx("container")}>
				<header class={cx("header")}>
					<h1 class={cx("logo")}>
						<a href="/">BOSS</a>
					</h1>
				</header>
				<main class={cx("main")}>
					<div class={cx("main-inner")}>{props.children}</div>
				</main>
			</div>
		</div>
	);
}
