<template>
	<button :class="classes"><slot></slot></button>
</template>

<script>
export default {
	name: "VueButton",

	props: ["classes"],

	data() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
button {
	width: auto;
	color: rgba(0, 0, 0, 1);
	background-color: rgba(0, 0, 0, 0.2);
	border: 1px solid rgba(0, 0, 0, 1);
	padding: 15px;
	color: rgba(0, 0, 0, 0.6);
	font-size: 18px;
	outline: none;
	cursor: pointer;
	transition: all 200ms linear;
	user-select: none;

	&:hover {
		background-color: rgba(0, 0, 0, 0.4);
		color: rgba(0, 0, 0, 1);
	}

	&.light {
		border: 1px solid rgba(255, 255, 255, 1);
		background-color: rgba(255, 255, 255, 0.2);
		color: rgba(255, 255, 255, 0.6);

		&:hover {
			background-color: rgba(255, 255, 255, 0.4);
			color: rgba(255, 255, 255, 1);
		}
	}

	&.link {
		padding: 0;
		padding-top: 0;
		padding-bottom: 0;
		font-size: 16px;
		border: none;
		background-color: transparent;
		&:hover {
			background-color: transparent;
		}
	}
}
</style>
