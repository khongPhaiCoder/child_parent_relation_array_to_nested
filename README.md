Cách 1: convert.js \
Ưu và nhược: test r ms b :)) \n
Cách dùng:

```
const tree = arrayToTree(currentFiles);
```

Cách 2: https://www.npmjs.com/package/performant-array-to-tree \n
Thư viện có sẵn \n
Nhược điểm: \n
-data trả về dư các trường parent_id, items rỗng \n
-thiếu trường isDirectory \n
Cách dùng: \n

```
const { arrayToTree } = require("performant-array-to-tree");
const tree = arrayToTree(currentFiles, {
parentId: "parent_id",
childrenField: "items",
dataField: null,
});
```

P/S: parent not parRent :( bùn a
