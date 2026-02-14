<script lang="ts">
	let { text, speed = 65, startanim } = $props();

	let visibleText = $state('');
	let index = 0;
	let interval: ReturnType<typeof setInterval>;

	$effect(() => {
		if (startanim) {
			// Reset on text change
			visibleText = '';
			index = 0;
			clearInterval(interval);

			interval = setInterval(() => {
				if (index < text.length) {
					visibleText += text[index];
					index++;
				} else {
					clearInterval(interval);
				}
			}, speed);

			return () => clearInterval(interval);
		}
	});
</script>

<span>{visibleText}<span class="animate-blink">|</span></span>

<style>
	.animate-blink {
		animation: blink 1s step-end infinite;
	}

	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
</style>
