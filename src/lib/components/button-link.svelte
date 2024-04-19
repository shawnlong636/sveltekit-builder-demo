<script lang="ts">
	import { getIcon } from '$lib/icon-map';
	import Fa from 'svelte-fa';

	export let href = '';
	export let buttonText = '';
	export let iconName: string | undefined;
	export let iconPosition: 'left' | 'right' = 'left';
	$: icon = iconName ? getIcon(iconName) : null;
</script>

<a {href} class="btn rounded-md bg-cyan-800">
	<span class="grid grid-flow-col items-center gap-1">
		{#if icon}
			<Fa {icon} class={iconPosition === 'left' ? 'mx-2 col-start-1' : 'mx-2 col-start-2'} />
		{/if}
		{buttonText}
	</span>
</a>
