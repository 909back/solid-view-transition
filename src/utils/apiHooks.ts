import { createResource } from "solid-js";
import { useParams } from "@solidjs/router";
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

export function useProduct(productId: number) {
	return createResource<Product, number>(
	  productId,
		async (productId) => {
			const res = await fetch(API_URL + `/api/v1/product/${productId}`);
			return res.json() as Promise<Product>;
		},
	);
}
