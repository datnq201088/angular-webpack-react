import angular from 'angular';
import Mylist from './components/mylist';
import React from 'react';

function myListComponent() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        template: '<div></div>',
        link: function(scope, el, attrs) {
                scope.$watchCollection('data', function(newValue, oldValue) {
                    console.log('changed');
                    if (!newValue.length)
                        return;
                    React.render(
                        <Mylist data={newValue} />,
                        el[0]
                    );
                    console.log('done!');
                });
        }
    }
}

export default angular.module('home.directives', [])
        .directive('myList', myListComponent);
