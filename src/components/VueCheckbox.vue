<template>
	<label class="checkbox" :class="classes">
		<slot></slot> <input type="checkbox" /> <span class="checkmark"></span>
	</label>
</template>

<script>
export default {
	name: "VueCheckbox",

	props: ["classes"],

	data() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
.checkbox {
	position: relative;
	width: auto;
	height: 25px;
	padding-left: 35px;
	line-height: 25px;
	user-select: none;
	color: rgba(0, 0, 0, 0.7);
	transition: all 200ms linear;

	&:hover {
		color: rgba(0, 0, 0, 1);
	}

	input {
		position: absolute;
		left: 0;
		top: 0;
		opacity: 0;
		width: 0;
		height: 0;
	}

	.checkmark {
		position: absolute;
		left: 0;
		top: 0;
		width: 25px;
		height: 25px;
		background-color: rgba(0, 0, 0, 0.3);
		transition: all 200ms linear;
	}
	&:hover .checkmark {
		background-color: rgba(0, 0, 0, 0.5);
	}

	input:checked ~ .checkmark {
		background-color: rgba(0, 0, 0, 0.6);
	}

	.checkmark:after {
		content: "";
		position: absolute;
		display: none;
		left: 9px;
		top: 5px;
		width: 5px;
		height: 10px;
		border: solid rgba(0, 0, 0, 1);
		border-width: 0 3px 3px 0;
		transform: rotate(45deg);
	}
	input:checked ~ .checkmark:after {
		display: block;
	}

	&.light {
		color: rgba(255, 255, 255, 0.6);
		&:hover {
			color: rgba(255, 255, 255, 1);
		}

		.checkmark {
			background-color: rgba(255, 255, 255, 0.3);
			&:hover {
				background-color: rgba(255, 255, 255, 0.5);
			}
		}

		input:checked ~ .checkmark {
			background-color: rgba(255, 255, 255, 0.6);
		}

		.checkmark:after {
			border-color: rgba(255, 255, 255, 1);
		}
	}
}
</style>
