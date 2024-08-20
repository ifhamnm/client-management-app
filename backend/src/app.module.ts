// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule } from '@nestjs/config';


// @Module({
//   imports: [
//     ConfigModule.forRoot(),
//     UsersModule,
//     TypeOrmModule.forRoot({
//       type: process.env.DB_TYPE as any,
//       host: process.env.PG_HOST,
//       port: parseInt(process.env.PG_PORT),
//       username: process.env.PG_USER,
//       password: process.env.PG_PASSWORD,
//       database: process.env.PG_DB,
//       entities: [__dirname + '/**/*.entity{.ts,.js}'],
//       synchronize: true,
//     }),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}




import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',  // Instead of process.env.DB_TYPE
      host: process.env.PG_HOST || 'localhost',
      port: parseInt(process.env.PG_PORT) || 5432,
      username: process.env.PG_USER || 'postgres',
      password: process.env.PG_PASSWORD || 'admin',
      database: process.env.PG_DB || 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

