<template>
	<div id="app"><router-view class="router-view main" /></div>
</template>

<script>
export default {
	name: "App",

	computed: {
		loading() {
			return this.$store.getters.isLoading()
		}
	}
}
</script>

<style lang="scss">
$input-border-color: red;

* {
	box-sizing: border-box;
}

html,
body {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
}

#app {
	width: 100%;
	height: 100%;
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	color: #000;
}

.container {
	width: 100%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	align-content: flex-start;

	&.auto {
		width: auto;
	}

	&.middle {
		justify-content: center;
	}

	&.center {
		justify-content: center;
		align-items: center;
		align-content: center;
	}

	&.top {
		align-items: flex-start;
	}

	.breaker {
		width: 100%;
	}
}

/* 
width-10, width-20, ... width-1000 
height-10, height-20, ... height-1000 
*/
$total: 100;
$n: 10;
$unit: 10px;

@for $i from 1 through $total {
	.width-#{$i*$n} {
		width: $i * $unit;
		max-width: 100%;
	}
	.height-#{$i*$n} {
		height: $i * $unit;
	}
}

/*
mt-5, mt-10, mt-15, ... mt-1000
*/
$total: 20;
$n: 5;
$unit: 5px;

@for $i from 1 through $total {
	.mt-#{$i*$n} {
		margin-top: $i * $unit;
	}
}
</style>
