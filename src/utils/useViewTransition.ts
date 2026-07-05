import { useNavigate } from "@solidjs/router";

interface NavigateOptions {
  /**
   * 전환 시작 전에 완료돼야 하는 준비 작업(주로 데이터 프리패치).
   * new 페이지가 전환 스냅샷 시점에 필요한 요소(예: view-transition-name 썸네일)를
   * 동기 렌더할 수 있도록, 여기서 데이터를 await한 뒤 startViewTransition을 호출한다.
   * 데이터가 이미 캐시에 있으면 즉시 resolve되어 지연이 없다.
   */
  prepare?: () => Promise<unknown>;
}

export function useNavigateViewTransition() {
  const navigate = useNavigate();
  return async (to: string, options?: NavigateOptions) => {
    if (
      !document.startViewTransition ||
      /**
       * @description 기기에서 reduced-motion 선호시, 스킵처리
       * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion}
       */
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      await options?.prepare?.();
      navigate(to);
      return;
    }

    // 전환 시작 전에 데이터를 확보해 morph 대상이 스냅샷에 존재하도록 한다.
    await options?.prepare?.();

    document.startViewTransition(() => {
      navigate(to);
    });
  };
}
