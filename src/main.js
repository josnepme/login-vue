import Vue from "vue"
import App from "./App"
import router from "./router"
import store from "./store"
window.$ = require("jquery")

import vOutsideEvents from "vue-outside-events"
Vue.use(vOutsideEvents)

import VueInput from "./components/VueInput"
import VueButton from "./components/VueButton"
import VueCheckbox from "./components/VueCheckbox"
import VueDropdown from "./components/VueDropdown"
import VueSlider from "./components/VueSlider"
import VueToggle from "./components/VueToggle"

import Login from "./pages/Login"

Vue.config.productionTip = false

Vue.component("vue-input", VueInput)
Vue.component("vue-button", VueButton)
Vue.component("vue-checkbox", VueCheckbox)
Vue.component("vue-dropdown", VueDropdown)
Vue.component("vue-slider", VueSlider)
Vue.component("vue-toggle", VueToggle)

new Vue({
	el: "#app",

	router,

	render: h => h(App),

	store,

	data: {}
})
