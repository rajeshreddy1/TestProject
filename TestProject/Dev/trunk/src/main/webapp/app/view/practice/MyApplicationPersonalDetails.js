Ext.define('ExtJS.view.practice.MyApplicationPersonalDetails',{
	extend:'Ext.panel.Panel',
	//title: 'Person Details',
	//height: 300,
	//autoscroll: true,
	xtype:'personal_details',
	margin:'10 10 10 10',
	items:[
	{

		xtype:'form',
		title:'Personal Info Form',
		itemId:'personForm',
		margin:'10 10 10 10',
		items:[
		{		

			xtype: 'textfield',
			fieldLabel:'Name',
			allowBlank: false,
			name: 'name',
			emptyText:'Enter Name'
		},
		{
			xtype: 'numberfield',
			allowBlank: false,
			fieldLabel: 'Age',
			name: 'age',
			emptyText: 'Enter Age',
			hideTrigger:true
		},
		{
			xtype: 'radiogroup',
			fieldLabel:'Gender',
			columns: 1,
			vertical: true,
			items:[
			{
				xtype: 'radio',
				cls:'container',
				boxLabel: 'Male',
				inputValue: 'M',
				name:'gender',
				checked: true
			},
			{
				xtype: 'radio',
				boxLabel: 'Female',
				inputValue: 'F',
				name:'gender'
			}
			]
		}],
		bbar:[
		'->',
		{
			xtype: 'button',
			text: 'Save',
			itemId: 'saveBtn',
			formBind: true
		}
		]
	},
	{
		xtype:'grid',
		title:'Sample Grid',
		store:'PersonStore',
		margin:'10 10 10 10',
		collapsible: true,
		//closable: true,
		height: 300,
		columns:[
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
	}
	]
	
});