const productsDAO={};
import Product from "../models/Products.js";
productsDAO.getAll =async()=>{
    //Aqui van las operaciones 
    return await Product.find();

}

productsDAO.getOne=async(barcode)=>{
    return await Product.findOne({ barcode: barcode });
}

productsDAO.insertOne=async(product)=>{
    const newProduct=await Product.create(product);
    return newProduct;
};



productsDAO.updateOne = async (barcode, product) => {
    // Usamos el 'barcode' que viene del controlador y agregamos {new: true}
    const updateProduct = await Product.findOneAndUpdate({ barcode: barcode }, product);
    return updateProduct;
};

productsDAO.deleteOne=async(barcode)=>{
    const deletedProduct=await Product.findOneAndDelete({barcode:barcode});
    return deletedProduct;
}

export default productsDAO;
