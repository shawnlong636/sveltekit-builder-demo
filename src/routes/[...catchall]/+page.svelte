<script lang="ts">
	import { Content, isPreviewing } from '@builder.io/sdk-svelte';
	import { PUBLIC_BUILDER_API_KEY } from '$env/static/public';
	import { CUSTOM_COMPONENTS } from '$lib/builder-custom-components';

	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<main>
	{#if data.content || isPreviewing()}
		<Content
			model="page"
			content={data.content}
			apiKey={PUBLIC_BUILDER_API_KEY}
			customComponents={CUSTOM_COMPONENTS}
		/>
	{:else}
		<p>Loading...</p>
	{/if}
</main>
