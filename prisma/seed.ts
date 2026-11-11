import 'dotenv/config';
import * as bcrypt from 'bcrypt';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client.js';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL as string,
});

const prisma = new PrismaClient({ adapter });

const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

async function main() {
  console.log('🌱 Iniciando seed completo...\n');

  // ======================================================
  // 1. USUARIOS
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
    await prisma.usuario.upsert({
      where: { email: u.email },
      update: {
        nombre: u.nombre,
        apellido: u.apellido,
        password: await hashPassword(u.password),
        rol: u.rol,
        activo: true,
      },
      create: {
        nombre: u.nombre,
        apellido: u.apellido,
        email: u.email,
        password: await hashPassword(u.password),
        rol: u.rol,
        activo: true,
      },
    });
  }
  console.log('✅ 3 Usuarios creados');

  // ======================================================
  // 2. CATEGORÍAS (7)
  // ======================================================
  const categoriasData = [
    {
      nombre: 'Electrónica',
      descripcion: 'Productos electrónicos y tecnológicos',
    },
    {
      nombre: 'Accesorios',
      descripcion: 'Accesorios para computadoras y dispositivos',
    },
    { nombre: 'Laptops', descripcion: 'Computadoras portátiles' },
    { nombre: 'Smartphones', descripcion: 'Teléfonos inteligentes' },
    { nombre: 'Audio', descripcion: 'Audífonos, parlantes y micrófonos' },
    { nombre: 'Almacenamiento', descripcion: 'Discos duros, SSDs y memorias' },
    {
      nombre: 'Periféricos',
      descripcion: 'Teclados, mouse y otros periféricos',
    },
  ];

  for (const c of categoriasData) {
    await prisma.categoria.upsert({
      where: { nombre: c.nombre },
      update: { descripcion: c.descripcion, activa: true },
      create: { nombre: c.nombre, descripcion: c.descripcion, activa: true },
    });
  }
  console.log('✅ 7 Categorías creadas');

  const categorias = await Promise.all(
    categoriasData.map((c) =>
      prisma.categoria.findUnique({ where: { nombre: c.nombre } }),
    ),
  );

  if (categorias.some((c) => c === null)) {
    throw new Error('Faltan categorías');
  }

  // ======================================================
  // 3. PRODUCTOS (35 productos - 5 por categoría)
  // ======================================================
  const productosData = [
    // === ELECTRÓNICA (5) ===
    {
      categoriaId: categorias[0]!.id,
      nombre: 'Smart TV 55" 4K',
      descripcion: 'Televisor inteligente 4K UHD con HDR',
      costoAdquisicion: 1500,
      precioVenta: 2200,
      stock: 8,
      imagen:
        'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500',
    },
    {
      categoriaId: categorias[0]!.id,
      nombre: 'Tablet Samsung Galaxy',
      descripcion: 'Tablet 10 pulgadas, 64GB, WiFi',
      costoAdquisicion: 400,
      precioVenta: 650,
      stock: 15,
      imagen: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
    },
    {
      categoriaId: categorias[0]!.id,
      nombre: 'Cámara Web HD',
      descripcion: 'Webcam 1080p con micrófono integrado',
      costoAdquisicion: 50,
      precioVenta: 95,
      stock: 25,
      imagen:
        'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500',
    },
    {
      categoriaId: categorias[0]!.id,
      nombre: 'Router WiFi 6',
      descripcion: 'Router inalámbrico de alta velocidad AX3000',
      costoAdquisicion: 120,
      precioVenta: 180,
      stock: 12,
      imagen: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500',
    },
    {
      categoriaId: categorias[0]!.id,
      nombre: 'Smartwatch Apple',
      descripcion: 'Reloj inteligente con GPS y monitor cardíaco',
      costoAdquisicion: 300,
      precioVenta: 450,
      stock: 10,
      imagen: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500',
    },

    // === ACCESORIOS (5) ===
    {
      categoriaId: categorias[1]!.id,
      nombre: 'Cable HDMI 2m',
      descripcion: 'Cable HDMI 2.0 alta velocidad 4K',
      costoAdquisicion: 8,
      precioVenta: 18,
      stock: 100,
      imagen: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
    },
    {
      categoriaId: categorias[1]!.id,
      nombre: 'Soporte para Laptop',
      descripcion: 'Base refrigerante ajustable con ventiladores',
      costoAdquisicion: 25,
      precioVenta: 45,
      stock: 30,
      imagen:
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
    },
    {
      categoriaId: categorias[1]!.id,
      nombre: 'Mochila para Laptop',
      descripcion: 'Mochila acolchada resistente al agua 15.6"',
      costoAdquisicion: 30,
      precioVenta: 55,
      stock: 40,
      imagen: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    },
    {
      categoriaId: categorias[1]!.id,
      nombre: 'Protector de Pantalla',
      descripcion: 'Vidrio templado universal anti-reflejos',
      costoAdquisicion: 5,
      precioVenta: 12,
      stock: 80,
      imagen:
        'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500',
    },
    {
      categoriaId: categorias[1]!.id,
      nombre: 'Hub USB-C',
      descripcion: 'Adaptador multipuerto USB-C 7 en 1',
      costoAdquisicion: 35,
      precioVenta: 60,
      stock: 22,
      imagen:
        'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500',
    },

    // === LAPTOPS (5) ===
    {
      categoriaId: categorias[2]!.id,
      nombre: 'Laptop HP 15"',
      descripcion: 'Intel Core i5, 8GB RAM, 256GB SSD',
      costoAdquisicion: 1800,
      precioVenta: 2500,
      stock: 10,
      imagen:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
    },
    {
      categoriaId: categorias[2]!.id,
      nombre: 'Laptop Dell Inspiron',
      descripcion: 'Intel Core i7, 16GB RAM, 512GB SSD',
      costoAdquisicion: 2800,
      precioVenta: 3800,
      stock: 6,
      imagen:
        'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500',
    },
    {
      categoriaId: categorias[2]!.id,
      nombre: 'Laptop Lenovo ThinkPad',
      descripcion: 'AMD Ryzen 5, 8GB RAM, 256GB SSD',
      costoAdquisicion: 1600,
      precioVenta: 2300,
      stock: 8,
      imagen:
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500',
    },
    {
      categoriaId: categorias[2]!.id,
      nombre: 'MacBook Air M1',
      descripcion: 'Apple M1, 8GB RAM, 256GB SSD',
      costoAdquisicion: 3200,
      precioVenta: 4200,
      stock: 5,
      imagen:
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500',
    },
    {
      categoriaId: categorias[2]!.id,
      nombre: 'Laptop ASUS VivoBook',
      descripcion: 'Intel Core i3, 4GB RAM, 128GB SSD',
      costoAdquisicion: 1200,
      precioVenta: 1700,
      stock: 12,
      imagen: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500',
    },

    // === SMARTPHONES (5) ===
    {
      categoriaId: categorias[3]!.id,
      nombre: 'iPhone 14 Pro',
      descripcion: '256GB, color negro espacial, 5G',
      costoAdquisicion: 4000,
      precioVenta: 5200,
      stock: 8,
      imagen:
        'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500',
    },
    {
      categoriaId: categorias[3]!.id,
      nombre: 'Samsung Galaxy S23',
      descripcion: '128GB, color verde, cámara profesional',
      costoAdquisicion: 3200,
      precioVenta: 4100,
      stock: 12,
      imagen:
        'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500',
    },
    {
      categoriaId: categorias[3]!.id,
      nombre: 'Xiaomi Redmi Note 12',
      descripcion: '128GB, dual SIM, batería 5000mAh',
      costoAdquisicion: 600,
      precioVenta: 850,
      stock: 25,
      imagen:
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500',
    },
    {
      categoriaId: categorias[3]!.id,
      nombre: 'Google Pixel 7',
      descripcion: '128GB, cámara con IA avanzada',
      costoAdquisicion: 2400,
      precioVenta: 3100,
      stock: 7,
      imagen:
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500',
    },
    {
      categoriaId: categorias[3]!.id,
      nombre: 'Motorola Edge 40',
      descripcion: '256GB, 5G, pantalla curva OLED',
      costoAdquisicion: 1400,
      precioVenta: 1900,
      stock: 15,
      imagen:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
    },

    // === AUDIO (5) ===
    {
      categoriaId: categorias[4]!.id,
      nombre: 'Audífonos Sony WH-1000XM5',
      descripcion: 'Cancelación de ruido activa premium',
      costoAdquisicion: 350,
      precioVenta: 480,
      stock: 10,
      imagen:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    },
    {
      categoriaId: categorias[4]!.id,
      nombre: 'Parlante Bluetooth JBL',
      descripcion: 'Resistente al agua IPX7, 20W',
      costoAdquisicion: 80,
      precioVenta: 130,
      stock: 20,
      imagen:
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
    },
    {
      categoriaId: categorias[4]!.id,
      nombre: 'AirPods Pro 2',
      descripcion: '2da generación con cancelación de ruido',
      costoAdquisicion: 280,
      precioVenta: 380,
      stock: 15,
      imagen:
        'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500',
    },
    {
      categoriaId: categorias[4]!.id,
      nombre: 'Micrófono Blue Yeti',
      descripcion: 'Micrófono USB profesional para streaming',
      costoAdquisicion: 150,
      precioVenta: 220,
      stock: 8,
      imagen:
        'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500',
    },
    {
      categoriaId: categorias[4]!.id,
      nombre: 'Soundbar Samsung',
      descripcion: 'Soundbar 2.1 con subwoofer inalámbrico',
      costoAdquisicion: 300,
      precioVenta: 450,
      stock: 6,
      imagen: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500',
    },

    // === ALMACENAMIENTO (5) ===
    {
      categoriaId: categorias[5]!.id,
      nombre: 'SSD Samsung 970 EVO 1TB',
      descripcion: 'NVMe M.2, lectura 3500MB/s',
      costoAdquisicion: 120,
      precioVenta: 180,
      stock: 30,
      imagen:
        'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500',
    },
    {
      categoriaId: categorias[5]!.id,
      nombre: 'Disco Duro Externo 2TB',
      descripcion: 'USB 3.0, portátil y resistente',
      costoAdquisicion: 100,
      precioVenta: 150,
      stock: 25,
      imagen:
        'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500',
    },
    {
      categoriaId: categorias[5]!.id,
      nombre: 'Memoria USB 128GB',
      descripcion: 'USB 3.1 alta velocidad, metálica',
      costoAdquisicion: 15,
      precioVenta: 28,
      stock: 60,
      imagen:
        'https://images.unsplash.com/photo-1625806786037-2afce73b5a2a?w=500',
    },
    {
      categoriaId: categorias[5]!.id,
      nombre: 'Tarjeta MicroSD 256GB',
      descripcion: 'Clase 10, adaptador SD incluido',
      costoAdquisicion: 35,
      precioVenta: 55,
      stock: 40,
      imagen: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=500',
    },
    {
      categoriaId: categorias[5]!.id,
      nombre: 'HDD Interno 2TB',
      descripcion: 'Disco duro 3.5" 7200 RPM SATA',
      costoAdquisicion: 80,
      precioVenta: 120,
      stock: 20,
      imagen:
        'https://images.unsplash.com/photo-1531722569936-825d3dd91b15?w=500',
    },

    // === PERIFÉRICOS (5) ===
    {
      categoriaId: categorias[6]!.id,
      nombre: 'Mouse Logitech MX Master 3',
      descripcion: 'Inalámbrico, ergonómico, multi-dispositivo',
      costoAdquisicion: 80,
      precioVenta: 120,
      stock: 25,
      imagen:
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
    },
    {
      categoriaId: categorias[6]!.id,
      nombre: 'Teclado Mecánico RGB',
      descripcion: 'Switches Blue, retroiluminado, compacto',
      costoAdquisicion: 90,
      precioVenta: 140,
      stock: 18,
      imagen:
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
    },
    {
      categoriaId: categorias[6]!.id,
      nombre: 'Mouse Gamer Razer',
      descripcion: '16000 DPI, programable, RGB',
      costoAdquisicion: 60,
      precioVenta: 95,
      stock: 22,
      imagen:
        'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
    },
    {
      categoriaId: categorias[6]!.id,
      nombre: 'Teclado Inalámbrico Logitech',
      descripcion: 'Silencioso, batería de larga duración',
      costoAdquisicion: 40,
      precioVenta: 65,
      stock: 30,
      imagen:
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
    },
    {
      categoriaId: categorias[6]!.id,
      nombre: 'Webcam Logitech C920',
      descripcion: 'Full HD 1080p, micrófono estéreo',
      costoAdquisicion: 90,
      precioVenta: 135,
      stock: 15,
      imagen:
        'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500',
    },
  ];

  let productosCreados = 0;
  for (const p of productosData) {
    const existe = await prisma.producto.findFirst({
      where: { nombre: p.nombre },
    });
    if (!existe) {
      const producto = await prisma.producto.create({
        data: {
          categoriaId: p.categoriaId,
          nombre: p.nombre,
          descripcion: p.descripcion,
          costoAdquisicion: p.costoAdquisicion,
          precioVenta: p.precioVenta,
          imagen: p.imagen,
          activo: true,
        },
      });
      await prisma.inventario.create({
        data: { productoId: producto.id, stock: p.stock },
      });
      productosCreados++;
    }
  }
  console.log(
    `✅ ${productosCreados} productos creados con inventario e imágenes`,
  );

  // ======================================================
  // 4. CAJA ABIERTA
  // ======================================================
  const cajero = await prisma.usuario.findFirst({ where: { rol: 'CAJERO' } });
  if (cajero) {
    const cajaExistente = await prisma.caja.findFirst({
      where: { estado: 'ABIERTA' },
    });
    if (!cajaExistente) {
      await prisma.caja.create({
        data: {
          usuarioId: cajero.id,
          fechaApertura: new Date(),
          montoInicial: 100,
          estado: 'ABIERTA',
        },
      });
      console.log('✅ Caja abierta creada');
    }
  }

  // ======================================================
  // RESUMEN FINAL
  // ======================================================
  const resumen = {
    usuarios: await prisma.usuario.count(),
    categorias: await prisma.categoria.count(),
    productos: await prisma.producto.count(),
    inventarios: await prisma.inventario.count(),
  };

  console.log('\n📊 RESUMEN:');
  console.log(`Usuarios: ${resumen.usuarios}`);
  console.log(`Categorías: ${resumen.categorias}`);
  console.log(`Productos: ${resumen.productos}`);
  console.log(`Inventarios: ${resumen.inventarios}`);

  console.log('\n🔑 CREDENCIALES:');
  console.log('Admin:    admin@pos.com / Admin12345');
  console.log('Cajero:   cajero@pos.com / Cajero12345');
  console.log('Cliente:  cliente@pos.com / Cliente12345');

  console.log('\n✅ Seed completado exitosamente!\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
