<template>
	<div
		class="slider-wrap"
		:class="classNames"
		@mousedown="onMouseDown"
		@mouseup="onMouseUp"
		@mousemove="onMouseMove"
		v-mouseup-outside="onMouseOutside"
	>
		<label class="slider-label">{{ label }}</label>
		<div class="slider-bar"></div>
		<div class="slider-handle"></div>
	</div>
</template>

<script>
// import JQuery from "jquery"
// let $ = JQuery

export default {
	name: "VueSlider",

	props: ["label", "classes", "options", "placeholder"],

	data() {
		return {
			isMouseDown: false
		}
	},

	computed: {
		classNames() {
			return this.classes
		}
	},

	methods: {
		onMouseDown() {
			this.isMouseDown = true
		},

		onMouseUp() {
			this.isMouseDown = false
		},

		onMouseOutside(e, el) {
			this.isMouseDown = false
		},

		onMouseMove(event) {
			if (!this.isMouseDown) return

			let bar = $(event.currentTarget).children(".slider-bar")
			let handle = $(event.currentTarget).children(".slider-handle")

			let start = bar.offset().left
			let end = start + bar.width()

			let pos = event.pageX

			if (pos < start) {
				pos = start
			} else if (pos > end) {
				pos = end
			}

			handle.css({
				left: pos - start - handle.width() / 2 + "px"
			})
		}
	}
}
</script>

<style lang="scss" scoped>
* {
	box-sizing: border-box;
	user-select: none;
}

.slider-wrap {
	position: relative;
	width: 100%;
	max-width: 300px;
	height: 50px;

	.slider-bar {
		position: absolute;
		left: 0;
		top: 50%;
		width: 100%;
		height: 1px;
		background-color: rgba(0, 0, 0, 0.8);

		&:hover {
			background-color: rgba(0, 0, 0, 1);
		}
	}

	.slider-handle {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 30px;
		height: 30px;
		border-radius: 15px;
		background-color: #fff;
		border: 1px solid #000;
	}

	&.light {
		.slider-bar {
			background-color: rgba(255, 255, 255, 0.8);

			&:hover {
				background-color: rgba(255, 255, 255, 1);
			}
		}

		.slider-handle {
			background-color: #eee;
			border-color: #fff;
		}
	}
}
</style>
