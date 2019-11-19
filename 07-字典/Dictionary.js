/**
 * 改动
 * for each --> for
 * in       --> of
 * 
 * for...in循环出的是key，for...of循环出的是value
 * 如果实在想用for...of来遍历普通对象的属性的话，可以通过和Object.keys()搭配使用，先获取对象的所有key的数组
 */

function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for (var key of Object.keys(this.datastore).sort()) {
        console.log(key + " -> " + this.datastore[key]);
    }
}

function count() {
    var n = 0;
    for (var key of Object.keys(this.datastore)) {
        ++n;
    }
    return n;
}

function clear() {
    for (var key of Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}

// 导出模块
module.exports = Dictionary