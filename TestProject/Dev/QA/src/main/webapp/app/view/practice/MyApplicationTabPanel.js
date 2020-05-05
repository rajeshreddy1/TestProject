Ext.define('ExtJS.view.practice.MyApplicationTabPanel',{
	extend:'Ext.tab.Panel',
	xtype:'myApp',
	
	//width:500,
	height:500,
	
	items:[
	{
		title: 'Personal Details',
		xtype:'personal_details'
	},
	{
		title: 'Tree Panel',
		xtype: 'treepanel',
		store: 'TreeTabStore'
	}
	,
	{
		xtype: 'revionics'
	},
	{
		xtype: 'treeGrid'
	}
	]
});