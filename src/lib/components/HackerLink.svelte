<script lang="ts">
	import { page } from '$app/stores';

	let { href, label, className = '', isNavbar = true, time = 30, step = 1 } = $props();

	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
	let displayText = $state(label);
	let interval: any = null;

	const onMouseEnter = () => {
		let iteration = 0;
		clearInterval(interval);

		interval = setInterval(() => {
			displayText = label
				.split('')
				.map((letter: string, index: number) => {
					if (index < iteration) {
						return label[index];
					}
					return chars[Math.floor(Math.random() * chars.length)];
				})
				.join('');

			if (iteration >= label.length) {
				clearInterval(interval);
				displayText = label;
			}

			iteration += step;
		}, time);
	};

	const onMouseLeave = () => {
		clearInterval(interval);
		displayText = label;
	};
</script>

<a
	{href}
	class="relative font-mono font-bold tracking-wider transition-all duration-300 hover:text-white hover:text-shadow-[0_0_8px_rgba(0,255,0,0.8)]
    {isNavbar
		? `rounded px-4 py-2 text-sm ${
				$page.url.pathname === href
					? 'text-white text-shadow-[0_0_8px_rgba(0,255,0,0.8)]'
					: 'text-green-500/70'
			}`
		: `text-neutral-300 ${className}`}"
	onmouseenter={onMouseEnter}
	onmouseleave={onMouseLeave}
>
	<span class="relative z-10">
		{#if isNavbar && $page.url.pathname === href}
			&gt; {displayText} &lt;
		{:else}
			{displayText}
		{/if}
	</span>
</a>
