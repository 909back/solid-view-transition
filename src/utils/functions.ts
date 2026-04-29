import type { Position } from "~/interface";

export const setImgURL = (src: string) =>
	(import.meta.env.VITE_IMAGE_URL ?? "") + src;

export const posToStyle = (pos?: Position) =>
	pos
		? Object.entries(pos).reduce(
				(p, [key, value]) => (value ? { ...p, [key]: `${value}px` } : p),
				{},
			)
		: undefined;
