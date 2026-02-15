<script lang="ts">
	import { page } from '$app/stores';
	import { Menu, X, Terminal, Radio } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import HackerLink from './HackerLink.svelte';
	import { onMount } from 'svelte';

	let isMenuOpen = $state(false);
	let randomStream = $state('010101');

	// Logo scrambling
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
	const logoLabel = 'IETE_KJSIT';
	let logoText = $state(logoLabel);
	let logoInterval: any = null;

	const onLogoEnter = () => {
		let iteration = 0;
		clearInterval(logoInterval);

		logoInterval = setInterval(() => {
			logoText = logoLabel
				.split('')
				.map((letter: string, index: number) => {
					if (index < iteration) return logoLabel[index];
					return chars[Math.floor(Math.random() * chars.length)];
				})
				.join('');

			if (iteration >= logoLabel.length) {
				clearInterval(logoInterval);
				logoText = logoLabel;
			}

			iteration += 1;
		}, 30);
	};

	const onLogoLeave = () => {
		clearInterval(logoInterval);
		logoText = logoLabel;
	};

	// Navigation links
	const links = [
		{ href: '/', label: 'HOME' },
		{ href: '/oscillation/', label: 'OSCILLATION' },
		{ href: '/past-events/', label: 'PAST_EVENTS' },
		{ href: '/workshops/', label: 'WORKSHOPS' },
		{ href: '/team-and-faculty/', label: 'TEAM' }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	onMount(() => {
		const interval = setInterval(() => {
			randomStream = Math.random().toString(16).substring(2, 8).toUpperCase();
		}, 100);
		return () => clearInterval(interval);
	});
</script>

<nav
	class="fixed top-0 z-50 w-full border-b border-green-500/30 bg-black/60 font-mono text-green-500 backdrop-blur-sm"
>
	<div
		class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 2xl:max-w-[1600px]"
	>
		<!-- Left: Brand + Status -->
		<div class="flex items-center gap-8">
			<!-- Brand/Logo -->
			<a
				href="/"
				class="group flex items-center gap-2 text-xl font-bold tracking-widest text-white"
				onmouseenter={onLogoEnter}
				onmouseleave={onLogoLeave}
			>
				<Terminal class="text-green-500" />
				<span class="transition-all duration-300 group-hover:text-shadow-[0_0_15px_#00ff00]"
					>{logoText}</span
				>
			</a>

			<!-- System Status (Desktop Only) -->
			<div
				class="hidden items-center gap-2 rounded border border-green-500/30 bg-black/40 px-3 py-1 text-xs md:flex"
			>
				<div class="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_5px_#00ff00]"></div>
				<span class="text-green-500/80">SYS.ONLINE</span>
				<span class="mx-1 h-3 w-px bg-green-500/30"></span>
				<span class="font-mono text-green-500/50">{randomStream}</span>
			</div>
		</div>

		<!-- Center/Right: Desktop Navigation -->
		<div class="hidden md:flex md:items-center md:gap-4">
			{#each links as link}
				<HackerLink href={link.href} label={link.label} />
			{/each}
		</div>

		<!-- Mobile Menu Button -->
		<button
			class="relative flex h-10 w-10 items-center justify-center text-green-500 transition-colors hover:text-green-400 md:hidden"
			onclick={toggleMenu}
			aria-label="Toggle menu"
		>
			<div
				class="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out
                {isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}"
			>
				<Menu class="h-6 w-6" />
			</div>

			<div
				class="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out
                {isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}"
			>
				<X class="h-6 w-6" />
			</div>
		</button>
	</div>

	<!-- Mobile Navigation Menu -->
	{#if isMenuOpen}
		<div
			class="border-t border-green-500/30 bg-black/95 md:hidden"
			transition:slide={{ duration: 200 }}
		>
			<div class="flex flex-col space-y-1 p-4">
				{#each links as link}
					<a
						href={link.href}
						class="flex items-center gap-2 rounded px-4 py-3 text-sm font-bold tracking-wider hover:bg-green-500/10 hover:text-white
                        {$page.url.pathname === link.href
							? 'bg-green-500/20 text-white'
							: 'text-green-500'}"
						onclick={closeMenu}
					>
						<span class="text-green-500/50">&gt;</span>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
