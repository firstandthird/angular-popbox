angular.module('ftPopbox', [])
  .directive('popbox', ['$parse', function($parse) {
    return {
      restrict: 'A',
      link : function(scope, el, attrs){
        var $el = $(el);
        var cls;
        var direction = attrs.popboxDirection || 'down';

        var updateElement = function(value) {
          cls.setText(value);
        };

        $el.popbox({
          direction: direction
        });
        cls = $el.data('popbox');

        attrs.$observe('popbox', function(newValue) {
          updateElement(newValue);
        });

        if (attrs.popboxClick) {
          var clickedFn = $parse(attrs.popboxClick);
          $el.on('popboxClick', function() {
            scope.$apply(function() {
              clickedFn(scope, {});
            });
          });
        }


        var destroyDirective = function(){
          if (cls){
            cls.destroy();
            cls = null;
          }
        };

        scope.$on('$destroy', destroyDirective);
        el.one('$destroy', destroyDirective);
      }
    };
  }]);
