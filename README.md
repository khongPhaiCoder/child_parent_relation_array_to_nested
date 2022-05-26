Cách 1: convert.js
Ưu và nhược: test r ms b :))
Cách dùng:

```
const tree = arrayToTree(currentFiles);
```

Cách 2: https://www.npmjs.com/package/performant-array-to-tree
Thư viện có sẵn
Nhược điểm:
-data trả về dư các trường parent_id, items rỗng
-thiếu trường isDirectory
Cách dùng:

```
const { arrayToTree } = require("performant-array-to-tree");
const tree = arrayToTree(currentFiles, {
parentId: "parent_id",
childrenField: "items",
dataField: null,
});
```

P/S: parent not parRent :( bùn a
