<script>
	import Facebook from './icons/facebook.svelte'
	import Twitter from './icons/twitter.svelte'
	import YouTube from './icons/you-tube.svelte'
</script>

<footer class="bg-base-300 px-4 mt-20 text-base-content">
	<div
		class="footer container max-w-6xl mx-auto pt-20 pb-20 text-base"
	>
		<div>
			<span class="footer-title">Orders</span>
			<a href="/" class="link link-hover">Shipping</a>
			<a href="/" class="link link-hover">Track My Order</a>
			<a href="/" class="link link-hover">Terms & Conditions</a>
			<a href="/" class="link link-hover">Returns Policy</a>
		</div>
		<div>
			<span class="footer-title">About</span>
			<a href="/" class="link link-hover">About Us</a>
			<a href="/" class="link link-hover">Contact Us</a>
			<a href="/" class="link link-hover">Privacy Notice</a>
		</div>
		<div>
			<span class="footer-title">Social</span>
			<div class="grid grid-flow-col gap-4">
				<a href="/">
					<Twitter />
				</a>
				<a href="/">
					<YouTube />
				</a>
				<a href="/">
					<Facebook />
				</a>
			</div>
		</div>
	</div>
</footer>
