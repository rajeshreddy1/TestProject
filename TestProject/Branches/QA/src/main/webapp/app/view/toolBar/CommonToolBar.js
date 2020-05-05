Ext.define('ExtJS.view.toolBar.CommonToolBar',{
	extend:'Ext.tab.Panel',
	xtype: 'CommomToolBar',
	items: [{
		xtype: 'toolbar',
		layout:'hbox',
		items:[{
			text: 'Store Comments',
			itemId: 'storeComments'
		},{
			text: 'Excel',
			itemId: 'excelBtn'
		}
		]
	}]
});