import Vue from "vue"
import Router from "vue-router"
import store from "../store"
import Login from "@/pages/Login"
import Test from "@/pages/Showcase"

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/",
			redirect: "/login"
		},
		{
			path: "/login",
			name: "Login",
			component: Login
		},
		{
			path: "/showcase",
			name: "Showcase",
			component: Test
		}
	]
})
