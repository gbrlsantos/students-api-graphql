import mongoose, { Schema } from 'mongoose';

export interface IStudent {
  name: string,
  cpf: string,
  email: string,
}

const studentSchema = new Schema<IStudent>({
  name: String,
  cpf: String,
  email: String,
},
{
  timestamps: true,
})

export default mongoose.model<IStudent>("Student", studentSchema);