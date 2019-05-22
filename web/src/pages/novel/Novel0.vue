<template>	
	<div class="article">
		<Nav></Nav>
		<h2>在vue单页应用中使用jquery</h2>
		<p>1.首选通过npm安装jquery</p>
		<p class="EM">npm install jquery --save</p>
		<p>2.在build/webpack.base.conf文件当中引入jquery，加如下代码</p>
		<p class="EM">'jquery': path.resolve(__dirname, '../node_modules/jquery/src/jquery')</p>
		<img src="../../assets/tt0.jpg" >			
		<p>3.在需要的地方</p>
		<img src="../../assets/tt1.jpg" ><br>
		<p>4.引入成功了</p>
		<img src="../../assets/tt2.jpg" >
	</div>
</template>
<script>
import Nav from '../../components/Nav.vue'
export default{
	name:'Novel0',
	data(){
		return{

		}
	},
	components:{
		Nav
	}
}
</script>
<style scoped>
p {
		/* text-indent: 26px; */
		font-size: 16px;
		line-height: 26px;
		color: #666;
	}

	.header_ {
		font-size: 16px;
		color: #677E8C;
		padding: 0 5px 10px 5px;
		border-bottom: 1px dashed #677E8C;
		text-align: left;
	}

	.title {
		font-size: 18px;
		font-weight: bold;
		line-height: 30px;
	}

	.time {
		color: #666;
		font-size: 14px;
	}
</style>