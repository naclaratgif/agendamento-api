import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  // Getter para `id` mapeando `_id`
  get id(): string {
    return this._id.toString();
  }

  _id: string; // Adicione explicitamente `_id` ao tipo
}

export const UserSchema = SchemaFactory.createForClass(User);