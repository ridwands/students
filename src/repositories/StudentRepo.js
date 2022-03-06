module.exports.getStudents = async (req) => {
    const client = await req.fastify.pg.connect()
    const { rows } =  await client.query(
      'SELECT * FROM students',
    )
    client.release()
    return rows
}