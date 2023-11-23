## Javascript Execution Context
### JS executes the code in 2 phases
- GlobalExecutionContext => this
    - the value of "this" is different for different enviornment
    - "this" in browser, gets the Window Object
    - "this" in Node Env, gets the {}
- FunctionalExecutionContext, execution of functions

- Eval, generally used in MongoDb

![Execution Context](image.png)

## CallStack
keeps the track of the execution contexts
- the global Execution Context
- Function Execution Context

It works based on LIFO(Last In First Out).
![CallStack](image-1.png)
