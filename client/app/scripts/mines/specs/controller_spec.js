'use strict';


describe('Controller: minesweeper', function () {

  beforeEach(module('Minesweeper'));
  // beforeEach(module('underscore'));

  var controller;
  var scope;

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('minesweeper', { $scope: scope });
  }));

  describe('On instance', function () {
    it('should set "controller_loaded" variable in scope', function () {
      expect(scope.controller_loaded).toContain('loaded');
    });
  });

   describe('reglas del juego', function (){
    it('crear matriz con dos minas', function(){
      var matriz = [['*','',''],['','',''],['','*','']];
      expect(scope.crearMatriz).toEqual(matriz);
    });

     it('seleccionar celda 2,2 y dar el valor de 1', function(){
        var mina=scope.seleccionarCelda(2,2);
        expect(mina).toBe(1);
    });

     it('seleccionar celda 1,1 y dar el valor de 2', function(){
        var mina=scope.seleccionarCelda(1,1);
        expect(mina).toBe(2);
    });

    it('seleccionar celda 0,2 y dar el valor de 0', function(){
       
        var mina=scope.seleccionarCelda(0,2);
        expect(mina).toBe(5);
    });

    it('seleccionar celda 1,0 y dar el valor de 2', function(){
        var mina=scope.seleccionarCelda(1,0);
        expect(mina).toBe(2);
    });

     it('seleccionar celda 0,0 y dar el valor de Game Over', function(){
        var mina=scope.seleccionarCelda(0,0);
        expect(mina).toBe('Game Over');
    });


   });

  describe('when going to /minesweeper', function () {

    var route, location, rootScope, httpBackend;

    beforeEach(inject(function ($route, $location, $rootScope, $httpBackend) {
      route = $route;
      location = $location;
      rootScope = $rootScope;
      httpBackend = $httpBackend;

      httpBackend.when('GET', 'scripts/mines/views/minesweeper.html').respond('<div></div>');
    }));

    afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should use minesweeper.html and controller', function () {
      expect(route.current).toBeUndefined();

      location.path('/minesweeper');

      httpBackend.flush();

      expect(route.current.templateUrl).toBe('scripts/mines/views/minesweeper.html');
      expect(route.current.controller).toBe('minesweeper');
    });
  });

});
