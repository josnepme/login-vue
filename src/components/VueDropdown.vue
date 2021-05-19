<template>
	<div
		class="input-wrap"
		:class="classNames"
		v-click-outside="onClickOutside"
	>
		<label class="dropdown-label">{{ label }}</label>

		<div class="dropdown-selected" @click="toggleDropdown">
			
			<div class="dropdown-selected-text">
				{{ getText(selected) }}
			</div>

			<div class="dropdown-arrow"></div>

		</div>

		<ul>
			<li v-for="(item, index) in options" @click="selectItem(index)">
				{{ getText(index) }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "VueDropdown",

	props: ["label", "classes", "options", "placeholder"],

	data() {
		return {
			expanded: false,
			selected: null
		}
	},

	computed: {
		classNames() {
			return (
				this.classes +
				" " +
				(this.expanded ? "expanded" : "") +
				" " +
				(this.label ? "" : "no-label")
			)
		}
	},

	methods: {
		toggleDropdown() {
			this.expanded = !this.expanded
		},

		collapseDropdown() {
			this.expanded = false
		},

		onClickOutside() {
			this.expanded = false
		},

		getText(i) {
			if (i == null || !this.options[i]) {
				if (this.placeholder) {
					return this.placeholder
				} else {
					return this.getText(0)
				}
			} else if (this.options[i].text) {
				return this.options[i].text
			} else {
				return this.options[i]
			}
		},

		selectItem(i) {
			this.selected = i
			this.collapseDropdown()
		}
	}
}
</script>

<style lang="scss" scoped>
* {
	box-sizing: border-box;
	user-select: none;
}

.input-wrap {
	position: relative;
	width: 100%;
	height: 100px;
	max-width: 300px;

	&.no-label {
		height: 50px;
	}

	.dropdown-label {
		color: rgba(0, 0, 0, 1);
		height: 50px;
		line-height: 50px;
	}

	.dropdown-selected {
		position: relative;
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 20px;
		color: rgba(0, 0, 0, 0.7);
		border: 1px solid rgba(0, 0, 0, 0.7);
		cursor: pointer;
		padding-left: 10px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		background-color: rgba(0, 0, 0, 0);
		transition: all 200ms linear;

		.dropdown-arrow {
			position: absolute;
			right: 7px;
			top: 18px;
			width: 30px;
			height: 13px;
			transition: all 200ms linear;

			&:before {
				position: absolute;
				width: 1px;
				height: 18px;
				background-color: rgba(0, 0, 0, 0.7);
				content: " ";
				transform: rotate(-50deg);
				transform-origin: 0 0;
			}

			&:after {
				position: absolute;
				left: 27px;
				width: 1px;
				height: 18px;
				background-color: rgba(0, 0, 0, 0.7);
				content: " ";
				transform: rotate(50deg);
				transform-origin: right top;
			}
		}

		&:hover {
			background-color: rgba(0, 0, 0, 0.1);
			color: rgba(0, 0, 0, 1);
			border-color: rgba(0, 0, 0, 1);

			.dropdown-arrow {

				&:before {
					background-color: rgba(0, 0, 0, 1);
				}

				&:after {
					background-color: rgba(0, 0, 0, 1);
				}
			}
		}
	}

	ul {
		width: 100%;
		height: 0;
		padding: 0;
		margin: 0;
		display: block;
		overflow: hidden;
		transition: all 200ms linear;

		li {
			width: 100%;
			height: 50px;
			line-height: 50px;
			background-color: rgba(0, 0, 0, 0.2);
			border: 1px solid #000;
			border-top: none;
			list-style: none;
			padding-left: 10px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;

			&:hover {
				background-color: rgba(0, 0, 0, 0.3);
			}
		}
	}

	&.expanded {
		
		.dropdown-selected {

			.dropdown-arrow {
				transform: rotate(180deg);
			}
		}

		ul {
			height: 300px;
			display: block;
		}
	}

	&.light {
		.dropdown-label {
			color: rgba(255, 255, 255, 1);
		}

		.dropdown-selected {
			color: #fff;
			border-color: #fff;
			background-color: rgba(255, 255, 255, 0.2);

			&:hover {
				background-color: rgba(255, 255, 255, 0.4);
			}

			&:after {
				border-top-color: #fff;
			}
		}

		ul {
			li {
				color: #fff;
				background-color: rgba(255, 255, 255, 0.2);
				border-color: #fff;

				&:hover {
					background-color: rgba(255, 255, 255, 0.3);
				}
			}
		}
	}
}
</style>
