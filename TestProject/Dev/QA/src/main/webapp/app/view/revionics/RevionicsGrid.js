Ext.define('ExtJS.view.revionics.RevionicsGrid', { 

    extend:'Ext.grid.GridPanel', 
	requires:['ExtJS.view.toolBar.CommonToolBar'],

    xtype:'revionicsGrid', 

    height : 400, 

    width : 300, 

    store:'revionics.RevionicsStore',  

      // Adding columns to the grid 

    columns: [{ 

        text: 'campaignID', 

        dataIndex: 'campaignId', 

        width: 100, 

        align: "right", 

        flex:1, 

    },{ 

        text: 'HeaderName', 

        dataIndex: 'campaignName', 

        width: 300, 

        flex:1 

    },{ 

        text: 'Company Name', 

        dataIndex: 'companyName', 

        width: 200, 

        flex:1 

    },{ 

        text: 'Start Date', 

        dataIndex: 'startDate', 

        width: 100, 

        flex:1, 

        renderer: function(value) { 

            var dt = Ext.Date.parse(value, "Y-m-d"); 

            return Ext.util.Format.date(dt, "m-d-Y"); 

        }                    

    },{ 

        text: 'End Date', 

        dataIndex: 'endDate', 

        width: 100, 

        flex:1, 

        renderer: function(value) { 

            var dt = Ext.Date.parse(value, "Y-m-d"); 

            return Ext.util.Format.date(dt, "m-d-Y"); 

        }  

    },{ 

        text: 'Campaign Type', 

        dataIndex: 'campaignType', 

        width: 100, 

        flex:1 

    },{ 

        text: 'Status', 

        dataIndex: 'status', 

        width: 100, 

        flex:1 

    },{ 

        text: 'Author', 

        dataIndex: 'author', 

        width: 100, 

        flex:1 

    }], 

  

    initComponent: function() { 

         var csadsm = Ext.create('Ext.selection.CheckboxModel', { 

            itemId:'cssamodel', 

            checkOnly : true 

        });             

         

        this.selModel = csadsm;

                         

        this.dockedItems = [{ 

            xtype: 'toolbar', 

            layout: 'hbox', 

            items:[{ 

                xtype: 'combo', 

                itemId: 'campaignId', 

                fieldLabel: 'Campaign Type', 

                labelAlign: 'left', 

                labelWidth: 100, 

                allowBlank: false, 

                store: new Ext.data.SimpleStore({ 

                    fields: ['type1', 'type2'], 

                   // data : bedbath.common.campaigntype 

                }), 

                valueField:'type2', 

                displayField:'type1', 

                queryMode: 'local', 

                forceSelection: true, 

                editable: false, 

                tag: 'search', 

                msgTarget: 'title', 

                blankText:'This field is required', 

            }, 

            { 

                xtype: 'tbspacer', width: 50 

            }, 

            { 

                xtype: 'textfield', 

                itemId: 'campaignName', 

                fieldLabel: 'Campaign Name', 

                labelAlign: 'left', 

                labelWidth: 100, 

            }, 

            { 

                xtype: 'datefield', 

                itemId: 'startDate', 

                fieldLabel: 'Start Date', 

                labelAlign: 'left', 

                labelWidth: 70, 

                margin:'0 0 0 5', 

                //width: 250, 

                allowBlank: false 

            }, 

            { 

                xtype: 'tbspacer', 

                width: 25 

            }, 

            { 

                xtype: 'datefield',                                                       

                itemId: 'endDate', 

                fieldLabel: 'To', 

                labelAlign: 'left', 

                labelWidth: 100, 

                padding: '5 0 0 0', 

                labelWidth: 30, 

                //width: 250, 

                allowBlank: false 

            } 

            ] 

        },  
		{
			xtype:'CommomToolBar'
		},

        { 

            xtype: 'toolbar', 

            layout: 'hbox', 

            items:[{ 

                xtype: 'combo', 

                itemId: 'campaignId', 

                fieldLabel: 'Status', 

                labelAlign: 'left', 

                labelWidth: 100, 

                allowBlank: false, 

                store: new Ext.data.SimpleStore({ 

                    fields: ['type1', 'type2'], 

                   // data : bedbath.common.status 

                }), 

                valueField:'type2', 

                displayField:'type1', 

                queryMode: 'local', 

                forceSelection: true, 

                editable: false, 

                tag: 'search', 

                msgTarget: 'title', 

                blankText:'This field is required', 

            }, 

            { 

                xtype: 'tbspacer', width: 304 

            }, 

            { 

                xtype: 'datefield', 

                itemId: 'startDate', 

                fieldLabel: 'EndDate', 

                labelAlign: 'left', 

                labelWidth: 70, 

                margin:'0 0 0 5', 

                //width: 250, 

                allowBlank: false 

            }, 

            { 

                xtype: 'tbspacer',  

                width: 25 

            }, 

            { 

                xtype: 'datefield',                                                       

                itemId: 'endDate', 

                fieldLabel: 'To', 

                labelAlign: 'left', 

                labelWidth: 100, 

                padding: '5 0 0 0', 

                labelWidth: 30, 

                //width: 250, 

                allowBlank: false 

            } 

            ] 

        }, 

        { 

            xtype: 'toolbar', 

            items:[//{ 

//                iconCls: 'icon-add', 

//                text: i18n.text.add, 

//                action: 'addCampaignHeader'//, 

//                    //disabled: _signsDisabled 

//            },                 

            { 

                iconCls: 'icon-edit', 

                //text: i18n.text.edit, 

                text:'Select Campaign', 
				itemId : 'selectCampaign'
               // action: 'editCampaignHeader'//, 

                    //disabled: _signsDisabled 

            },     

//            { 

//                iconCls: 'icon-delete', 

//                text: i18n.text.deletea, 

//                action: 'deleteCampaignHeader', 

//                //action: 'deleteSignType'//, 

//                //disabled: _signsDisabled 

//            }, 

            { 

                xtype : 'tbfill' 

            }, 

            { 

                iconCls: 'icon-search', 

                text: 'search', 

                action: 'search', 

                itemId: 'searchBtn', 

               /* handler: function(){ 

                             

                    var grid = this.up('grid').getStore().load(); 

                } */

            }, 

            { 

                //icon: 'icons/cross.png', 

                text: 'clear', 

                itemId: 'clearBtn' 

            } 

            ] 

        },              

        { 

            xtype: 'pagingtoolbar', 

            dock:'bottom', 

           // store: 'PriceAndCostExecution.store.admin.campaignheader.CampaignHeaderStore', 

            displayInfo: true, 

            displayMsg: 'Displaying Results {0} - {1} of {2}', 

            emptyMsg: "No records to display"//, 

                //disabled: true 

        }              

        ]; 

        this.callParent(arguments); 

    }   

         

}); 