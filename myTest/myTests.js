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