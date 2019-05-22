<template>
	<div class="List">
		<router-link :to="{path:'/js0'}">
			<ul class="header_">
				<li class="title">js获取当前年月日</li>
				<li class="time">2019年03月21日 发布:博文 | 分类:博文</li>
				<li>
					<p>
					获取当前各种格式输出（年/月/日/时/分/秒)，以及各种时间格式转化及输出
					</p>
				</li>
			</ul>
		</router-link>
		<router-link :to="{path:'/novel0'}">
				<ul class="header_">
					<li class="title">在vue单页应用中使用jquery</li>
					<li class="time">2019年02月21日 发布:博文 | 分类:博文</li>
					<li>
						<p>
						 用到的vue-cli建立的应用中引入jquery的方式。首选通过npm安装jquery。
						</p>
					</li>
				</ul>
        </router-link>
        <router-link :to="{path:'/novel1'}">
			<ul class="header_">
				<li class="title">vue引入公共的css的方法</li>
				<li class="time">2019年02月21日 发布:博文 | 分类:博文</li>
				<li>
					<p>
					vue引入公共的css及在对应的模板.vue文件中引入css的3种方法
					</p>
				</li>
			</ul>
       </router-link>
       <router-link :to="{path:'/novel2'}">
		 	<ul class="header_">
		 	<li class="title">vue项目引入bootstrap</li>
		 	<li class="time">2019年02月21日 发布:博文 | 分类:博文</li>
		 	<li>
		 		<p>
		 		在此之前，你应该能够搭建环境，使用vue-cli进行项目的创建。而后要在vue中引入bootstrap。
		 		</p>
		 	</li>
		 </ul>
      </router-link>
	</div>
</template>
<script>
	export default{
		name:'Novel',
		data(){
			return{

			}
		}
	}
</script>
<style scoped>
p {
		text-indent: 26px;
		font-size: 16px;
		line-height: 26px;
		color: #666;
	}

	.header_ {
		font-size: 16px;
		color:#42b983;
		padding: 0 5px 10px 5px;
		border-bottom: 1px dashed #CCCCCC;

		text-align: left;
	}

	.title {
		font-size: 16px;
		font-weight: bold;
		line-height: 30px;
	}

	.time {
		color: #666;
		font-size: 14px;
	}
</style>

</style>