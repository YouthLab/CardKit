
define([
    'dollar',
    './common/scaffold',
    './common/source_scaffold'
], function($, scaffold_specs, source_scaffold_specs){ 

var SEL = 'ck-card[type="box"]';

return function(guard, parent){
    guard.watch($(SEL, parent));
    guard.state({
        subtype: 'subtype',
        paperStyle: 'paper-style',
        plainStyle: 'plain-style',
        plainHdStyle: 'plain-hd-style'
    });
    guard.component(scaffold_specs);
    guard.component('content', 'ck-part[type="content"]');
    guard.source().component(source_scaffold_specs);
    guard.source().component('content', '.ckd-content');
};

});

