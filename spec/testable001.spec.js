var testable001 = function(testField) {
    if (testField === null || testField === undefined) {
        return 'invalid';
    }
    return 'valid';
};
var testable002 = function(testField) {
  if (typeof testField !== 'number') {
    return -1;
  }
  return testField * 2;
};
var testable003 = function(testField) {
  const maxLength = 10;
  return testField.substr(0, maxLength);
};
var testable004 = function(testField) {
  if (testField <= 0 || testField > 120) {
    return 'invalid age';
  }
  return 'valid age';
};

var state = {
  loggedIn: true
};
var testable005 = function(state, testField) {
  if (state.loggedIn !== true) {
    return false;
  }
  return testField;
}

describe('Negative Tests', function() {
  beforeEach(function() {
    state.loggedIn = true;
  });

  describe('testable001 [negative inputs]', function() {
    it('expects no parameter to short out correctly', function() {
      var result = testable001();
      expect(result).toEqual('invalid');
    });
    it('expects null to short out correctly', function() {
      var result = testable001(null);
      expect(result).toEqual('invalid');
    });
    it('expects undefined to short out correctly', function() {
      var result = testable001(undefined);
      expect(result).toEqual('invalid');
    });
  });

  describe('testable002 [negative inputs]', function() {
    it('expects string to short out correctly', function() {
      var result = testable002('not this text');
      expect(result).toEqual(-1);
    });
    it('expects null to short out correctly', function() {
      var result = testable002(null);
      expect(result).toEqual(-1);
    });
  });

  describe('testable003 [negative inputs]', function() {
    it('expects length to max out correctly', function() {
      var result = testable003('01234567890123456789');
      expect(result).toEqual('0123456789');
    });
  });

  describe('testable004 [negative inputs]', function() {
    it('expects age to handle zero correctly', function() {
      var result = testable004(0);
      expect(result).toEqual('invalid age');
    });
    it('expects age to handle -1 correctly', function() {
      var result = testable004(-1);
      expect(result).toEqual('invalid age');
    });
    it('expects age to handle 200 correctly', function() {
      var result = testable004(200);
      expect(result).toEqual('invalid age');
    });
  });

  describe('testable005 [negative inputs]', function() {
    it('expects logged out to be handled correctly', function() {
      state.loggedIn = false;
      var result = testable005(state, 'test');
      expect(result).toEqual(false);
    });
  });
});
