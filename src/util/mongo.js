module.exports = {
    // toObj chuyển đổi doccument của mongoose thành object JavaScript
    montipleMongooseToObj: function(mongooses){
        return mongooses.map(mongooses=> mongooses.toObject())
    },
    mongoToObj: function(mongooses){
        return mongooses ? mongooses.toObject(): mongooses;
    }
}