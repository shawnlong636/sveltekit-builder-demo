import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faVolumeHigh, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface IconMap {
	name: string;
	iconDefinition: IconDefinition;
}

const icons: IconMap[] = [
	{ name: 'listen', iconDefinition: faVolumeHigh },
	{ name: 'chevron-right', iconDefinition: faChevronRight }
];

export const getIcon = (name: string): IconDefinition | null => {
	const icon = icons.find((icon) => icon.name === name);
	return icon ? icon.iconDefinition : null;
};
