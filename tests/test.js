describe('MainCtrl', function() {
  // 対象モジュールの読み込み
  beforeEach(module('myApp'));

  // 対象コントローラーの初期化
  var scope, members;
  beforeEach(inject(function($controller, $rootScope) {
    // MainCtrlの関数に渡すモックのデータをつくる
    scope = $rootScope.$new();
    members = [];

    // MainCtrlの関数を実行する
    $controller('MainCtrl', { $scope: scope, members: members });
  }));

  describe('scope.members', function() {
    it('membersサービスのデータが設定されること', function() {
      expect(scope.members).to.be(members);
    });
  });

  describe('scope.addMember', function() {
    beforeEach(function() {
      scope.newName = 'new user!';
      scope.addMember();
    });

    it('scope.newNameの値がscope.membersに追加されること', function() {
      expect(scope.members).to.eql([{ name: 'new user!' }]);
    });

    it('scope.newNameの値が空になること', function() {
      expect(scope.newName).to.be('');
    });
  });
});
