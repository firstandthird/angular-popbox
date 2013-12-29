
/*!
 * angular-popbox - Angular directive for popbox plugin
 * v0.3.1
 * https://github.com/firstandthird/angular-popbox
 * copyright First + Third 2013
 * MIT License
*/
angular.module('ftPopbox', [])
  .directive('popbox', function() {
    return {
      restrict: 'A',
      link : function(scope, el, attrs){
        var $el = $(el);
        var cls;
        var direction = attrs.popboxDirection || 'down';

        var updateElement = function(value) {
          cls.text = value;
          cls.template = null;
        };

        $el.popbox({
          direction: direction
        });
        cls = $el.data('popbox');

        var stopObserving = attrs.$observe('popbox', function(newValue) {
          updateElement(newValue);
        });

        var destroyDirective = function(){
          if (cls){
            stopObserving();
            cls.destroy();
            cls = null;
          }
        };

        scope.$on('$destroy', destroyDirective);
        el.one('$destroy', destroyDirective);
      }
    };
  });
