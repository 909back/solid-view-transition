import type { APIEvent } from "@solidjs/start/server";
import { PRODUCTS } from "~/utils/data";

const notFound = () =>
	new Response(JSON.stringify({ message: "존재하지않는 상품 번호입니다." }), {
		status: 404,
		headers: { "Content-Type": "application/json" },
	});

export function GET({ params }: APIEvent) {
	const productId = Number(params.id) || 0;
	if (!productId) return notFound();

	const item = PRODUCTS.find((p) => p.id === productId);
	if (!item) return notFound();

	return item;
}
