angular.module('ftPopbox', [])
  .directive('popbox', function($parse) {
    return {
      restrict: 'A',
      link : function(scope, el, attrs){
        var $el = $(el);
        var cls;
        var direction = attrs.popboxDirection || 'down';

        var updateElement = function(value) {
          console.log(arguments);
          cls.text = value;
          cls.template = null;
        };

        $el.popbox({
          direction: direction
        });
        cls = $el.data('popbox');

        attrs.$observe('popbox', function(newValue) {
          updateElement(newValue);
          console.log('update', arguments);
        });

      }
    };
  });
