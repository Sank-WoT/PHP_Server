QUnit.test( "test", function( assert ) 
{
  assert.ok( 3 == "3", "Passed!" );
});

QUnit.test('isEven()', function(assert) 
           {
    assert.ok(isEven(0), 'Ноль - четное число');
    assert.ok(isEven(2), 'Два - тоже');
    assert.ok(isEven(-4), 'И отрицательное четыре - тоже четное число');
    assert.ok(!isEven(1), 'Один - нечетное число');
    assert.ok(!isEven(-7), 'Как и отрицательное семь - нечетное число');
    assert.ok(isEven(-8), 'Как и отрицательное семь - нечетное число');
    assert.equal(sqre(10), 100, "Работает");
});

  QUnit.test('formationInterval()', function(assert) 
  {
      assert.equal(formationInterval(1467370172, 600), 1467370740, "функция формирования промежутка исправна" );
  });

  QUnit.test('adresReqestal()', function(assert) 
  {
      var s ="https://myfirstphpapp-skro.rhcloud.com/get_currency.php?time=1467370740&limit=200&sign=eurusd";
      assert.equal(adresReqest(1467370740, "eurusd" ,200), s , "функция формирования адреса исправна" );
      s ="https://myfirstphpapp-skro.rhcloud.com/get_curre0&limit=200&sign=eurusd";
      assert.notEqual(adresReqest(1467370740, "eurusd" ,200), s , "функция формирования адреса исправна (проверка на отрицание)" );
  });

  QUnit.test('adresReqestInterval()', function(assert) 
  {
      var s ="https://myfirstphpapp-skro.rhcloud.com/get_currency.php?time=1467370740&limit=200&sign=usdjpy&ftime=1467370140";
      assert.equal(adresReqestInterval(1467370140, "usdjpy", 200, 600), s , "функция формирования адреса исправна" );
      s ="https://myfirstphpapp-skro.rhcloud.com/get_curre0&limitgdgf200&sign=usdjpy";
      assert.notEqual(adresReqestInterval(1467370140, "usdjpy", 200, 600), s , "функция формирования адреса исправна (проверка на отрицание)" );
  });

   QUnit.test('Parser()', function(assert) 
  {
      var s ="10000,1.4523,1.354";
      var m = [[10000, 1.4523,1.354]];
      assert.notEqual(Parser(s), m , "функция формирования адреса исправна" );
  }); 
 
  QUnit.test('convTime()', function(assert) 
  {
      var s = new Date(0);
      var p = [0,1];
      assert.equal(convTime(s , p), 60 , "функция формирования адреса исправна" );
  });
  