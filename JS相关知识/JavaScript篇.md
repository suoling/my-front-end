# JavaScript基础

## JavaScript的DOM和BOM

- childNodes与children区别
    - childNodes属性：
        - 返回指定元素的子元素集合，包括html节点、所有属性，文本。其中代码中的换行和空格都属于文本节点。其中可以通过属性nodeType来判断是哪种类型的节点
        - nodeType===1 -- 元素节点，nodeType===2 -- 属性节点，nodeType===3 -- 文本节点
        - `除了IE9和Firefox，其余的浏览器都支持通过childNodes[i]获取第i个子节点`
    - children属性：
        - 返回指定元素的子元素集合，只返回html节点
        - `除了IE9和Firefox，所有的浏览器都支持通过children[i]获取第i个子节点`
        - `注意：children在IE中包含注释节点`

- firstChild与firstElementChild区别
    - firstChild属性：
        - 获取指定元素的第一个子节点，可以是html节点，也可以是文本节点
	      - `问题：`若父元素与第一个子元素之间存在空白节点，firstChild获取到的将是空白节点而不是第一个子元素
	      - `解答：`使用firstElementChild属性。
	      - `问题：`E6/7/8中不支持firstElementChild属性
	      - `解答：`使用children[0]属性
    - firstElementChild属性：
        - 获取指定元素的第一个子元素节点，不会检测到文本节点。
    - `注意：`
        - 获取指定元素的最后一个子节点
            - lastChild与lastElementChild用法同上
	      - 获取指定元素的前一个子节点
            - previousSibing与previousElementSibling用法同上
	      - 获取指定元素的下一个子节点
            - nextSibling与nextElementSibling用法同上

- innerHTML、innerText、outerHTML、outerText区别
    - `注意：`innerText和outerText只在chrome浏览器中有效
	  - `上述四个属性，输出的内容包括空格`
    - innerHTML属性：
        - 输出`当前标签的文本内容`，如果标签内有子标签，会连`子标签本身和子标签内的文本内容`一起输出
    - innerText属性：
        - 只输出当前标签内的`文本内容`，如果标签内有子标签，那么也只输出`子标签内的文本内容`
    - outerHTML属性：
        - 输出`当前标签的本身和标签内的文本内容`，如果有子标签，那么子标签本身和标签内的文本内容也将一起输出
    - outerText属性：
        - 只输出当前标签内的`文本内容`，如果标签内有子标签，那么也只输出子标签内的文本内容

- JavaScript获取节点
    - `parentNode`与`parentElement`都是用来获取当前元素的直接父元素的，它们之间的区别
        - parentNode是W3C标准
	      - parentElement是IE标准
    - `offsetParent获取所有父节点，这个对应的值是body下的所有节点信息`

## JavaScript基础

- 数组API
    - push、unshift、pop、shift、join、reverse、`slice`、`splice`、`sort`、toString、
    indexof、lastIndexOf、`concat`、foreach、map、filter、every、some
    - `上述API中改变原数组的有：push、unshift、pop、shift、reverse、splice、sort`
    - `上述API中没有改变原数组的有：join、slice、toString、indexOf、lastIndexOf、concat`
    - push、unshift：返回数组长度
    - pop、shift：返回被删除元素
    - 数组转字符串的方法：arr.toString()、String(arr)、arr.join()
    - `slice用法：`获取子数组  var subArr=arr.slice(starti,endi+1)
        - 获得arr中starti位置开始，到endi位置的所有元素组成的新数组。`注意：含头不含尾`
	      - 省略第二个参数：表示从starti一直取到结尾
        - 可支持负数参数：-n表示倒数n个元素
        - 传参不合法时，返回空数组
    - `splice用法：`删除，插入，替换。`注意：直接修改原数组`
        - `删除：`var deletes=arr.splice(starti,n)
            - 删除arr中starti位置开始的n个元素
            - 返回被删除的元素组成的临时新数组
	      - `插入：`arr.splice(starti,0,值1,值2,...)
            - 在arr中starti位置，插入新值。旧值被向后顺移
            - `强调：`要插入的值，只能以单独的参数传入，不支持打散数组参数
        - `替换：`var deletes=arr.splice(starti,n,值1,值2,...)
            - 删除arr中starti位置开始的n个元素，再在starti位置插入新元素
            - 删除的元素个数和插入的新元素个数不必相等
        - `注意：`splice用法中的插入和替换，不同之处在于第二个传参。实现`插入`功能的第二个传参为0，实现`删除`功能的第二个传参为要删除元素的个数
    - `sort用法：`特点：将arr中的元素，以字符串方式升序  `注意：直接修改原数组`
    - `concat用法：`连接 var newArr=arr1.concat(值1,值2,arr2,...)
        - 将concat后的内容，和arr1拼接，组成新数组返回
        - `强调：`concat的参数中包含数组，则打散数组，以单个元素拼接

