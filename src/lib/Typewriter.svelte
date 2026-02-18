<script lang="ts">
	let { text, speed = 65, startanim } = $props();

	let visibleText = $state('');
	let index = 0;
	let interval: ReturnType<typeof setInterval>;

	$effect(() => {
		if (startanim) {
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

<span class="wrapper">
	<!-- Invisible full text reserves space -->
	<span class="ghost" aria-hidden="true">{text}</span>
	<!-- Visible animated text sits on top -->
	<span class="content">{visibleText}<span class="animate-blink">|</span></span>
</span>

<style>
	.wrapper {
		position: relative;
		display: inline-block;
	}

	.ghost {
		visibility: hidden;
		white-space: pre-wrap;
	}

	.content {
		position: absolute;
		top: 0;
		left: 0;
		white-space: pre-wrap;
	}

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
