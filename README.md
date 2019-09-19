# speed-tests

This is code that I used to test a pattern someone indicated changed the speed and performance of Jasmine.

The code here is proof of the concepts shown in the article.

To run the tests ...

```
$ jasmine spec/_multipleIt.spec.js -random:true
$ jasmine spec/_multipleIt.spec.js -random:false
$ jasmine spec/_singleIt.spec.js -random:true
$ jasmine spec/_singleIt.spec.js -random:false
```

Initial Results:

| Type | Random Run | Result |
|------|------------|--------|
| Multiple IT within describe | TRUE | 4.294s |
| Multiple IT within describe | FALSE | 4.375s |
| Single IT within many describes | TRUE | 8.426s |
| Single IT within many describes | FALSE | 8.380s |
