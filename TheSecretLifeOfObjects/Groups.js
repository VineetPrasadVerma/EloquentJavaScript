class Group {
    // Your code here.
    constructor(){
        this.group = []
    }

    adds(value){
        if(!this.group.includes(value)){
            this.group.push(value);
        }
    }

    delete(value){
        // let idx = this.group.indexOf(value);
        // if(idx !== -1){
        //     this.
        // }
        this.group = this.group.filter(val => (val !== value));
    }

    has(value){
        return this.group.includes(value);
    }

    static from(iterableObj){
        let groupObj = new Group;
        for(let ele of iterableObj){
            groupObj.adds(ele);
        }
        return groupObj;
    }
  }
  
  let groupObj = Group.from([10, 20]);
  console.log(groupObj)
  console.log(groupObj.has(10));
  // → true
  console.log(groupObj.has(30));
  // → false
  groupObj.adds(10);
  groupObj.delete(10);
  console.log(groupObj.has(10));
  // → false