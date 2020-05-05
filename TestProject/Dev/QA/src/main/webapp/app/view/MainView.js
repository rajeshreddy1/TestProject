Ext.define('ExtJS.view.MainView',{
	extend: 'Ext.panel.Panel',
	xtype: 'mainview',
	width:'100%',
	height:'100%',
	overflowX: false,
	overflowY: false,
	title: '<h1>MyApplication</h1>',
	
	items:[
	{
		xtype: 'myPanel'
	}
	
	]
});