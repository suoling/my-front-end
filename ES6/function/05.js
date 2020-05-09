// function Timer() {
//     this.s1 = 0;
//     this.s2 = 0;
//     // 箭头函数
//     setInterval(() => {
//         this.s1++;
//         console.log('arrow this:', this);
//     }, 1000);
//     // 普通函数
//     setInterval(function () {
//         console.log('this:', this)
//       this.s2++;
//     }, 1000);
//   }
wg = 'wg'
var vg = 'vg'
var va = 'g_a'
this.gg = 'gg'
  
  function a(){
      this.aa = 'aa'
      function suba(){
          this.suba = 'suba';
      }
      suba();
      console.log('a' + this)
  }

  var b = function(){
      this.bb = 'bb'
      function subb(){
          this.subb = 'subb'
      }
      subb()
      console.log('b' + this);
  }

  var json = {
      'ww':'w-1',
      'wa':'wa',
      'b': function(){
          this.json_bb = 'json_bb'
      },
      'cc': {
          'ww':'w-2',
          getFullName: function(){
              console.log('======'+this.wa)
              return this.ww
          }
      }
  }

  setInterval(function(){
      this.ss ++
  },3000)

  setInterval(()=>{
      this.ssss = 'ss'
  },2000)

  setInterval(function(){
    this.aa ++
},3000)

  setTimeout(function(){
      this.ss ='ss'
  },1000)

  var c = () => {
      this.cc = 'cc'
      function subc(){
          this.subc = 'subc'
      }
      subc()
      console.log('c' + this)
  }

  a();
  b();
  c();
  json.b()
  var ww = 'w-3'
  this.ww = 'w-4'
  console.log(json.cc.getFullName());
  var gf =  json.cc. getFullName;
  console.log("++++++++++" + gf())



//   var timer = new Timer();

  console.log('out:', this)
  
//   setTimeout(() => console.log('s1: ', timer.s1), 3100);
//   setTimeout(() => console.log('s2: ', timer.s2), 3100);
  // s1: 3
  // s2: 0