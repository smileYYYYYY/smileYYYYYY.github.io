<template>
	<div>
		<Nav></Nav>
		<!-- 轮播图     start -->
		<div id="demo" class="carousel slide" data-ride="carousel">
			<!-- 指示符 -->
			<ul class="carousel-indicators">
				<li data-target="#demo" data-slide-to="0" class="active"></li>
				<li data-target="#demo" data-slide-to="1"></li>
				<li data-target="#demo" data-slide-to="2"></li>
			</ul>
			<!-- 轮播图片 -->
			<div class="carousel-inner">
				<div class="carousel-item active active_Time">
					<img src="../assets/a0.jpg">
					<div class="carousel-caption Time_">
						<h3>2019倒计时：</h3>
						<p>{{ `${day}天 ${h}小时 ${m}分钟 ${s}秒` }}</p>
					</div>
				</div>
				<div class="carousel-item">
					<img src="../assets/a1.jpg">
					<div class="carousel-caption ">
						<!-- <h3>第二张图片描述标题</h3>
          <p>描述文字!</p> -->
					</div>
				</div>
				<div class="carousel-item">
					<img src="../assets/a2.jpg">
					<div class="carousel-caption">
						<!-- <h3>第三张图片描述标题</h3>
          <p>描述文字!</p> -->
					</div>
				</div>
			</div>
			<!-- 左右切换按钮 -->
			<a class="carousel-control-prev" href="#demo" data-slide="prev">
				<span class="carousel-control-prev-icon"></span>
			</a>
			<a class="carousel-control-next" href="#demo" data-slide="next">
				<span class="carousel-control-next-icon"></span>
			</a>
		</div>
		<!-- 轮播图    end		 -->
		<!-- 选项卡切换   start-->
		<div class="items" id="demo">
			<router-link to="/" class="item active_">散文</router-link>
			<router-link to="/song" class="item">诗歌</router-link>
				<router-link to="/novel" class="item">博文</router-link>
		</div>
		<router-view></router-view>

		<!-- 选项卡切换    end -->
	</div>
</template>
<script>
	import $ from 'jquery'
	import Nav from '../components/Nav.vue'
	export default {
		name: 'Home',
		data() {
			return {
				day: 0,
				h: 0,
				m: 0,
				s: 0,
				isActive: false

			}
		},
		components: {
			Nav
		},
		mounted: function() {
			this.countdown(),
				this.demoList()
		},
		methods: {
			countdown: function() {
				const end = Date.parse(new Date('2019/12/31 24:00:00'))
				const now = Date.parse(new Date())
				const msec = end - now
				let day = parseInt(msec / 1000 / 60 / 60 / 24)
				let h = parseInt(msec / 1000 / 60 / 60 % 24)
				let m = parseInt(msec / 1000 / 60 % 60)
				let s = parseInt(msec / 1000 % 60)
				this.day = day
				this.h = h > 9 ? h : '0' + h
				this.m = m > 9 ? m : '0' + m
				this.s = s > 9 ? s : '0' + s
				const that = this
				setTimeout(function() {
					that.countdown()
				}, 1000)
			},
			demoList: function() {
				$(function() {
					$("#demo .item").click(function() {
						$(this).siblings().removeClass('active_'); // 删除其他兄弟元素的样式
						$(this).addClass('active_'); // 添加当前元素的样式
					});
				});
			}

		}
	}
</script>
<style scoped>

		.carousel img {
			width: 100%;
			height: 200px;
			margin-top: 5px;
		}

		.Time_ p {
			line-height: 40px;
			font-size: 18px;
			color: #fff;
		}

		.Time_ h3 {
			line-height: 50px;
			font-size: 30px;
			color: #e17052;
		}
	

	.items {
		display: flex;
		display: -webkit-flex;
		width: 100%;
		line-height: 30px;
		border-bottom: 1px solid #CCCCCC;
		color: #42b983;
	}

	.item {
		flex: auto;
		-webkit-flex: auto;
		font-weight: bold;
		font-size: 16px;
	}

	.active_ {
		color: #e96900;
		border-bottom: 1px solid #E17052;
		text-decoration: none;
	}

	a {
		color: #42b983;
	}
</style>
