describe('angular-popbox', function() {
  var element,
      $scope;

  beforeEach(module('ftPopbox'));
  beforeEach(inject(function($compile,$rootScope){
    $scope = $rootScope;
    $scope.text = 'text';
    element = angular.element('<a href="#" popbox="Hey, this is cool {{text}}" popbox-direction="up">Test</a>');
    $compile(element)($scope);
    $scope.$digest();
  }));

  it('should attach popbox plugin to the element', function(){
    expect(element.data('popbox')).toBeDefined();
  });
  it('should have a watcher on popbox', function(){
    expect(element.data().$scope.$$watchers.length).toBe(1);
  });
  it('should provide use the direction provided on popbox-direction', function(){
    expect(element.data('popbox').direction).toBe('up');
  });

  describe('destroy',function(){
    beforeEach(function(){
      $scope.$destroy();
    });
    it('should have emptied the DOM node', function(){
      expect(element.text()).toBe('');
    });
    xit('shouldn\'t have any more watchers', function(){
      expect(element.data().$scope.$$watchers.length).toBe(0);
    });
  });
});