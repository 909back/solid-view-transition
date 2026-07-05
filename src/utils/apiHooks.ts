import { createResource } from "solid-js";
import { createAsync, query } from "@solidjs/router";
import type { Banner, Product } from "~/interface";

const API_URL = import.meta.env.VITE_API_URL;

export function useMainProducts() {
	return createResource(async () => {
		const res = await fetch(API_URL + "/api/v1/main/product");
		return res.json() as Promise<Product[]>;
	});
}

export function useMainBanner() {
	return createResource<Banner>(async () => {
		const res = await fetch(API_URL + "/api/v1/main/banner");
		return res.json() as Promise<Banner>;
	});
}

/**
 * 캐시 가능한 product 조회. preload와 상세 페이지가 같은 키를 공유하므로,
 * hover/클릭 시 미리 실행해두면 상세 진입 시 캐시에서 즉시 렌더된다.
 * (View Transition morph가 성립하려면 전환 스냅샷 시점에 썸네일이 DOM에 있어야 함)
 */
export const getProduct = query(async (productId: number) => {
	const res = await fetch(API_URL + `/api/v1/product/${productId}`);
	return res.json() as Promise<Product>;
}, "product");

export function useProduct(productId: number) {
	return createAsync(() => getProduct(productId));
}
