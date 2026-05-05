import { useBeforeLeave, useNavigate } from "@solidjs/router";

export function useNavigateViewTransition() {
	const navigate = useNavigate();
	return (to: string) => {
		if (
			!document.startViewTransition ||
			/**
			 * @description 기기에서 reduced-motion 선호시, 스킵처리
			 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion}
			 */
			window.matchMedia("(prefers-reduced-motion: reduce)").matches
		) {
			navigate(to);
			return;
		}

		document.startViewTransition(() => {
			navigate(to);
		});
	};
}

/** @deprecated */
export function useViewTransition() {
	useBeforeLeave((e) => {
		if (!document.startViewTransition) return;

		/**
		 * @description 기기에서 reduced-motion 선호시, 스킵처리
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion}
		 */
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		// `e.preventDefault()` 막을 수 없는 경우, 무시
		if (e.defaultPrevented) return;

		e.preventDefault();
		document.startViewTransition(() => {
			e.retry(true);
		});
	});
}
