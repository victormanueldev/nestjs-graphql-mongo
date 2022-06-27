import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { LessonModule } from './lesson/lesson.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: 'mongodb://admin:schooladmin@172.17.0.2/school',
            synchronize: true,
            useUnifiedTopology: true,
            entities: [Lesson],
        }),
        GraphQLModule.forRoot({
            autoSchemaFile: true,
            driver: ApolloDriver,
        }),
        LessonModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
