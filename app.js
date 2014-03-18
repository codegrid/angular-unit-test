(function() {

var app = angular.module('myApp', []);

app.value('members', [
  { name: "Kazuhito Hokamura" },
  { name: "Takeshi Takatsudo" },
  { name: "Akihiro Oyamada" },
  { name: "Kazunori Tokuda" },
  { name: "Yukihisa Yamada" }
]);

app.controller('MainCtrl', function($scope, members) {
  $scope.members = members;

  $scope.addMember = function() {
    $scope.members.push({ name: $scope.newName });
    $scope.newName = '';
  };
});

})();
