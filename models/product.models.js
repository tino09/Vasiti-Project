const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  product_name: { type: String, required: true },
  product_description: { type: String, required: true },
  product_varieties: { type: String, required: true },
    
          product_size: { type: String, required: true },
          product_color:{ type: String, required: true },
          product_quantity:{ type: String, required: true },
          product_images:{ type: String, required: true },
          product_price: { type: String, required: true },
    

  date_uploaded: { type: Date, required: true },
  date_edited: {type: Date, required: true}
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Product', productSchema);

module.exports = Product;


//product_varieties [
//  {
//        size: ,
//        color: ,
//        quantity: ,
//        images: ,
//        price: ,
//  }
//  
//] :  { type: String, required: true },