import { RefObject, useEffect, useRef } from "react";

export const useObserver = (
	ref: RefObject<Element>,
	canLoad: boolean,
	isLoading: boolean,
	callback: () => void
): void => {
	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		if (isLoading) return;

		if (observer.current) observer.current.disconnect();

		const cb: IntersectionObserverCallback = function (entries) {
			if (entries[0].isIntersecting && canLoad) {
				callback();
			}
		};
		
		observer.current = new IntersectionObserver(cb);

		if (ref.current) {
			observer.current.observe(ref.current);
		}

		return () => {
			if (observer.current) {
				observer.current.disconnect();
			}
		};
	}, [isLoading]);
};
