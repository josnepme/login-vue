<template>
	<div class="toggle-wrap" :class="classNames" @click="onClick">
		<div class="toggle-bar"></div>
		<div class="toggle-handle"></div>
	</div>
</template>

<script>
export default {
	name: "VueToggle",

	props: ["classes"],

	data() {
		return {
			switch: false
		}
	},

	computed: {
		classNames() {
			return this.classes + " " + (this.switch ? "on" : "")
		}
	},

	methods: {
		onClick() {
			this.switch = !this.switch

			if (this.switch) this.$emit("switch-on")
			else this.$emit("switch-off")
		}
	}
}
</script>

<style lang="scss" scoped>
* {
	box-sizing: border-box;
	user-select: none;
}

.toggle-wrap {
	position: relative;
	width: 100%;
	width: 100px;
	height: 50px;

	.toggle-bar {
		position: absolute;
		left: 25px;
		top: 0px;
		width: 50px;
		height: 50px;
		background-color: #444;
		transition: all 200ms linear;

		&:before {
			position: absolute;
			left: -25px;
			top: 0;
			width: 50px;
			height: 50px;
			border-radius: 25px;
			background-color: #444;
			content: " ";
			transition: all 200ms linear;
		}

		&:after {
			position: absolute;
			left: 25px;
			top: 0;
			width: 50px;
			height: 50px;
			border-radius: 25px;
			background-color: #444;
			content: " ";
			transition: all 200ms linear;
		}
	}

	.toggle-handle {
		position: absolute;
		left: 0;
		top: 0;
		width: 50px;
		height: 50px;
		background-color: #777;
		border: 1px solid #555;
		border-radius: 25px;
		transition: all 200ms linear;
	}

	&.on {
		.toggle-bar {
			background-color: LimeGreen;

			&:before {
				background-color: LimeGreen;
			}

			&:after {
				background-color: LimeGreen;
			}
		}

		.toggle-handle {
			left: 50px;
		}
	}

	&.light {
		.toggle-bar {
			background-color: #ccc;

			&:before {
				background-color: #ccc;
			}

			&:after {
				background-color: #ccc;
			}
		}

		.toggle-handle {
			background-color: #fff;
			border: 1px solid #ddd;
		}

		&.on {
			.toggle-bar {
				background-color: lime;

				&:before {
					background-color: lime;
				}

				&:after {
					background-color: lime;
				}
			}
		}
	}
}
</style>
