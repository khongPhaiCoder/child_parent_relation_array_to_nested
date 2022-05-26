const getNestedProperty = (item, nestedProperty) => {
    return nestedProperty.split(".").reduce((o, i) => o && o[i], item);
};

const arrayToTree = (items) => {
    const rootItems = [];

    const lookup = {};

    for (const item of items) {
        const itemId = getNestedProperty(item, "id");
        const parentId = getNestedProperty(item, "parent_id");

        if (!Object.prototype.hasOwnProperty.call(lookup, itemId)) {
            lookup[itemId] = { items: [], isDirectory: false };
        }

        lookup[itemId] = {
            name: item.name,
            items: lookup[itemId]["items"],
            isDirectory: lookup[itemId]["isDirectory"],
        };

        if (lookup[itemId]["items"].length === 0) {
            delete lookup[itemId]["items"];
        }
        const treeItem = lookup[itemId];

        if (parentId === null || parentId === undefined) {
            rootItems.push(treeItem);
        } else {
            if (treeItem && !lookup[parentId]["items"]) {
                lookup[parentId]["items"] = [];
            }

            lookup[parentId]["items"].push(treeItem);
            lookup[parentId]["isDirectory"] = true;
        }
    }

    return rootItems;
};