- 字符串API
    - split、charAt、charCodeAt、concat、slice、substr、substring、indexOf、lastIndexOf、 trim、match、search、replace、toLowerCase、toUpperCase、toLocaleLowerCase、 toLocaleUpperCase
    - 上述API都不改变原字符串
    - 访问字符串中特定字符的方法
        - charAt()：返回指定位置的字符
        - charCodeAt()：返回指定位置的字符的字符编码
        - 通过方括号加字符索引。`注意：IE7以及更早的版本不支持`
    - 拼接字符串的方法
        - concat()：专门用来拼接字符串的方法，该方法可以接受任意多个参数，返回拼接得到的新字符串
        - 通过加号操作符'+'
    - 截取字符串的方法
        - slice()和substring(),两个方法的传参都是索引值。`注意：含头不含尾`
        - substr()：传参中的第一个参数和slice()方法一样，而第二个参数是要截取字符串的个数
        - 传参中有负数的情况
            - slice()：传入的负值与字符串的长度相加，传参不合法（第二个参数大于第一个参数），返回空字符串
            - substring()：将所有负值参数都转换为0，如果传参不合法（第二个参数大于第一个参数）。会自动替换两个参数的位置
            - substr()：将第一个传入的负值与字符串的长度相加，而第二个负值转换为0
            -
            ```js
            var str = 'abcdefghijklmn'
            var str1 = str.slice(8, -9)
            // 上述代码等同于 var str1 = str.slice(8, 5)  此时传参不合法
            console.log(str1) // ''
            var str2 = str.substring(8, -9)
            // 上述代码等同于 var str2 = str.substring(8, 0) 此时传参不合法，替换两参数的位置
            // 上述代码再次等同于 var str2 = str.substring(0, 8)
            console.log(str2) // 'abcdefgh'
            ```
    - 获取字符串中特定字符的位置
        - indexOf()和lastIndexOf()与数组的相似
        - `注意：`
            - 前者从前往后搜索，后者从后往前搜索
            - 第二个参数指定从字符串的哪个位置开始搜索
    - 字符串大小写转换
        - toLowerCase()和toUpperCase()是两个经典的方法
        - toLocaleLowerCase()和toLocaleUpperCase()是针对特定地区的
    - 字符串模式匹配
        - match()
            - 接受一个正则作为参数，用来匹配一个字符串，它的输出结果在不是全局匹配的情况下和exec方法的结果一致即一个数组并带有额外的属性，如果采用全局匹配，则不返回任何和其被匹配字符串相关的信息，只返回匹配的结果。
            - 非全局匹配代码：
            ```js
            var reg2=/(\w)s(\w)/
            var str2="ws1estqsa"
            var result=str2.match(reg2)
            console.log(result) // 结果如下，此时的str2.match(reg2) 和 reg2.exec(str2) 的结果是一样的
            ```
            - ![match()和exec()方法非全局匹配结果](./regExpPic/md文件中的img/1.1.png)
            - 全局匹配代码：
            ```js
            var reg2=/(\w)s(\w)/g
            var str2="ws1estqsa"
            var result=str2.match(reg2)
            console.log(result) // 结果如下，此时的str2.match(reg2)是所有结果组成的数组，而 reg2.exec(str2)是匹配到的n个数组，其中每个数组包括的详细信息和非全局匹配的信息一样
            ```
            - ![match()和exec()方法全局匹配结果](./regExpPic/md文件中的img/1.2.png)
        - search()
            - 用来查找第一次匹配的子字符串的位置，如果找到就返回一个number类型的index值，否则返回-1,它返回的只是第一次匹配的位置。它接受一个正则或者子字符串为参数
            ```js
            var str="hellO world"
            console.log(str.search('o')) // 7
            console.log(str.search(/o/g)) // 7
            console.log(str.search(/o/gi)) // 4
            ```
        - replace()
            - 用来将字符串中的某些子串替换为需要的内容，接受两个参数，第一个参数可以为正则或者子字符串，表示匹配需要被替换的内容，第二个参数为被替换的新的子字符串。如果声明为全局匹配则会替换所有结果，否则只替换第一个匹配到的结果。
            ```js
            var str="hello world,hello test"
            console.log(str.replace('hello', 'hi')) // hi world,hello test
            console.log(str.replace(/hello/, 'hi')) // hi world,hello test
            console.log(str.replace(/hello/g,'hi')) // hi world,hi test
            ```
        - split()
            - 用来将一个字符串拆分成一个数组，它接受一个正则或者子字符（串）作为参数，返回一个数组，简单情况下，我们不需要使用正则，`只有在字符串拆分规则不统一的情况下才需要使用正则`
            ```js
            var str="how|old*are    you"
            var arr=str.split(/\||\*|\s+/)
            console.log(arr) // [how, old, are, you]
            ```
