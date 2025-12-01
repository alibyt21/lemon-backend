// src/prisma/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // این باعث می‌شه همه جا بدون import دوباره در دسترس باشه
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule { }