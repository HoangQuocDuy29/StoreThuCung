const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema({
    products:[{
        product: {type: mongoose.Types.ObjectId, ref: 'Product'},
        quantity: Number,
        title: String,
        subcategory: String
    }],
    status:{
        type:String,
        default: 'Đã hủy',
        enum: ['Đã hủy','Thành công']
    },
    total:Number,
    // coupon: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Coupon'
    // },
    orderBy:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps:true,
});

//Export the model
module.exports = mongoose.model('Order', orderSchema);