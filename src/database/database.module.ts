import { Module, Global } from '@nestjs/common';

const API_KEY = 'a3c97236-538b-407b-905c-bc01421e4409';
const API_KEY_PROD = '91ee657f-c0d3-4f9f-b229-0d4560ebf98b';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
