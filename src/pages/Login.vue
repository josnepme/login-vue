<template>
	<div
		id="login-container"
		class="container center"
		:style="{ backgroundImage: 'url(' + bg + ')' }"
	>
		<div id="login-main" class="container center width-400">
			<div id="login-logo">Logo</div>
			<div class="breaker height-50"></div>
			<vue-input
				label="Username"
				classes="center light"
				icon="ios-contact"
			/>
			<div class="breaker height-20"></div>
			<vue-input
				label="Password"
				classes="center light"
				icon="ios-lock"
				type="password"
			/>

			<div class="breaker height-20"></div>

			<vue-checkbox classes="mt-10 light">Remember me</vue-checkbox>

			<div class="breaker height-20"></div>

			<vue-button classes="mt-10 light link">
				<router-link to="/showcase">Forgot password?</router-link>
			</vue-button>

			<div class="breaker height-20"></div>

			<vue-button classes="mt-50 light">Login</vue-button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Login",

	data() {
		return {
			bg: require("../assets/login-bg.jpg")
		}
	}
}
</script>

<style lang="scss" scoped>
#login-container {
	height: 100%;
	background-color: LightSkyBlue;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;

	#login-main {
		align-items: flex-start;

		#login-logo {
			width: 200px;
			height: 100px;
			font-size: 70px;
			line-height: 100px;
			text-align: center;
			color: #fff;
		}
	}

	.checkbox {
		margin-left: 50px;
		margin-right: auto;
	}

	button.link {
		margin-left: 50px;
		margin-right: auto;
	}
}
</style>
