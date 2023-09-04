import { z } from "zod";
/*
 "nombre",
                "apellido",
                "correo",
                "contrasena",
                "direccion_entrega",
                "numero_celular",
                "cedula",
                "fecha_nacimiento",
                "sexo",

*/


const clienteSchema = z.object({
    nombre: z.string().min(3).max(50),
    apellido: z.string().min(3).max(50),
    correo: z.string().email(),
    contrasena: z.string().min(3).max(50),
    direccion_entrega: z.string().min(3).max(50),
    numero_celular: z.string().min(3).max(50),
    cedula: z.string().min(3).max(50),
    fecha_nacimiento: z.string().min(3).max(50),
    sexo: z.enum(["M", "F"]),
})

const repartidorSchema = z.object({
    nombre: z.string().min(3).max(50),
    apellido: z.string().min(3).max(50),
    correo: z.string().email(),
    contrasena: z.string().min(3).max(50),
    numero_celular: z.string().min(3).max(50),
    cedula: z.string().min(3).max(50),
    fecha_nacimiento: z.string().min(3).max(50),
    sexo: z.enum(["M", "F"]),
    tipo_veiculo: z.enum(["Bicicleta", "Moto", "Carro"]),
})
/*
"id_restaurante",
                "nombre",
                "valor_unitario",
                "descripcion",
                "foto_producto",
                "stock",

*/
const productoSchema = z.object({
    id_restaurante: z.number().min(1),
    nombre: z.string().min(3).max(50),
    valor_unitario: z.number().min(0),
    descripcion: z.string().min(3).max(50),
    foto_producto: z.string().min(3).max(50),
    stock: z.number().min(0),
})
/*
id_cliente: {
                    bsonType: "int",
                },
                id_repartidor: {
                    bsonType: "int",
                },
                id_restaurante: {
                    bsonType: "int",
                },
                productos: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["id_producto", "cantidad"],
                        properties: {
                            id_producto: {
                                bsonType: "int",
                            },
                            cantidad: {
                                bsonType: "int",
                            },
                        },
                    },
                },
                metodo_pago: {
                    enum: ["Efectivo", "Tarjeta"],
                },
                valor_total: {
                    bsonType: "decimal",
                },
                fecha_pedido: {
                    bsonType: "date",
                },
            },

*/
const pedidoSchema = z.object({
    id_cliente: z.number().min(1),
    id_repartidor: z.number().min(1),
    id_restaurante: z.number().min(1),
    productos: z.array(z.object({
        id_producto: z.number().min(1),
        cantidad: z.number().min(1),
    })),
    metodo_pago: z.enum(["Efectivo", "Tarjeta"]),
    valor_total: z.number().min(0),
    fecha_pedido: z.string().min(3).max(50),
})

/*
nombre: {
                    bsonType: "string",
                },
                direccion: {
                    bsonType: "string",
                },
                numero_celular: {
                    bsonType: "string",
                },
                correo: {
                    bsonType: "string",
                },
                contrasena: {
                    bsonType: "string",
                },
                horario_atencion: {
                    bsonType: "string",
                },
                foto_restaurante: {
                    bsonType: "string",
                },
            },

*/

const restauranteSchema = z.object({
    nombre: z.string().min(3).max(50),
    direccion: z.string().min(3).max(50),
    numero_celular: z.string().min(3).max(50),
    correo: z.string().email(),
    contrasena: z.string().min(3).max(50),
    horario_atencion: z.string().min(3).max(50),
    foto_restaurante: z.string().min(3).max(50),
})

export { clienteSchema, repartidorSchema, productoSchema, pedidoSchema, restauranteSchema };

