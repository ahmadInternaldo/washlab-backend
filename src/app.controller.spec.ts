import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './features/uptime-server/app.controller';
import { AppService } from './features/uptime-server/app.service';
import { UserController } from './features/user/controllers/user.controller';
import { SalesTypeController } from './features/sales-type/controllers/sales-type.controller';
import { OutletController } from './features/outlet/controllers/outlet.controller';
import { LaundryVariantController } from './features/laundry-variant/controllers/laundry-variant.controller';
import { InvoiceController } from './features/invoice/controllers/invoice.controller';
import { CustomerController } from './features/customer/controllers/customer.controller';
import { CashierController } from './features/cashier/controllers/cashier.controller';
import { UserService } from './features/user/services/user.service';
import { SalesTypeService } from './features/sales-type/services/sales-type.service';
import { OutletService } from './features/outlet/services/outlet.service';
import { LaundryVariantService } from './features/laundry-variant/services/laundry-variant.service';
import { InvoiceService } from './features/invoice/services/invoice.service';
import { CustomerService } from './features/customer/services/customer.service';
import { CashierService } from './features/cashier/services/cashier.service';
import { UserEntity } from './features/user/entities/user.entity';
import { SalesTypeEntity } from './features/sales-type/entities/sales-type.entity';
import { OutletEntity } from './features/outlet/entities/outlet.entity';
import { LaundryVariantEntity } from './features/laundry-variant/entities/laundry-variant.entity';
import { InvoiceEntity } from './features/invoice/entities/invoice.entity';
import { CustomerEntity } from './features/customer/entities/customer.entity';
import { CashierEntity } from './features/cashier/entities/cashier.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TemplateEntity } from './features/template/entities/template.entity';
import { TemplateController } from './features/template/controllers/template.controller';
import { ProductEntity } from './features/product/entities/product.entity';
import { ProductController } from './features/product/controllers/product.controller';
import { ProductService } from './features/product/services/product.service';
import { TemplateService } from './features/template/services/template.service';
import { UserRoleEnum } from './features/user/interface/user.interface';
import {
  OutletInterface,
  OutletStatusEnum,
} from './features/outlet/interface/outlet.interface';
import { CashierStatusEnum } from './features/cashier/interface/cashier.interface';
import { LaundryVariantStatusEnum } from './features/laundry-variant/interface/laundry-variant.interface';
import { LaundryCategoryController } from './features/laundry-category/controllers/laundry-category.controller';
import { LaundryCategoryEntity } from './features/laundry-category/entities/laundry-category.entity';
import { LaundryCategoryStatusEnum } from './features/laundry-category/interface/laundry-category.interface';
import { LaundryCategoryService } from './features/laundry-category/services/laundry-category.service';

