var tree = {
		    "id": 1,
		    "left": {
		        "id": 2,
		        "left": {
		            "id": 4,
		            "left": {
		                "id": 8,
		                "left": {
		                    "id": 12
		                }
		            },
		            "right": {
		                "id": 9,
		                "left": {
		                    "id": 13
		                }
		            }
		        },
		        "right": {
		            "id": 5,
		            "left": {
		                "id": 10
		            }
		        }
		    },
		    "right": {
		        "id": 3,
		        "left": {
		            "id": 6
		        },
		        "right": {
		            "id": 7,
		            "right": {
		                "id": 11
		            }
		        }
		    }
		}

var DLR_arr = []
var LDR_arr = []
var LRD_arr = []

// 前序遍历
function getListWithDLR(obj) {
  // console.log(obj.id);
  DLR_arr.push(obj.id)
  if(obj.left){
    getListWithDLR(obj.left);
  }
  if(obj.right){
    getListWithDLR(obj.right);
  }
  if (!obj.left && !obj.right && DLR_arr.length === 13) {
    console.log("前序遍历：", DLR_arr);
  }
}
// console.log("前序遍历：", DLR_arr);
getListWithDLR(tree);

// 中序遍历
function getListWithLDR(obj) {
  if(obj.left){
    getListWithLDR(obj.left);
  }
  // console.log(obj.id);
  LDR_arr.push(obj.id)
  if(obj.right){
    getListWithLDR(obj.right);
  }
  if (!obj.left && !obj.right && LDR_arr.length === 13) {
    console.log("中序遍历：", LDR_arr);
  }         
}
// console.log("中序遍历：", LDR_arr);
getListWithLDR(tree);

// 后序遍历
function getListWithLRD(obj) {
  if(obj.left){
    getListWithLRD(obj.left);
  }
  if(obj.right){
    getListWithLRD(obj.right);
   }
  // console.log(obj.id);
  LRD_arr.push(obj.id)
  if (LRD_arr.length === 13) {
    console.log("后序遍历：", LRD_arr);
  }
}
// console.log("后序遍历：", LRD_arr);
getListWithLRD(tree);
