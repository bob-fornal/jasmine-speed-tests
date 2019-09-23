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
| Multiple IT within DESCRIBE | TRUE | 4.294s |
| Multiple IT within DESCRIBE | FALSE | 4.375s |
| Single IT within many DESCRIBES | TRUE | 8.426s |
| Single IT within many DESCRIBES | FALSE | 8.380s |

In looking into these numbers, there was concern that the for-loops might have altered the test numbers.

Generated the following files to remove looping (1,000 tests each).

To run the non-iterative tests ...

```
$ jasmine spec/_multipleIt.2.spec.js -random:true
$ jasmine spec/_multipleIt.2.spec.js -random:false
$ jasmine spec/_singleIt.2.spec.js -random:true
$ jasmine spec/_singleIt.2.spec.js -random:false
```

Non-Iterative Results:

| Type | Random Run | Result |
|------|------------|--------|
| Multiple IT within DESCRIBE | TRUE | 0.534s |
| Multiple IT within DESCRIBE | FALSE | 0.545s |
| Single IT within many DESCRIBES | TRUE | 0.943s |
| Single IT within many DESCRIBES | FALSE | 0.959s |
