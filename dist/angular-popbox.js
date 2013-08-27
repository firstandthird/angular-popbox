/*!
 * angular-popbox - Angular directive for popbox plugin
 * v0.1.0
 * 
 * copyright Greg Allen 2013
 * MIT License
*/
(function(){
  angular.module('popbox',[])
      .directive('popbox', [function(){
        return {
          restrict: 'A',
          scope : {
            popboxText : '='
          },
          link : function(scope, el, attrs){
            var $el = $(el),
                direction = attrs.popboxDirection || 'down',
                updateElement = function(value){
                  scope.popbox.text = value;
                };

            $el.popbox({ direction : direction });
            scope.popbox = $el.data('popbox');

            scope.$watch('popboxText',function(newValue){
              updateElement(newValue);
            });
          }
        };
      }]);
})();