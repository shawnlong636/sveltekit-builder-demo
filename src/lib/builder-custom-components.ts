import ButtonLink from '$lib/components/button-link.svelte';

export const CUSTOM_COMPONENTS = [
	{
		component: ButtonLink,
		name: 'Button Link',
		inputs: [
			{
				name: 'href',
				type: 'string',
				defaultValue: ''
			},
			{
				name: 'buttonText',
				type: 'string',
				defaultValue: 'Click Me!'
			},
			{
				name: 'iconName',
				type: 'string',
				defaultValue: null
			},
			{
				name: 'iconPosition',
				type: 'string',
				defaultValue: 'left'
			}
		]
	}
];
