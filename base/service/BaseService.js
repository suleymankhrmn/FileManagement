require('mongoose');
class BaseService{
    constructor(model){
        this.model = model
    }

    save(objects){
        return this.model.insertMany(objects)
    }

    delete(id) {
        return this.model.findByIdAndDelete(id)
    }

    findById(id){
        return this.model.findById(id).exec();
    }
}
module.exports = BaseService