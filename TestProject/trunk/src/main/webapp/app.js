Ext.Loader.setConfig({
	enabled: true
})

Ext.application({
	name: 'springMvc',
//	controllers:['MyApplicationController','revionics.RevionicsMainController'],
	launch: function(){
		var mainview = Ext.widget('mainview',{
			renderTo: Ext.getBody(),
			height: 700
		});
		mainview.down('myPanel').center();
	}
})