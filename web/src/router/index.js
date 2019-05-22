import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Lists from '../pages/Lists.vue'
import Login from '../pages/Login.vue'
import Essay0 from '../pages/essay/Essay0.vue'
import Essay1 from '../pages/essay/Essay1.vue'
import Essay2 from '../pages/essay/Essay2.vue'
import Novel0 from '../pages/novel/Novel0.vue'
import Novel1 from '../pages/novel/Novel1.vue'
import Novel2 from '../pages/novel/Novel2.vue'
import Js0    from '../pages/novel/Js0.vue'

import Essay from '@/components/Essay'
import Novel from '@/components/Novel'
import Song from '@/components/Song'

Vue.use(Router);

export default new Router({
  
  routes: [
    {
      path: '/',
      component:Home,
      children:[
        {path:'/', name:'Essay', component:Essay},
        {path:'novel', name:'Novel', component:Novel},
				{path:'song', name:'Song', component:Song}
      ]
    },   
    {
      path:'/essay0',
      name:"Essay0",
      component:Essay0
    },
		{
		  path:'/essay1',
		  name:"Essay1",
		  component:Essay1
		},
		{
		  path:'/essay2',
		  name:"Essay2",
		  component:Essay2
		},
			{
			path:'/novel0',
			name:"Novel0",
			component:Novel0
		},
			{
			path:'/novel1',
			name:"Novel1",
			component:Novel1
		},
			{
			path:'/novel2',
			name:"Novel2",
			component:Novel2
		},
		{
			path:'/js0',
			name:"Js0",
			component:Js0
		},
		{
			path:'/login',
			name:'Login',
			component:Login
		},
		{
			path:'/lists',
			name:"Lists",
			component:Lists
		}
  ]
})
