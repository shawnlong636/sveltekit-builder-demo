<script lang="ts">
	import { Content } from '@builder.io/sdk-svelte';
	import type { PageData } from './$types';
	import { PUBLIC_BUILDER_API_KEY } from '$env/static/public';
	import { CUSTOM_COMPONENTS } from '$lib/builder-custom-components';

	export let data: PageData;
</script>

<Content
	model="series-details"
	data={data.series?.data}
	content={data.content}
	apiKey={PUBLIC_BUILDER_API_KEY}
	customComponents={CUSTOM_COMPONENTS}
/>
