sap.ui.define(['sap/ui/core/Control'], function(Control) {
    'use strict';
    return Control.extend('sap.ui.demo.basicTemplate.webcomponentcontrol.BadgeControl', {
        metadata: {},
        init: function() {},
        renderer: function(oRM, oControl) {
            oRM.write('<div>');
            oRM.write("<fd-badge status='error' modifier='pill'>Badge Error</fd-badge>");
            oRM.write('</div>');
        },
    });
});
