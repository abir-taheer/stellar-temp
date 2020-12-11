import AwesomeLightbox from 'react-awesome-lightbox';

import { useEffect, useState } from 'react';
import EventEmitter from 'events';

const lightboxEmitter = new EventEmitter();

export function triggerLightbox(img) {
	lightboxEmitter.emit('open', img);
}

const Lightbox = () => {
	const [open, setOpen] = useState(false);
	const [src, setSrc] = useState('');

	useEffect(() => {
		const callback = (src) => {
			setSrc(src);
			setOpen(true);
		};

		lightboxEmitter.on('open', callback);
		return () => lightboxEmitter.removeListener('open', callback);
	});

	if (!open) {
		return null;
	}

	return <AwesomeLightbox image={src} onClose={() => setOpen(false)} />;
};

export default Lightbox;
