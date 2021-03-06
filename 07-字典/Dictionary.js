function Dictionary() {
    this.add = add;
    this.datastore = [];
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
    // var key of xxx_arr 直接获取值,而不用索引
    var keys_list = Object.keys(this.datastore).sort();
    for (var key of keys_list) {
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

// 删除下每个key
function clear() {
    for (var key of Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}

module.exports = Dictionary
