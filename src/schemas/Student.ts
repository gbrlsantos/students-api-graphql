import { IStudent } from "src/database/models/Student";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
class Student implements IStudent {
  @Field(returns => ID)
  _id: string;

  @Field()
  name: string;
  
  @Field()
  cpf: string;
  
  @Field()
  email: string;
  
  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;
}

export default Student;