<script lang="ts">
	let canvas: HTMLCanvasElement;

	class Symbol {
		characters: String;
		x: number;
		y: number;
		text: string;
		fontSize: number;
		canvasHeight: number;

		constructor(x: number, y: number, fontSize: number, canvasHeight: number) {
			this.characters =
				'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
				'0123456789!@#$%^&*()[]{}?><' +
				'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';

			this.x = x;
			this.y = y;
			this.fontSize = fontSize;
			this.text = '';
			this.canvasHeight = canvasHeight;
		}

		draw(context: CanvasRenderingContext2D) {
			this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
			context.fillStyle = 'green';
			context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);

			if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
				this.y = 0;
			} else {
				this.y += 1;
			}
		}
	}

	class Effect {
		canvasWidth: number;
		canvasHeight: number;
		fontSize: number;
		cols: number;
		symbols: Symbol[];

		constructor(canvasWidth: number, canvasHeight: number) {
			this.canvasWidth = canvasWidth;
			this.canvasHeight = canvasHeight;
			this.fontSize = 24;
			this.cols = Math.floor(this.canvasWidth / this.fontSize);
			this.symbols = [];
			this.#initialize();
		}

		#initialize() {
			for (let i = 0; i < this.cols; i++) {
				this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
			}
		}

		resize(width: number, height: number) {
			this.canvasWidth = width;
			this.canvasHeight = height;
			this.cols = Math.floor(this.canvasWidth / this.fontSize);
			this.symbols = [];
			this.#initialize();
		}
	}

	$effect(() => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const context: CanvasRenderingContext2D = canvas.getContext('2d')!;

		const effect = new Effect(canvas.width, canvas.height);

		let prevTime = 0;
		const FPS = 15;
		const frameInterval = 1000 / FPS;
		let timer = 0;

		function animate(timeStamp: number) {
			const deltaTime = timeStamp - prevTime;
			prevTime = timeStamp - (deltaTime % frameInterval);
			if (timer > frameInterval) {
				context.fillStyle = 'rgba(0, 0, 0, 0.05)';
				context.fillRect(0, 0, canvas.width, canvas.height);
				context.font = effect.fontSize + 'px monospace';
				effect.symbols.forEach((symbol) => symbol.draw(context));
				timer = 0;
			} else {
				timer += deltaTime;
			}

			requestAnimationFrame(animate);
		}

		animate(0);

		window.addEventListener('resize', function () {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;

			effect.resize(canvas.width, canvas.height);
		});
	});
</script>

<canvas bind:this={canvas}></canvas>
