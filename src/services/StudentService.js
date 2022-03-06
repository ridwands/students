const StudentRepo = require('../repositories/StudentRepo')

module.exports.getStudents= async(req)=>{
    try{
        const data=await StudentRepo.getStudents(req)
        return {
            code: 200,
            message:"Success",
            data: data,
            error: ''
        }
    }catch(err){
        throw(err)
    }
}