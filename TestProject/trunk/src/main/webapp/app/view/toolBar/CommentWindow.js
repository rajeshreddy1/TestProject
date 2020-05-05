Ext.define('ExtJS.view.toolBar.CommentWindow',{
	extend:'Ext.Window',
	title: 'Comment Window',
	modal: true,
	items: [{
		xtype: 'textarea',
		fieldLabel: 'Comment'
	}],
	buttons:[{
		text: 'Submit'
	}]
});