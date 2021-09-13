require('mongoose');
class BaseService{
    constructor(model){
        this.model = model
    }

    save(objects){
        return this.model.insertMany(objects)
    }

    findById(id){
        return this.model.findById(id).exec();
    }
}
module.exports = BaseService