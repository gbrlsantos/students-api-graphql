import Student from "../schemas/Student";
import MongoStudent from "../database/models/Student"
import { Arg, Mutation, Query, Resolver } from "type-graphql";

const { ObjectId } = require('mongodb');

@Resolver(Student)
class StudentResolver {
  @Query(returns => [Student], { name: "findStudents" })
  async find(
    @Arg("name", { nullable: true }) name: string,
    @Arg("cpf", { nullable: true }) cpf: string,
    @Arg("email", { nullable: true }) email: string,
  ) {
    const filters = name || cpf || email;
    let students = await MongoStudent.find();
    if (filters) {
      const shouldApplyNameFilter = name !== undefined;
      const shouldApplyCpfFilter = cpf !== undefined;
      const shouldApplyEmailFilter = email !== undefined;

      if (shouldApplyNameFilter)
        students = students.filter((student) => student.name === name);
      if (shouldApplyCpfFilter)
        students = students.filter((student) => student.cpf === cpf);
      if (shouldApplyEmailFilter)
        students = students.filter((student) => student.email === email);
    }
    return students;
  }

  @Mutation(returns => Student, { name: "updateStudent" })
  async update(
    @Arg("_id") _id: string,
    @Arg("name", { nullable: true }) name: string,
    @Arg("cpf", { nullable: true }) cpf: string,
    @Arg("email", { nullable: true }) email: string,
  ) {
    if (_id) {
      const student = await MongoStudent.findByIdAndUpdate(_id, { name, cpf, email });
      return student;
    }
    throw new Error('O id fornecido não foi encontrado.')
  }

  @Mutation(returns => Student, { name: "deleteStudent" })
  async delete(
    @Arg("_id") _id: string,
  ) {
    if (_id) {
      const student = await MongoStudent.findByIdAndDelete(_id);
      return student;
    }
    throw new Error('O id fornecido não foi encontrado.')
  }

  @Mutation(returns => Student, { name: "createStudent" })
  async create(
    @Arg("name") name: string,
    @Arg("cpf") cpf: string,
    @Arg("email") email: string,
  ) {
    if (name && cpf && email) {
        const student = await MongoStudent.create({ name, cpf, email });
        return student
    }
    throw new Error('Por favor, preencha todos os campos!');
  }
}

export default StudentResolver;