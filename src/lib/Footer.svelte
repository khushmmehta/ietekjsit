<script lang="ts">
	import iete_logo from '$lib/assets/images/iete_logo.jpg';
	import somaiya_logo from '$lib/assets/images/somaiya_logo.webp';
</script>

<footer class="mt-8 flex w-full flex-col items-center gap-8 pl-4 md:pl-0">
	<div class="h-1 w-full bg-linear-to-r from-transparent via-green-500 to-transparent"></div>

	<div
		class="flex w-full max-w-[1400px] flex-col items-start justify-between gap-12 pr-4 lg:flex-row lg:pr-8"
	>
		<div class="flex w-full flex-col items-start gap-12 md:flex-row lg:w-auto lg:gap-8 xl:gap-16">
			<div class="flex flex-col items-start text-left">
				<p class="text-flicker mb-4 text-3xl md:text-5xl">Socials</p>
				<p class="text-xl text-neutral-300 md:text-3xl">Instagram</p>
				<p class="text-xl text-neutral-300 md:text-3xl">LinkedIn</p>

				<div class="my-6 md:my-4"></div>

				<p class="text-flicker mb-4 text-3xl md:text-5xl">Contact Us</p>
				<a
					href="mailto:iete.tech@somaiya.edu"
					class="text-xl text-neutral-300 hover:text-white md:text-3xl">iete.tech@somaiya.edu</a
				>
			</div>

			<div class="flex flex-col items-start text-left">
				<p class="text-flicker mb-4 text-3xl md:text-5xl">Navigation</p>
				<a href="/" class="text-xl text-neutral-300 hover:text-white md:text-3xl">Home</a>
				<a href="/oscillation/" class="text-xl text-neutral-300 hover:text-white md:text-3xl"
					>Oscillation</a
				>
				<a href="/past-events/" class="text-xl text-neutral-300 hover:text-white md:text-3xl"
					>Past Events</a
				>
				<a href="/team-and-faculty/" class="text-xl text-neutral-300 hover:text-white md:text-3xl"
					>Team & Faculty</a
				>
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