describe('Controller Test', () => {
  // Initiate controller
  let templateController: TemplateController;
  let appController: AppController;
  let userController: UserController;
  let cashierController: CashierController;
  let outletController: OutletController;
  let laundryVariantController: LaundryVariantController;
  let laundryCategoryController: LaundryCategoryController;
  let invoiceController: InvoiceController;
  let customerController: CustomerController;
  let salesTypeController: SalesTypeController;
  // disable
  let productController: ProductController;

  // Initiate data
  let template: TemplateEntity;
  let user: UserEntity;
  let cashier: CashierEntity;
  let outlet: OutletEntity;
  let laundryVariant: LaundryVariantEntity;
  let laundryCategory: LaundryCategoryEntity;
  let invoice: InvoiceEntity;
  let customer: CustomerEntity;
  let salesType: SalesTypeEntity;
  // disable
  let product: ProductEntity;

  /**
   * Initiate module
   */
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        // Get all ENV access
        ConfigModule.forRoot({
          isGlobal: true,
        }),

        // Connection on Database
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: process.env.WASHLAB_HOST_TEST,
          port: +process.env.WASHLAB_PORT_TEST,
          username: process.env.WASHLAB_USERNAME_TEST,
          password: process.env.WASHLAB_PASSWORD_TEST,
          database: process.env.WASHLAB_DATABASE_TEST,
          entities: [
            TemplateEntity,
            UserEntity,
            SalesTypeEntity,
            OutletEntity,
            LaundryVariantEntity,
            LaundryCategoryEntity,
            InvoiceEntity,
            CustomerEntity,
            CashierEntity,
            //disable
            ProductEntity,
          ],
          synchronize: true,
        }),

        // Configuration on Service
        TypeOrmModule.forFeature([
          TemplateEntity,
          UserEntity,
          SalesTypeEntity,
          OutletEntity,
          LaundryVariantEntity,
          LaundryCategoryEntity,
          InvoiceEntity,
          CustomerEntity,
          CashierEntity,
          // disable
          ProductEntity,
        ]),
      ],
      controllers: [
        TemplateController,
        AppController,
        UserController,
        SalesTypeController,
        OutletController,
        LaundryVariantController,
        LaundryCategoryController,
        InvoiceController,
        CustomerController,
        CashierController,
        // disable
        ProductController,
      ],
      providers: [
        TemplateService,
        AppService,
        UserService,
        SalesTypeService,
        OutletService,
        LaundryVariantService,
        LaundryCategoryService,
        InvoiceService,
        CustomerService,
        CashierService,
        // disable
        ProductService,
      ],
    }).compile();

    templateController = app.get<TemplateController>(TemplateController);
    appController = app.get<AppController>(AppController);
    userController = app.get<UserController>(UserController);
    cashierController = app.get<CashierController>(CashierController);
    outletController = app.get<OutletController>(OutletController);
    laundryVariantController = app.get<LaundryVariantController>(
      LaundryVariantController,
    );
    laundryCategoryController = app.get<LaundryCategoryController>(
      LaundryCategoryController,
    );
    invoiceController = app.get<InvoiceController>(InvoiceController);
    customerController = app.get<CustomerController>(CustomerController);
    salesTypeController = app.get<SalesTypeController>(SalesTypeController);
    productController = app.get<ProductController>(ProductController);
  });

  // Root test
  describe('app', () => {
    it('should return "CMS server checked!"', () => {
      expect(appController.getHello()).toBe('CMS server checked!');
    });
  });

  // Template test
  describe('template', () => {
    it('should create template', async () => {
      const data = await templateController.createTemplate({ name: 'string' });
      template = data;
      expect(data).toBeDefined();
    });

    it('should find certain templates', async () => {
      const datas = await templateController.findAllTemplate({
        page: '10',
        limit: '10',
      });
      expect(datas).toBeDefined();
    });

    it('should find one template', async () => {
      const data = await templateController.findOneTemplate(template.uuid);
      expect(data).toBeDefined();
    });

    it('should update template', async () => {
      const data = await templateController.updateTemplate(template.uuid, {
        full_name: 'string',
      });
      expect(data).toBeDefined();
    });

    it('should delete template', async () => {
      const data = await templateController.deleteTemplate(template.uuid);
      expect(data).toBeDefined();
    });
  });

  // User test
  describe('user', () => {
    it('should create user', async () => {
      const data = await userController.createUser({
        username: 'admin1',
        hash: 'password',
        full_name: 'admin1',
        first_name: 'admin',
        last_name: '1',
        created_at: new Date(),
        role: UserRoleEnum.ADMIN,
        outlets: [],
      });
      user = data;
      expect(data).toBeDefined();
    });

    it('should find certain users', async () => {
      const datas = await userController.findAllUser({
        page: '10',
        limit: '10',
      });
      expect(datas).toBeDefined();
    });

    it('should find one user', async () => {
      const data = await userController.findOneUser(user.uuid);
      expect(data).toBeDefined();
    });

    it('should update user', async () => {
      const data = await userController.updateUser(user.uuid, {
        full_name: 'string',
      });
      expect(data).toBeDefined();
    });
  });

  // Outlet test
  describe('outlet', () => {
    it('should create outlet', async () => {
      const data = await outletController.createOutlet({
        name: 'outlet1',
        code: 'OUT1',
        status: OutletStatusEnum.ACTIVE,
        creator_uuid: user.uuid,
        created_at: new Date(),
        user_uuid: user.uuid,
        user: user,
        cashiers: [],
        laundry_variants: [],
      });
      outlet = data;
      expect(data).toBeDefined();
    });

    it('should find certain outlets', async () => {
      const datas = await outletController.findAllOutlet({
        page: '10',
        limit: '10',
      });
      expect(datas).toBeDefined();
    });

    it('should find one outlet', async () => {
      const data = await outletController.findOneOutlet(outlet.uuid);
      expect(data).toBeDefined();
    });

    it('should update outlet', async () => {
      const data = await outletController.updateOutlet(outlet.uuid, {
        full_name: 'string',
      });
      expect(data).toBeDefined();
    });
  });

  // Cashier test
  describe('cashier', () => {
    it('should create cashier', async () => {
      const data = await cashierController.createCashier({
        username: 'cashier1',
        hash: 'password',
        address: 'address1',
        phone: '081222631994',
        status: CashierStatusEnum.ACTIVE,
        creator_uuid: user.uuid,
        created_at: new Date(),
        outlet_uuid: outlet.uuid,
      });
      cashier = data;
      expect(data).toBeDefined();
    });

    it('should find certain cashiers', async () => {
      const datas = await cashierController.findAllCashier({
        page: '10',
        limit: '10',
      });
      expect(datas).toBeDefined();
    });

    it('should find one cashier', async () => {
      const data = await cashierController.findOneCashier(cashier.uuid);
      expect(data).toBeDefined();
    });

    it('should update cashier', async () => {
      const data = await cashierController.updateCashier(cashier.uuid, {
        full_name: 'string',
      });
      expect(data).toBeDefined();
    });
  });

  // Laundry category test
  describe('laundry-category', () => {
    it('should create laundry category', async () => {
      const data = await laundryCategoryController.createLaundryCategory({
        name: 'string',
        status: LaundryCategoryStatusEnum.ACTIVE,
      });
      laundryCategory = data;
      expect(data).toBeDefined();
    });

    it('should find certain laundry-categories', async () => {
      const datas = await laundryCategoryController.findAllLaundryCategory({
        page: '10',
        limit: '10',
      });
      expect(datas).toBeDefined();
    });

    it('should find one laundry category', async () => {
      const data = await laundryCategoryController.findOneLaundryCategory(
        laundryCategory.uuid,
      );
      expect(data).toBeDefined();
    });

    it('should update laundry category', async () => {
      const data = await laundryCategoryController.updateLaundryCategory(
        laundryCategory.uuid,
        {
          full_name: 'string',
        },
      );
      expect(data).toBeDefined();
    });
  });

  // Laundry variant test
  describe('laundry-variant', () => {
    it('should create laundry variant', async () => {
      const dataOutlet = {
        uuid: outlet.uuid,
        name: outlet.name,
        code: outlet.code,
        status: outlet.status,
        creator_uuid: outlet.creator_uuid,
        created_at: outlet.created_at,
        user_uuid: outlet.user_uuid,
      };
      const data = await laundryVariantController.createLaundryVariant({
        name: 'string',
        code: 'LNDR00002',
        status: LaundryVariantStatusEnum.ACTIVE,
        price: 0,
        pict_url: 'src',
        creator_uuid: user.uuid,
        created_at: new Date(),
        outlets: [dataOutlet],
      });
      laundryVariant = data;
      expect(data).toBeDefined();
    });

    it('should find certain laundry-variants', async () => {
      const datas = await laundryVariantController.findAllLaundryVariant({
        page: '10',
        limit: '10',
      });
      expect(datas).toBeDefined();
    });

    it('should find one laundry variant', async () => {
      const data = await laundryVariantController.findOneLaundryVariant(
        laundryVariant.uuid,
      );
      expect(data).toBeDefined();
    });

    it('should update laundry variant', async () => {
      const data = await laundryVariantController.updateLaundryVariant(
        laundryVariant.uuid,
        {
          full_name: 'string',
        },
      );
      expect(data).toBeDefined();
    });
  });

  // Invoice test
  describe('invoice', () => {
    it('should create invoice', async () => {
      const data = await invoiceController.createInvoice({ name: 'string' });
      invoice = data;
      expect(data).toBeDefined();
    });

    it('should find certain invoices', async () => {
      const datas = await invoiceController.findAllInvoice({
        page: '10',
        limit: '10',
      });
      expect(datas).toBeDefined();
    });

    it('should find one invoice', async () => {
      const data = await invoiceController.findOneInvoice(invoice.uuid);
      expect(data).toBeDefined();
    });

    it('should update invoice', async () => {
      const data = await invoiceController.updateInvoice(invoice.uuid, {
        full_name: 'string',
      });
      expect(data).toBeDefined();
    });

    it('should delete invoice', async () => {
      const data = await invoiceController.deleteInvoice(invoice.uuid);
      expect(data).toBeDefined();
    });
  });

  // Customer test
  describe('customer', () => {
    it('should create customer', async () => {
      const data = await customerController.createCustomer({ name: 'string' });
      customer = data;
      expect(data).toBeDefined();
    });

    it('should find certain customers', async () => {
      const datas = await customerController.findAllCustomer({
        page: '10',
        limit: '10',
      });
      expect(datas).toBeDefined();
    });

    it('should find one customer', async () => {
      const data = await customerController.findOneCustomer(customer.uuid);
      expect(data).toBeDefined();
    });

    it('should update customer', async () => {
      const data = await customerController.updateCustomer(customer.uuid, {
        full_name: 'string',
      });
      expect(data).toBeDefined();
    });

    it('should delete customer', async () => {
      const data = await customerController.deleteCustomer(customer.uuid);
      expect(data).toBeDefined();
    });
  });

  // Sales type test
  describe('sales-type', () => {
    it('should create sales type', async () => {
      const data = await salesTypeController.createSalesType({
        name: 'string',
      });
      salesType = data;
      expect(data).toBeDefined();
    });

    it('should find certain sales types', async () => {
      const datas = await salesTypeController.findAllSalesType({
        page: '10',
        limit: '10',
      });
      expect(datas).toBeDefined();
    });

    it('should find one sales type', async () => {
      const data = await salesTypeController.findOneSalesType(salesType.uuid);
      expect(data).toBeDefined();
    });

    it('should update sales type', async () => {
      const data = await salesTypeController.updateSalesType(salesType.uuid, {
        full_name: 'string',
      });
      expect(data).toBeDefined();
    });

    it('should delete sales type', async () => {
      const data = await salesTypeController.deleteSalesType(salesType.uuid);
      expect(data).toBeDefined();
    });
  });

  // Product test
  describe('product', () => {
    it('should create product', async () => {
      const data = await productController.createProduct({ name: 'string' });
      product = data;
      expect(data).toBeDefined();
    });

    it('should find certain products', async () => {
      const datas = await productController.findAllProduct({
        page: '10',
        limit: '10',
      });
      expect(datas).toBeDefined();
    });

    it('should find one product', async () => {
      const data = await productController.findOneProduct(product.uuid);
      expect(data).toBeDefined();
    });

    it('should update product', async () => {
      const data = await productController.updateProduct(product.uuid, {
        full_name: 'string',
      });
      expect(data).toBeDefined();
    });

    it('should delete product', async () => {
      const data = await productController.deleteProduct(product.uuid);
      expect(data).toBeDefined();
    });
  });

  describe('all delete', () => {
    it('should delete outlet', async () => {
      const data = await outletController.deleteOutlet(outlet.uuid);
      expect(data).toBeDefined();
    });

    it('should delete user', async () => {
      const data = await userController.deleteUser(user.uuid);
      expect(data).toBeDefined();
    });

    it('should delete cashier', async () => {
      const data = await cashierController.deleteCashier(cashier.uuid);
      expect(data).toBeDefined();
    });

    it('should delete laundry variant', async () => {
      const data = await laundryVariantController.deleteLaundryVariant(
        laundryVariant.uuid,
      );
      expect(data).toBeDefined();
    });

    it('should delete laundry category', async () => {
      const data = await laundryCategoryController.deleteLaundryCategory(
        laundryCategory.uuid,
      );
      expect(data).toBeDefined();
    });
  });
});
