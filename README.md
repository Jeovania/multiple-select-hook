# React Multiple Select Gallery (Hook 🪝)

Multiple select photos (or anything else) react hook example with typescript.

![Screen preview](preview.png?raw=true "Multiple Select Gallery")

## Run

Install dependencies and:

```shell
> yarn start
```

## Usage

```js
const { addItem, getSize, getItems } = useMultipleSelect<string>();
```

```js
addItem("pineapple 🍍");
```

```js
getSize();
> 1
```

```js
getItems();
> ["pineapple 🍍"]
```

| Function       | Description                                              |
| -------------- | -------------------------------------------------------- |
| addItem        | Add a single item (will ignore duplicates dupicates)     |
| addAllItems    | Add an array of items (will ignore duplicates dupicates) |
| removeItem     | Remove an existent item                                  |
| removeAllItems | Remove all items                                         |
| toggleItem     | Toggle a selection                                       |
| toggleAllItems | Toggle on/off all items                                  |
| hasItem        | Return true if an item is already selected               |
| getSize        | Return the quantity of items selected                    |
| getItems       | Return an array of selected items                        |
