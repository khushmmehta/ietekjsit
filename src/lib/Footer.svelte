<script lang="ts">
	import iete_logo from '$lib/assets/images/iete_logo.jpg';
	import somaiya_logo from '$lib/assets/images/somaiya_logo.webp';
	import HackerLink from './components/HackerLink.svelte';
</script>

<footer class="mt-8 flex w-full flex-col items-center gap-8 pl-4 md:pl-0">
	<div class="h-1 w-full bg-linear-to-r from-transparent via-green-500 to-transparent"></div>

	<div
		class="flex w-full max-w-[1400px] flex-col items-start justify-between gap-12 pr-4 lg:flex-row lg:pr-8"
	>
		<div class="flex w-full flex-col items-start gap-12 md:flex-row lg:w-auto lg:gap-8 xl:gap-16">
			<div class="flex flex-col items-start text-left">
				<p class="text-flicker mb-4 text-3xl md:text-5xl">Socials</p>
				<HackerLink
					href="https://www.instagram.com/ietekjsit/"
					label="Instagram"
					isNavbar={false}
					className="text-xl md:text-3xl"
				/>
				<HackerLink
					href="https://www.linkedin.com/company/iete-kjsit/"
					label="LinkedIn"
					isNavbar={false}
					className="text-xl md:text-3xl"
				/>

				<div class="my-6 md:my-4"></div>

				<p class="text-flicker mb-4 text-3xl md:text-5xl">Contact Us</p>
				<HackerLink
					href="mailto:iete.tech@somaiya.edu"
					label="iete.tech@somaiya.edu"
					isNavbar={false}
					className="text-xl md:text-3xl"
				/>
			</div>

			<div class="flex flex-col items-start text-left">
				<p class="text-flicker mb-4 text-3xl md:text-5xl">Navigation</p>
				<HackerLink href="/" label="Home" isNavbar={false} className="text-xl md:text-3xl" />
				<HackerLink
					href="/oscillation/"
					label="Oscillation"
					isNavbar={false}
					className="text-xl md:text-3xl"
				/>
				<HackerLink
					href="/past-events/"
					label="Past Events"
					isNavbar={false}
					className="text-xl md:text-3xl"
				/>
				<HackerLink
					href="/team-and-faculty/"
					label="Team & Faculty"
					isNavbar={false}
					className="text-xl md:text-3xl"
				/>
			</div>
		</div>

		<div class="flex shrink-0 flex-row gap-16 self-center lg:self-start">
			<img
				class="box-flicker size-28 rounded-full object-cover lg:size-28 xl:size-40"
				src={iete_logo}
				alt="iete logo"
			/>
			<img
				class="box-flicker size-28 rounded-full object-cover lg:size-28 xl:size-40"
				src={somaiya_logo}
				alt="somaiya_logo"
			/>
		</div>
	</div>

	<div class="relative mt-8 w-full max-w-[1440px] overflow-hidden">
		<p
			class="text-flicker w-full text-left text-[14vw] leading-none font-bold whitespace-nowrap opacity-10 select-none xl:text-[11vw]"
		>
			IETE - KJSIT
		</p>
		<p class="mb-4 w-full text-left font-light text-neutral-400">
			2025-2026 IETE KJSIT. All rights reserved.
		</p>
	</div>
</footer>
