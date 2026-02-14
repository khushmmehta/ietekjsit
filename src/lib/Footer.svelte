<script lang="ts">
	import iete_logo from '$lib/assets/images/iete_logo.jpg';
	import somaiya_logo from '$lib/assets/images/somaiya_logo.webp';
</script>

<footer class="flex-columns mt-8 flex w-full flex-col items-center gap-8">
	<div class="h-1 w-full bg-linear-to-r from-transparent via-green-500 to-transparent"></div>

	<div class="flex w-full flex-row items-center justify-between">
		<div class="flex flex-row items-start gap-32">
			<div class="flex flex-col items-start">
				<p class="text-flicker text-5xl">Socials</p>
				<p class="text-3xl">Instagram</p>
				<p class="text-3xl">LinkedIn</p>
				<div class="my-4"></div>
				<p class="text-flicker text-5xl">Contact Us</p>
				<p class="text-3xl">iete.tech@somaiya.edu</p>
			</div>

			<div class="flex flex-col items-start">
				<p class="text-flicker text-5xl">Navigation</p>
				<a href="/" class="text-3xl">Home</a>
				<a href="/oscillation/" class="text-3xl">Oscillation</a>
				<a href="/past-events/" class="text-3xl">Past Events</a>
				<a href="/team-and-faculty/" class="text-3xl">Team & Faculty</a>
			</div>
		</div>

		<div class="flex flex-row gap-24">
			<img
				class="box-flicker object-stretch size-48 rounded-full"
				src={iete_logo}
				alt="iete logo"
			/>
			<img
				class="box-flicker object-stretch size-48 rounded-full"
				src={somaiya_logo}
				alt="somaiya_logo"
			/>
		</div>
	</div>

	<p class="w-full font-light text-neutral-400">2025-2026 IETE KJSIT. All rights reserved.</p>
	<p class="text-flicker -mt-23 w-full text-left align-middle text-[16rem]">IETE - KJSIT</p>
</footer>
