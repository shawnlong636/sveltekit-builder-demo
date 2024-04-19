import { fetchOneEntry, getBuilderSearchParams } from '@builder.io/sdk-svelte';
import type { BuilderContent } from '@builder.io/sdk-svelte';
import { PUBLIC_BUILDER_API_KEY } from '$env/static/public';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const content: BuilderContent | null = await fetchOneEntry({
		model: 'page',
		apiKey: PUBLIC_BUILDER_API_KEY,
		options: getBuilderSearchParams(url.searchParams),
		userAttributes: {
			urlPath: url.pathname || '/'
		}
	});

	return { content };
};
