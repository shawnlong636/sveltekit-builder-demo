import type { PageLoad } from './$types';
import { PUBLIC_BUILDER_API_KEY } from '$env/static/public';
import { fetchOneEntry } from '@builder.io/sdk-svelte';

export const load: PageLoad = async ({ params }) => {
	const content = await fetchOneEntry({
		model: 'series-details',
		apiKey: PUBLIC_BUILDER_API_KEY
	});

	const series = await fetchOneEntry({
		model: 'series',
		apiKey: PUBLIC_BUILDER_API_KEY,
		query: { 'data.slug': params.slug }
	});
	return { content, series };
};
