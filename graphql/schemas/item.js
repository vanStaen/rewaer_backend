exports.Item = `
type Item {
    _id: ID!
    user: String!
    mediaUrl: String!
    mediaUrlThumb: String!
    title: String
    dateCreated: String!
    category: [String]
    desc: String
    colors: [String]
    brand: String
    active: Boolean!
    favorite: Boolean!
}`;

exports.ItemInputData = `
input ItemInputData {
    mediaUrl: String
    mediaUrlThumb: String
    category: [String]
    desc: String
    colors: [String]
    brand: String
    active: Boolean
    favorite: Boolean
}`;

exports.ItemQueries = `
    items: [Item!]!
`;

exports.ItemMutations = `
    createItem(itemInput: ItemInputData!): Item!
    updateItem(itemId: ID!, itemInput: ItemInputData!): Item!
    deleteItem(itemId: ID!): Item!
`;
