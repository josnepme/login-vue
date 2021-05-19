<template>
	<div id="showcase-container" class="container middle light">
		<div class="container center">
			<vue-toggle
				:classes="theme"
				@switch-on="goLight"
				@switch-off="goDark"
			/>
		</div>

		<div class="container center">
			<div class="container width-300">
				<vue-input label="Basic input" :classes="theme" />
			</div>

			<div class="container width-300">
				<vue-input label="Basic input" :classes="theme + ' box'" />
			</div>

			<div class="container width-300">
				<vue-input
					label="Input with icon"
					:classes="theme"
					icon="ios-contact"
				/>
			</div>

			<div class="container width-300">
				<vue-input label="Center text" :classes="theme + ' center'" />
			</div>

			<div class="container width-300">
				<vue-input
					label="Input with icon & centered text"
					:classes="theme + ' center'"
					icon="ios-contact"
				/>
			</div>
		</div>

		<div class="container center">
			<vue-button :classes="theme">Button</vue-button>
		</div>

		<div class="container middle">
			<div class="container width-300">
				<vue-dropdown
					:classes="theme"
					:options="[
						'Amsterdam',
						'Berlin',
						'Copenhagen',
						'Dublin',
						'Edinburgh',
						'Frankfurt',
						'Glasgow'
					]"
				/>
			</div>

			<div class="container width-300">
				<vue-dropdown
					:classes="theme"
					label="Dropdown with label"
					:options="[
						'Amsterdam',
						'Berlin',
						'Copenhagen',
						'Dublin',
						'Edinburgh',
						'Frankfurt',
						'Glasgow'
					]"
				/>
			</div>
		</div>

		<div class="container center">
			<vue-checkbox :classes="theme">Checkbox</vue-checkbox>
		</div>

		<div class="container center"><vue-slider :classes="theme" /></div>
	</div>
</template>

<script>
export default {
	name: "Showcase",

	data() {
		return {
			bg: require("../assets/login-bg.jpg"),
			theme: ""
		}
	},

	methods: {
		goDark() {
			this.theme = ""
			$("#showcase-container").addClass("light")
		},

		goLight() {
			this.theme = "light"
			$("#showcase-container").removeClass("light")
		}
	}
}
</script>

<style lang="scss" scoped>
#showcase-container {
	margin: 0;
	width: 100%;
	height: 100%;
	background-color: #333;

	.container {
		margin: 1px;
		padding: 20px;
		background-color: rgba(255, 255, 255, 0.2);
	}

	&.light {
		background-color: #eee;

		.container {
			background-color: rgba(0, 0, 0, 0.1);
		}
	}
}
</style>
