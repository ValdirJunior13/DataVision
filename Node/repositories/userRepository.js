const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UserRepository {

    async findById(id){
        const user = await prisma.usuario.findUnique({
            where:{
                id,
                status: true
            }
        })
        return user
    }

    async findByEmail(email) {
        const user = await prisma.usuario.findUnique({
            where:{
                email
            }
        })
        return user
    }
    async create(data){
        const user = await prisma.usuario.create({
            data: {
                name: data.nome,
                email: data.email,
                login: data.login,
                password: data.password_hash
            } 
        })
        return user
    }

    async update(id, data){
        const user = await prisma.usuario.update({
            where:{
                id
            },
            data:{
                password: data.password_hash
            }
        })
        return user
    }

    async delete(id){
        const user = await prisma.usuario.update({
            where:{
                id
            },
            data:{
                status: false
            }
        })
    }
}

module.exports = UserRepository;