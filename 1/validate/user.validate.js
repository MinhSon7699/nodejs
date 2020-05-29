module.exports.postCreate = function(req, res, next){
    var errors = [];

    if(!req.body.name){
        errors.push('Chưa nhập tên kìa đmm');
    }

    if(!req.body.phone){
        errors.push('Chưa nhập số kìa cmm');
    }

    if(errors.length){
        res.render('users/create',{
            errors: errors,
            values: req.body
        });
        return;
    }
    next();
}
//đây là ví dụ cho middeware