import { buildSchema } from "type-graphql";
import Student from "./Student"
import StudentResolver from "../resolvers/StudentResolver"

const schema = async() => await buildSchema({
  resolvers: [Student, StudentResolver]
})

export default schema;