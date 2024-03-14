import fs from 'fs';
import {User} from '../server.js'


const resetDB = async () => {
    try{
        await User.deleteMany({})
        const usersFromJSON = JSON.parse(fs.readFileSync('users.json', 'utf8'))
        const usersInDB = await User.insertMany(usersFromJSON)
        console.log(usersInDB)

    } catch(e){
        console.log(e)
    }
}

resetDB()