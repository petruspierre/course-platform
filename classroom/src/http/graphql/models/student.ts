import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Student {
  @Field(() => ID)
  id: string;
}
