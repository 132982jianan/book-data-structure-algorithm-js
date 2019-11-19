// 列表
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear.bind(this);
    this.find = find.bind(this);
    this.toString = toString.bind(this);
    this.insert = insert.bind(this);
    this.append = append.bind(this);
    this.remove = remove.bind(this);
    this.front = front.bind(this);
    this.end = end.bind(this);
    this.prev = prev.bind(this);
    this.next = next.bind(this);
    this.length = length.bind(this);
    this.currPos = currPos.bind(this);
    this.moveTo = moveTo.bind(this);
    this.getElement = getElement.bind(this);
    this.displayList = displayList.bind(this);
}

function displayList() {
    for (this.front(); this.currPos() < this.length(); this.pos++) {
        console.log(this.getElement());
    }
}

function getElement() {
    return this.dataStore[this.pos];
}

function moveTo(position) {
    this.pos = position;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize + 1;
}

function length() {
    return this.listSize;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = 0;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function toString() {
    return this.dataStore;
}

module.exports = List;