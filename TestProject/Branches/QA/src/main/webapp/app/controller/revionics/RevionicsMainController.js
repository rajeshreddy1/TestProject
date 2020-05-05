Ext.define('ExtJS.controller.revionics.RevionicsMainController',{
	extend:'Ext.app.Controller',
	alias:'controller.revionicscontroller',
	views:['revionics.RevionicsTabPanel','revionics.RevionicsGrid','revionics.RevionicsCampaignEventGrid','ExtJS.view.toolBar.CommentWindow'],
	stores:['revionics.RevionicsStore','revionics.RevionicsCampaignEventStore'],
	init: function(){
		this.control({
			'revionicsGrid':{
				cellclick: this.onCellClick
			},
			'#updateBtn':{
				click: this.onClickEvent
			},
			'#cancelBtn':{
				click: this.onClickCancel
			},
			'#clearBtn':{
				click: this.onClearClick
			},
			'#selectCampaign':{
				click: this.onAddData
			},
			'#addBtn': {
				click: this.onDataAddBtn
			},
			'#confirmSel':{
				click: this.onConfirmAll
			},
			'#searchBtn':{
				click: this.onSearch
			},
			'#storeComments':{
				click: this.onStoreComments
			}
		});
			
	},
	onCellClick: function(view,p2,cellIndex,record,p5){
		var col = view.panel.columns[cellIndex];
		
		var dataIndex = col.dataIndex;
	//	var dataIndex = view.panel.getColumnModel().getDataIndex(cellIndex); 
		if((dataIndex === null) ||(dataIndex === ""))
			return;
		var window = Ext.widget('window',{
			width: 300,
			height:300,
			title: 'window',
			itemId:'mywindow',
			displayKey: record,
			closable: true,
			items:[{
				xtype: 'textfield',
				itemId:'campaignText',
				fieldLabel: 'campaign Id',
				value:record.get('campaignId')
			},{
				xtype: 'textfield',
				itemId: 'campaigntypeText',
				fieldLabel: 'campaign Type',
				value: record.get('campaignType')
			}
			],
			buttons:[{
				text: 'update',
				itemId:'updateBtn'
			},{
				text: 'cancel',
				itemId: 'cancelBtn'
			}]
		});
	
		window.show();
	},
	
	onClickEvent: function(btn){
		var win = btn.up('#mywindow');
		var record = btn.up('#mywindow').displayKey;
		
		var value1 = btn.up('#mywindow').down('#campaignText').getValue();
		var value2 = btn.up('#mywindow').down('#campaigntypeText').getValue();
		record.set('campaignId', value1);
		record.set('campaignType',value2);
		win.close();
	},
	
	onClickCancel: function(btn){
		var win = btn.up('#mywindow');
		win.close();
	},
	
	onClickCancel: function(btn){
		var win = btn.up('#addwindow');
		win.close();
	},
	
	onClearClick: function(btn){
		//debugger;
		var grid = Ext.ComponentQuery.query('revionicsGrid')[0];
		var record = grid.getSelectionModel().getSelection();
		var value = record[0].get('author');
		if (record.length == 0){
			Ext.Msg.alert('Status', 'No Data found');
			return;
		}
		if (value === "c"){
			 Ext.Msg.show({
			 title:'Delete',
			 msg: 'Unable to delete',
			 buttons: Ext.Msg.YESNOCANCEL,
			 icon: Ext.Msg.QUESTION
			});
		}
		else
			grid.getStore().remove(record);
	},
	
	onAddData: function(){
		var window = Ext.widget('window',{
			width: 300,
			height:300,
			title: 'window',
			itemId:'addwindow',
			//displayKey: record,
			closable: true,
			items:[{
				xtype:'form',
				items:[{
					xtype: 'textfield',
					itemId:'campaignText',
					name: 'campaignId',
					fieldLabel: 'campaign Id',
			//	value:record.get('campaignId')
					},{
						xtype: 'textfield',
						itemId: 'campaigntypeText',
						name: 'campaignType',
						fieldLabel: 'campaign Type',
					//	value: record.get('campaignType')
					}
					],
					buttons:[{
						text: 'add',
						itemId:'addBtn'
					},{
						text: 'cancel',
						itemId: 'cancelBtn'
					}]
			}]
		});
	
		window.show();
		
	},
	
	onDataAddBtn: function(btn){
		
	var value = btn.up('form').getForm().getValues();
	//debugger;
	var grid = Ext.ComponentQuery.query('revionicsGrid')[0];
	var store = grid.getStore();
	store.add(value);
		
		
	},
	
	
	onConfirmAll: function(){
		
		Ext.create('ExtJS.view.toolBar.CommentWindow').show();
	},
	
	onSearch: function(){
		
		Ext.create('ExtJS.view.toolBar.CommentWindow').show();
	},
	
	onStoreComments: function(){
		
		Ext.create('ExtJS.view.toolBar.CommentWindow').show();
	}
});