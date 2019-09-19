describe('speed testing', function() {
    const maxRuns = 10000;
  
    function singleIt() {
      describe('single it run', function() {
        it('something simple', function() {
          expect(true).toEqual(true);
        });
      });
    }
  
    describe('single it per describe', function() {
      for (let i = 0, len = maxRuns; i < len; i++) {
        singleIt();
      }
    });
  });