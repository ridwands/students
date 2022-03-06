const StudentService = require('../services/StudentService')
module.exports.getStudents = async (req,res) =>{
    const getStudents=await StudentService.getStudents(req)
    return getStudents
}
