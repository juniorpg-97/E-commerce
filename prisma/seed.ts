import 'dotenv/config';
import * as bcrypt from 'bcrypt';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client.js';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL as string,
});

const prisma = new PrismaClient({ adapter });

// ======================================================
// HASH DE CONTRASEÑA
// ======================================================

const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

// ======================================================
// SEED
// ======================================================

async function main() {
  console.log('Datos de prueba...');

  // ======================================================
  // USUARIOS
  // Un usuario por cada rol
  // ======================================================

  const usuarios = [
    {
      nombre: 'Administrador',
      apellido: 'Sistema',
      email: 'admin@pos.com',
      password: 'Admin12345',
      rol: 'ADMINISTRADOR' as const,
    },
    {
      nombre: 'Carlos',
      apellido: 'Cajero',
      email: 'cajero@pos.com',
      password: 'Cajero12345',
      rol: 'CAJERO' as const,
    },
    {
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'cliente@pos.com',
      password: 'Cliente12345',
      rol: 'CLIENTE' as const,
    },
  ];

  for (const u of usuarios) {
    const hashedPassword = await hashPassword(u.password);

    await prisma.usuario.upsert({
      where: {
        email: u.email,
      },

      update: {
        nombre: u.nombre,
        apellido: u.apellido,
        password: hashedPassword,
        rol: u.rol,
        activo: true,
      },

      create: {
        nombre: u.nombre,
        apellido: u.apellido,
        email: u.email,
        password: hashedPassword,
        rol: u.rol,
        activo: true,
      },
    });
  }

  // ======================================================
  // CATEGORÍAS
  // ======================================================

  const categorias = [
    {
      nombre: 'Electrónica',
      descripcion: 'Productos electrónicos y tecnológicos',
    },
    {
      nombre: 'Accesorios',
      descripcion: 'Accesorios para computadoras y dispositivos',
    },
  ];

  for (const c of categorias) {
    await prisma.categoria.upsert({
      where: {
        nombre: c.nombre,
      },

      update: {
        descripcion: c.descripcion,
        activa: true,
      },

      create: {
        nombre: c.nombre,
        descripcion: c.descripcion,
        activa: true,
      },
    });
  }

  // ======================================================
  // OBTENER CATEGORÍAS
  // ======================================================

  const electronica = await prisma.categoria.findUnique({
    where: {
      nombre: 'Electrónica',
    },
  });

  const accesorios = await prisma.categoria.findUnique({
    where: {
      nombre: 'Accesorios',
    },
  });

  if (!electronica || !accesorios) {
    throw new Error('Faltan categorías base');
  }

  // ======================================================
  // PRODUCTOS
  // ======================================================

  const productos = [
    {
      categoriaId: electronica.id,
      nombre: 'Laptop HP 15',
      descripcion: 'Laptop para trabajo y estudio',
      costoAdquisicion: 1800,
      precioVenta: 2500,
      stock: 10,
    },
    {
      categoriaId: electronica.id,
      nombre: 'Smartphone Samsung',
      descripcion: 'Smartphone Samsung de gama media',
      costoAdquisicion: 900,
      precioVenta: 1250,
      stock: 20,
    },
    {
      categoriaId: accesorios.id,
      nombre: 'Mouse inalámbrico',
      descripcion: 'Mouse inalámbrico USB',
      costoAdquisicion: 35,
      precioVenta: 75,
      stock: 50,
    },
    {
      categoriaId: accesorios.id,
      nombre: 'Teclado mecánico',
      descripcion: 'Teclado mecánico RGB',
      costoAdquisicion: 100,
      precioVenta: 180,
      stock: 30,
    },
    {
      categoriaId: accesorios.id,
      nombre: 'Audífonos Bluetooth',
      descripcion: 'Audífonos inalámbricos Bluetooth',
      costoAdquisicion: 80,
      precioVenta: 150,
      stock: 40,
    },
  ];

  // ======================================================
  // CREAR PRODUCTOS E INVENTARIO
  // ======================================================

  for (const p of productos) {
    const existe = await prisma.producto.findFirst({
      where: {
        nombre: p.nombre,
      },
    });

    if (!existe) {
      const producto = await prisma.producto.create({
        data: {
          categoriaId: p.categoriaId,
          nombre: p.nombre,
          descripcion: p.descripcion,
          costoAdquisicion: p.costoAdquisicion,
          precioVenta: p.precioVenta,
          activo: true,
        },
      });

      await prisma.inventario.create({
        data: {
          productoId: producto.id,
          stock: p.stock,
        },
      });
    }
  }

  // ======================================================
  // RESUMEN
  // ======================================================

  const resumen = {
    usuarios: await prisma.usuario.count(),
    categorias: await prisma.categoria.count(),
    productos: await prisma.producto.count(),
    inventarios: await prisma.inventario.count(),
  };

  console.log('Seed completado:', resumen);

  // ======================================================
  // CREDENCIALES
  // ======================================================

  console.log('\n======================================');
  console.log('     CREDENCIALES DE PRUEBA');
  console.log('======================================');

  console.log('\nADMINISTRADOR');
  console.log('Email: admin@pos.com');
  console.log('Password: Admin12345');

  console.log('\nCAJERO');
  console.log('Email: cajero@pos.com');
  console.log('Password: Cajero12345');

  console.log('\nCLIENTE');
  console.log('Email: cliente@pos.com');
  console.log('Password: Cliente12345');

  console.log('\n======================================');
}

// ======================================================
// EJECUTAR SEED
// ======================================================

main()
  .catch((e) => {
    console.error('Error en el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
