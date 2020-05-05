Ext.define('ExtJS.view.revionics.RevionicsCampaignEventGrid',{ 

    extend:'Ext.grid.Panel', 

    xtype: 'revionicsCampaignEventGrid', 

    //store:'PriceAndCostExecution.store.revionics.RevionicsCampaignEventStore', 

    columns:[{ 

        text: 'Event ID', 

        dataIndex:'eventId', 

        flex: 1 

    }, 

    { 

        text:'Event Name', 

        dataIndex: 'eventName', 

        flex: 1 

  

    }, 

    { 

        text: 'Event Type', 

        dataIndex: 'eventType', 

        flex: 1 

  

    }, 

    { 

        text:'Phase', 

        dataIndex: 'phase', 

        flex: 1 

  

    }, 

    { 

        text:'Start Date', 

        dataIndex:'startDate', 

        flex: 1 

  

    }, 

    { 

        text:'End Date', 

        dataIndex: 'endDate', 

        flex: 1 

  

    }, 

    { 

        text:'In Home Date', 

        dataIndex: 'inHomeDate', 

        flex: 1 

  

    }], 

    initComponent: function() { 

        var csadsm = Ext.create('Ext.selection.CheckboxModel', { 

            itemId:'cssamodel', 

            checkOnly : true 

        });             

         

        this.selModel = csadsm; 

         

        this.dockedItems =[{ 

            xtype: 'toolbar', 

            layout: 'hbox', 

            items:[{ 

                xtype: 'textfield', 

                fieldLabel: 'Campaign ID', 

                labelWidth:80 

            },{ 

                xtype : 'tbspacer', 

                width: 20 

            },{ 

                xtype: 'textfield', 

                fieldLabel: 'From', 

                margin:'0 0 0 9', 

                labelWidth:30 

            },{ 

                xtype: 'textfield', 

                fieldLabel: 'To', 

                margin:'0 0 0 5', 

                labelWidth:20 

            } 

            ] 

        }, 

        { 

            xtype: 'toolbar', 

            layout:'hbox', 

            items:[{ 

                text:'Confirm Selection', 

                icon:'icons/save.png' ,
				itemId: 'confirmSel'

            },{ 

                text:'Confirm All', 

                icon:'icons/database_save.png' 

            }] 

        }] 

        this.callParent(arguments); 

    } 

}); 