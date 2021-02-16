const createList = (value) => {
    return createNode(value);
}
const appendList = (list, value) => {
    const node = createNode(value);
    let workList = list;
    while (workList.next) {
        workList = workList.next;
    }
    // 最后一个节点的next = 目标node
    workList.next = node;
    return node;
};
const removeFromList = (list, node) => {
    // debugger;
    let workList = list;
    let preNode = node; // 之前将 p 初始化为 null，这里改为 node
    while (workList !== node && workList !== null) {       // 课堂里忘了对 null 进行处理，如果 node 不在 list 中，x 就可能为 null
        preNode = workList;
        workList = workList.next;
    }
    if (workList === null) {
        return false;
    } else if(workList === preNode) {
        preNode = workList.next;
    } else {
    // 上一个节点的next = 和目标List的next
        preNode.next = workList.next;
        return list
    }
    // // 如果删除的是第1个节点
    // if (list === node) {
    //     list = node.next;
    // } else {
    //     // 如果删除的是第二个节点，第1个节点.next=第2个节点.next
    //     if (list.next === node) {
    //         list.next = node.next;
    //     }
    // }
}
const createNode = (value) => {
    return {
        data: value,
        next: null
    }
};
const travelList = (list, fn) => {
    let workList = list;
    while (workList !== null) {
        fn(workList);
        workList = workList.next;
    }
}
const getNode = (list, index) => {
    let x = list;
    while (x.data !== index) {
        x = x.next;
    }
    return x;
}

const list = createList(10);
const node1 = appendList(list, 20);
const node2 = appendList(list, 30);
const node3 = appendList(list, 40);
// removeFromList(list, node2);
const newList = removeFromList(list, node2);    // 必须用newList获得惭悔之才能拿到删除了第一个节点的新list
travelList(list, node => {
    console.log(node.data);
});
console.log("list")
console.log(list)

