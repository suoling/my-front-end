- 有没有用过apply(), bind(), call()这些方法，他们之间的区别
    - 这三者一般都是用来指定this环境的
    - call()
        - 通过在call方法，给第一个参数添加要把b添加到哪个环境中，简单来说，this就会指向那个对象。
        ```js
        var a = {
            user:"追梦子",
            fn:function(){
                console.log(this.user); //追梦子
            }
        }
        var b = a.fn;
        b.call(a);
        ```
        - call方法除了第一个参数以外还可以添加多个参数
            ```js
            var a = {
              user:"追梦子",
              fn:function(e,ee){
                  console.log(this.user); //追梦子
                  console.log(e+ee); //3
              }
            }
            var b = a.fn;
            b.call(a,1,2);
            ```
        - apply()
            - apply方法和call方法类似，但不同的是，apply方法的第二个参数必须是一个数组
            ```js
            var a = {
              user:"追梦子",
              fn:function(e,ee){
                  console.log(this.user); //追梦子
                  console.log(e+ee); //11
              }
            }
            var b = a.fn;
            b.apply(a,[10,1]); // 或者是 var arr = [10,1]  b.apply(a,arr)
            ```
        - ** 注意：** `如果call和apply的第一个参数写的是null，那么this指向的是window对象`
        - bind()
            - bind方法和call、apply方法有些不同。因为bind方法返回的是一个修改过后的函数
            ```js
            var a = {
              user:"追梦子",
              fn:function(){
                  console.log(this.user); //追梦子
              }
            }
            var b = a.fn;
            var c = b.bind(a);
            c();
            ```
            - bind也可以有多个参数，并且参数可以执行的时候再次添加，但是要注意的是，参数是按照形参的顺序进行的
            ```js
            var a = {
              user:"追梦子",
              fn:function(e,d,f){
                  console.log(this.user); //追梦子
                  console.log(e,d,f); //10 1 2
              }
            }
            var b = a.fn;
            var c = b.bind(a,10);
            c(1,2);
            ```
        - ** 总结：** `call和apply都是改变上下文中的this并立即执行这个函数，bind方法可以让对应的函数想什么时候调就什么时候调用，并且可以将参数在执行的时候添加`