import { Module } from '@nestjs/common';
import { AppController } from './features/uptime-server/app.controller';
import { AppService } from './features/uptime-server/app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './features/user/controllers/user.controller';
import { SalesTypeController } from './features/sales-type/controllers/sales-type.controller';
import { OutletController } from './features/outlet/controllers/outlet.controller';
import { LaundryController } from './features/laundry/controllers/laundry.controller';
import { InvoiceController } from './features/invoice/controllers/invoice.controller';
import { CustomerController } from './features/customer/controllers/customer.controller';
import { CashierController } from './features/cashier/controllers/cashier.controller';
import { UserService } from './features/user/services/user.service';
import { SalesTypeService } from './features/sales-type/services/sales-type.service';
import { OutletService } from './features/outlet/services/outlet.service';
import { LaundryService } from './features/laundry/services/laundry.service';
import { InvoiceService } from './features/invoice/services/invoice.service';
import { CustomerService } from './features/customer/services/customer.service';
import { CashierService } from './features/cashier/services/cashier.service';
import { UserEntity } from './features/user/entities/user.entity';
import { SalesTypeEntity } from './features/sales-type/entities/sales-type.entity';
import { OutletEntity } from './features/outlet/entities/outlet.entity';
import { LaundryEntity } from './features/laundry/entities/laundry.entity';
import { InvoiceEntity } from './features/invoice/entities/invoice.entity';
import { CustomerEntity } from './features/customer/entities/customer.entity';
import { CashierEntity } from './features/cashier/entities/cashier.entity';

@Module({
  imports: [
    // Get all ENV access
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Connection on Database
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.WASHLAB_HOST,
      port: +process.env.WASHLAB_PORT,
      username: process.env.WASHLAB_USERNAME,
      password: process.env.WASHLAB_PASSWORD,
      database: process.env.WASHLAB_DATABASE,
      entities: [
        UserEntity,
        SalesTypeEntity,
        OutletEntity,
        LaundryEntity,
        InvoiceEntity,
        CustomerEntity,
        CashierEntity,
      ],
      synchronize: process.env.SERVICE == 'development',
      logging: process.env.SERVICE == 'development',
    }),

    // Configuration on Service
    TypeOrmModule.forFeature([
      UserEntity,
      SalesTypeEntity,
      OutletEntity,
      LaundryEntity,
      InvoiceEntity,
      CustomerEntity,
      CashierEntity,
    ]),
  ],

  // Connection on controller
  controllers: [
    AppController,
    UserController,
    SalesTypeController,
    OutletController,
    LaundryController,
    InvoiceController,
    CustomerController,
    CashierController,
  ],

  // Connection on Service
  providers: [
    AppService,
    UserService,
    SalesTypeService,
    OutletService,
    LaundryService,
    InvoiceService,
    CustomerService,
    CashierService,
  ],
})
export class AppModule {}
