//onload，所有页面资源加载完成再执行下面的代码
window.onload=function(){
	//创建一个vue实例
	new Vue({
	el:"#root",
	data:{
		name:'leezhou',
		text:'',
		age:20,
		obj:{name:'xxx'},
		lists:[
		{name:'手机',state:'0'},
		{name:'IPAD',state:'1'},
		{name:'包',state:'0'},
		{name:'jimmychou',state:'1'}
		],
	},
	methods:{
		add:function(name){
			if(name){
				this.lists.unshift({name:name,state:'0'});
				this.text='';
				
			}
		},
		//es6写法,不识别
		del(index){
			//删除数组中指定位置的值,清楚index位置，1个值
			this.lists.splice(index,1);
		},
		/*del:function(index){
			this.lists.splice(index,1);
		}*/
		
	},
	//过滤器
	filters:{
		stateFilter:function(type){
			switch(type){
				case '0':
				    return '未采购';
				case '1':
				    return '采购中';
				case '2':
				    return '已采购';
				default:
				    return '';
				
			}
		}
	}
})

}
