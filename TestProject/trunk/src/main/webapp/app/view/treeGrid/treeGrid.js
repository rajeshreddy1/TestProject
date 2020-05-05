Ext.define('ExtJS.view.treeGrid.treeGrid', { 

    extend : 'Ext.grid.Panel', 
	xtype: 'treeGrid',
	title: 'Tree Grid',
	

	columns:[
		{
			xtype:'treecolumn',
			text: 'Name',
			dataIndex: 'name'
		},
		{
			text: 'Name',
			dataIndex: 'name',
			emptyText: '-----'
		},
		{
			text: 'Age',
			dataIndex: 'age',
			emptyText: '-----'
		},
		{
			text: 'Gender',
			dataIndex: 'gender',
			emptyText: '-----',
			renderer: function (value, opts, record){
				if(value === 'M')
					return 'Male'
				else if(value === 'F')
					return 'Female'
				else
					return 'Nothing'
			}
		},
		{
			text: 'Minority Status',
			renderer: function(value, opts, record){
				if (parseInt(record.get('age')) < 18)
					return 'Minor'
				else
					return 'Major'
			}
		}
		]
	
});
