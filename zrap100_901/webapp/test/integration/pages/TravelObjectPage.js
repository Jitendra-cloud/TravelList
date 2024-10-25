sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zrap100901',
            componentId: 'TravelObjectPage',
            contextPath: '/Travel'
        },
        CustomPageDefinitions
    );
});