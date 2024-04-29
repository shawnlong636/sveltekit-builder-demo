<script lang="ts">
	import { Content, isPreviewing } from '@builder.io/sdk-svelte';
	import type { PageData } from './$types';
	import { PUBLIC_BUILDER_API_KEY } from '$env/static/public';
	import { CUSTOM_COMPONENTS } from '$lib/builder-custom-components';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;
	onMount(() => {
		if (!(data.content || isPreviewing())) {
			goto('/404');
		}
	});
</script>

<Content
	model="series-details"
	data={data.series?.data}
	content={data.content}
	apiKey={PUBLIC_BUILDER_API_KEY}
	customComponents={CUSTOM_COMPONENTS}
/>
