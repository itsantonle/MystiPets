import bcrypt from "bcrypt"
const hashPassword = async (
  plainPassword: string,
): Promise<string> => {
  const saltRounds = 10
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds)
  return hashedPassword
}

export default hashPassword
