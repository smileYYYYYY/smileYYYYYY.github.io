	<template>
		<div class="article">
			<Nav></Nav>

			<h2>js获取当前时间</h2>
			<p>var ti=ul0.getElementsByTagName("li")[13];
				<br/>function Time(){
				<br/>var newtime=new Date('2019/11/12 00:00:00');
				<br/>var nowtime=new Date();
				<br/>var tt0=newtime.getTime()-nowtime.getTime();
				<br/>var tt=Math.floor(tt0/1000);
				<br/>var ttd=Math.floor(tt/86400);
				<br/>tt%=86400;
				<br/>var tth=Math.floor(tt/3600);
				<br/>tt%=3600;
				<br/>var ttm=Math.floor(tt/60);
				<br/>var tts=tt%60;
				<br/>var ttStr=ttd+'/'+tth+'/'+ttm+'/'+tts;
				<br/>ti.innerHTML=ttStr;
				<br/>}
				<br/>Time();
				<br/>setInterval(Time,1000);</p>
			</div>			
		</template>
		<script>
	import Nav from '../../components/Nav.vue'
		export default{
			name:'Js0',
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
	
		</style>