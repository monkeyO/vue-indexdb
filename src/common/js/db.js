var myDB = {
    db: null
};

var INDEXDB = {
    indexedDB: window.indexedDB || window.webkitindexedDB,
    IDBKeyRange: window.IDBKeyRange || window.webkitIDBKeyRange,//键范围
    openDB: function (object) {
        //建立或打开数据库，建立对象存储空间(ObjectStore)
        var self = this;
        var version = object.version || 1;
        var request = self.indexedDB.open(object.name, version);
        request.onerror = function (e) {
            console.log(e.currentTarget.error.message);
        };
        request.onsuccess = function (e) {
            myDB.db = e.target.result;
            console.log('成功建立并打开数据库:' + object.name + ' version' + version);
        };
        request.onupgradeneeded = function (e) {
            var db = e.target.result, transaction = e.target.transaction, store;
            if (!db.objectStoreNames.contains(object.ojstore.name)) {
                //没有该对象空间时创建该对象空间
                store = db.createObjectStore(object.ojstore.name, { autoIncrement: true });
                console.log('成功建立对象存储空间：' + object.ojstore.name);
            }
        }
    },
    deletedb: function (dbname) {
        //删除数据库
        var self = this;
        self.indexedDB.deleteDatabase(dbname);
        console.log(dbname + '数据库已删除')
    },
    closeDB: function (db) {
        console.log("关闭成功");
        //关闭数据库
        db = myDB.db;
        db.close();
        console.log('数据库已关闭')
    },
    addData: function (db, storename, data) {
        db = myDB.db;
       var store = store = db.transaction(storename, 'readwrite').objectStore(storename), request;
            request = store.put(data);
            request.onerror = function () {
                console.error('add添加数据库中已有该数据')
            };
            request.onsuccess = function () {
                console.log('add添加数据已存入数据库')
            };
    },
    putData: function (db, storename, data) {
        //添加数据，重复添加会更新原有数据
        var store = store = db.transaction(storename, 'readwrite').objectStore(storename), request;
        for (var i = 0; i < data.length; i++) {
            request = store.put(data[i]);
            request.onerror = function () {
                console.error('put添加数据库中已有该数据')
            };
            request.onsuccess = function () {
                console.log('put添加数据已存入数据库')
            };
        }
    },
    getDataByKey: function (db, storename) {        
        db = myDB.db;
        var Data=[];
        var store = db.transaction(storename, 'readwrite').objectStore(storename);
        var request = store.openCursor();
        request.onerror = function () {
            console.error('getDataByKey error');
        };
        request.onsuccess = function (e) {
             var result = e.target.result;
             if(result){
                 result.value.key=result.key;
                 Data.push(result.value);
                 result.continue();//遍历了存储对象中的所有内容
             }
            console.log('查找数据成功');
        };
        return Data;
    },
    deleteData: function (db, storename, key) {
        db= myDB.db;
        //删除某一条记录
        var Data=[];
        var store = store = db.transaction(storename, 'readwrite').objectStore(storename);
        store.delete(key);
        console.log('已删除存储空间' + storename + '中' + key + '记录');
        Data=this.getDataByKey(db,storename);
        return Data;
       
    },
    clearData: function (db, storename) {
        //删除存储空间全部记录
        var store = db.transaction(storename, 'readwrite').objectStore(storename);
        store.clear();
        console.log('已删除存储空间' + storename + '全部记录');
    }
}


export default INDEXDB;