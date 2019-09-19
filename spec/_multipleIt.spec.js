describe('speed testing', function() {
    const maxRuns = 10000;
  
    function multipleIt() {
      it('something simple', function() {
        expect(true).toEqual(true);
      });
    }
  
    describe('multiple its per describe', function() {
      describe('wrapper', function() {
        for (let i = 0, len = maxRuns; i < len; i++) {
          multipleIt();
        }  
      });
    });
  });