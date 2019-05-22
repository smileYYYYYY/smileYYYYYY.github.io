<template>
	<div class="nav0">
		<div class="logo">
			<strong>小鱼博客</strong>
		</div>
		<ul class="nav_">
			
				<router-link :to="{path:'/'}" class="item"><li>首页</li></router-link>
			
			
				<router-link :to="{path:'/lists'}" class="item"><li>博文</li>  </router-link>
			
			
				<router-link :to="{name:'Login'}" class="item"><li>登录</li></router-link>
			
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'Nav',
		data() {
			return {

			}
		}
	}
</script>
<style scoped>
	*{
		margin: 0;padding: 0;
	}
	.nav0 {
		color: #fff;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		height: 60px;
		line-height: 1.25rem;
		font-size: 0.3125rem;
		background-color: #42b983;
		border-bottom: 1px solid #ccc;

	}


	.nav_ {
		float: left;
		width: 50%;
		padding-left: 10%;
		display: flex;
		display: -webkit-flex;

	}

	.logo strong {
		position: relative;
		animation: one 3s infinite;
		animation-direction: alternate;
		-webkit-animation: one 3s infinite;
		-webkit-animation-direction: alternate;
	}

	.nav_  .item {
		flex: auto;
	}

	.nav_  .item:hover {
		background-color: #008000;
	}

	a {
		color: #fff;
		text-decoration: none;
	}

	@keyframes one {
		0% {
			left: 0;
			top: 0;
		}

		50% {
			left: 40%;
			top: 0;
		}

		100% {
			left: 0;
			top: 0;
		}
	}

	@-webkit-keyframes one {
		0% {
			left: 0;
			top: 0;
		}

		50% {
			left: 40%;
			top: 0;
		}

		100% {
			left: 0;
			top: 0;
		}
	}

	@-moz-keyframes one {
		0% {
			left: 0;
			top: 0;
		}

		50% {
			left: 40%;
			top: 0;
		}

		100% {
			left: 0;
			top: 0;
		}
	}

	@media only screen and (min-width: 768px) {
		.logo {
			float: left;
			width: 40%;
			font-size:22px;
		}
	}

	@media only screen and (max-width: 767px) {
		.logo {
			float: left;
			width: 40%;
			font-size:18px;
		}
	}
</style>
