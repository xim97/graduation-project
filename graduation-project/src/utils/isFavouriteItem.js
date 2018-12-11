export default function isFavouriteItem(checkingItem, collection) {
    return collection.findIndex(item => checkingItem.id === item.id) !== -1;
}