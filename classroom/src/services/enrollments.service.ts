import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class EnrollmentsService {
  constructor(private prisma: PrismaService) {}

  listActiveEnrollments() {
    return this.prisma.enrollment.findMany({
      where: {
        canceledAt: null,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  getEnrollmentByStudentId(id: string) {
    return this.prisma.enrollment.findMany({
      where: {
        studentId: id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
