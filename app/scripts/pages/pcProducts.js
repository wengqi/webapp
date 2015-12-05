;(function(MyAppPcProducts, undefined) {
    var html = require('../../views/pcProducts/pcProducts.html');
    var tmp = require('../../views/pcProducts/_pcList.tpl');

    MyAppPcProducts.route = function() {

        MyAppServices.getPcList().done(function(data) {
            $('#main').html(html);
            var source = {
                localData: data,
                dataType: "array"
            };
            var dataAdapter = new $.jqx.dataAdapter(source);

            $("#dataTable").jqxDataTable({
                width: 640,
                source: dataAdapter,
                sortable: true,
                pageable: true,
                pageSize: 2,
                pagerButtonsCount: 5,
                enableHover: false,
                selectionMode: 'none',
                rendered: function() {
                    
                },
                columns: [{
                    text: 'Products',
                    align: 'left',
                    dataField: 'model',
                    // row - row's index.
                    // column - column's data field.
                    // value - cell's value.
                    // rowData - rendered row's object.
                    cellsRenderer: function(row, column, value, rowData) {
                        var laptops = rowData.laptops;
                        var container = tmp.render({"laptops": laptops});

                        // var container = "<div>";
                        // for (var i = 0; i < laptops.length; i++) {
                        //     var laptop = laptops[i];
                        //     var item = "<div style='float: left; width: 210px; overflow: hidden; white-space: nowrap; height: 265px;'>";
                        //     var image = "<div style='margin: 5px; margin-bottom: 3px;'>";
                        //     var imgurl = laptop.img;
                        //     var img = '<img width=160 height=120 style="display: block;" src="' + imgurl + '"/>';
                        //     image += img;
                        //     image += "</div>";
                        //     var info = "<div style='margin: 5px; margin-left: 10px; margin-bottom: 3px;'>";
                        //     info += "<div><i>" + laptop.model + "</i></div>";
                        //     info += "<div>Price: $" + laptop.price + "</div>";
                        //     info += "<div>RAM: " + laptop.ram + "</div>";
                        //     info += "<div>HDD: " + laptop.hdd + "</div>";
                        //     info += "<div>CPU: " + laptop.cpu + "</div>";
                        //     info += "<div>Display: " + laptop.display + "</div>";
                        //     info += "</div>";
                        //     var buy = "<button class='buy' style='margin: 5px; width: 80px; left: -40px; position: relative; margin-left: 50%; margin-bottom: 3px;'>Buy</button>";
                        //     item += image;
                        //     item += info;
                        //     item += buy;
                        //     item += "</div>";
                        //     container += item;
                        // }
                        // container += "</div>";
                        return container;
                    }
                }]
            });

            var tmpHtml = tmp.render({
                "pcs": data
            });
        })
    }

})(window.MyAppPcProducts = window.MyAppPcProducts || {});
