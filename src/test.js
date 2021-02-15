const createNode = (value) => {
    return {
        data: value,
        previous: null,
        next: null
    };
}
const createList = (value) => {
    return createNode(value);
};
const appendList = (list, value) => {
    const node = createNode(value);
    let x = list;
    while (x.next) {
        x = x.next;
    }
    x.next = node;
    node.previous = x;
    return node;
}
const removeFromList = (list, node) => {
    // debugger;
    let workList = list;
    let preNode = null;
    while (workList !== node) {
        preNode = workList;
        workList = workList.next;
    }
    // 上一个节点的next = 和目标List的next
    preNode.next = workList.next;
    workList.next.previous = preNode.previous;
}
const getNode = (list, index) => {
    let x = list;
    while (x.data !== index) {
        x = x.next;
    }
    return x;
}
const travelList = (list, fn) => {
    let workList = list;
    while (workList !== null) {
        fn(workList);
        workList = workList.next;
    }
}

const list = createList(10);
const node1 = appendList(list, 20);
const node2 = appendList(list, 30);
const node3 = appendList(list, 40);
removeFromList(list, node2);
travelList(list, node => {
    console.log(node.data);
});
console.log("list")
console.log(list)