const Item = require("../../models/Item");

exports.Item = {

  items: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const items = await Item.find({ user: req.userId }).sort({ '_id': -1 });
    return items.map((item) => {
      return {
        ...item._doc,
        dateCreated: new Date(item._doc.dateCreated).toISOString(),
      };
    });
  },

  deleteItem: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const itemToDelete = await Item.findOne({ _id: args.itemId });
    const s3ObjectID = itemToDelete.mediaUrl.split("/").slice(-1)[0];
    const params = {  Bucket: process.env.S3_BUCKET_ID, Key: s3ObjectID };
      s3.deleteObject(params, function(err, data) {
        const paramsThumb = {  Bucket: process.env.S3_BUCKET_ID, Key: "t_" + s3ObjectID };
        s3.deleteObject(paramsThumb, function(err, data) { 
        });
      });
    await Item.deleteOne({ _id: args.itemId });
    return ({ _id: args.itemId });
  },

  createItem: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const item = new Item({
      user: req.userId,
      mediaUrl: args.itemInput.mediaUrl,
      mediaUrlThumb: args.itemInput.mediaUrlThumb,
      title: args.itemInput.title,
      category: args.itemInput.category,
      desc: args.itemInput.desc,
      colors: args.itemInput.colors,
      brand: args.itemInput.brand,
    });
    const savedItem = await item.save();
    return savedItem;
  },

  updateItem: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const updateField = {};
    if (args.itemInput.user) {
      updateField.user = args.itemInput.user;
    }
    if (args.itemInput.mediaUrl) {
      updateField.mediaUrl = args.itemInput.mediaUrl;
    }
    if (args.lookInput.mediaUrlThumb) {
      updateField.mediaUrlThumb = args.lookInput.mediaUrlThumb;
    }
    if (args.itemInput.title) {
      updateField.title = args.itemInput.title;
    }
    if (args.itemInput.category) {
      updateField.category = args.itemInput.category;
    }
    if (args.itemInput.desc) {
      updateField.desc = args.itemInput.desc;
    }
    if (args.itemInput.colors) {
      updateField.colors = args.itemInput.colors;
    }
    if (args.itemInput.active !== undefined) {
      updateField.active = args.itemInput.active;
    }
    if (args.itemInput.favorite !== undefined) {
      updateField.favorite = args.itemInput.favorite;
    }
    const updatedItem = await Item.updateOne(
      { _id: args.itemId },
      { $set: updateField }
    );
    return updatedItem;
  },
};
