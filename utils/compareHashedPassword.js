import bcrypt from "bcryptjs"

export const compareHashedPassword = (passwordFromLogin, passwordFromDB) => {
    return bcrypt.compareSync(passwordFromLogin, passwordFromDB); // true
}