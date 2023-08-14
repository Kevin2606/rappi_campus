# Rappi Campus

![imagen](https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Rappi_logo.svg/1200px-Rappi_logo.svg.png)

## ¿Qué implica Rappi?

Rappi opera como una compañía que simplifica el acceso de las personas a productos y servicios esenciales.

## Gama de Servicios en Rappi:
- Supermercado:
Este servicio se centra en la comodidad y en el ahorro de tiempo y dinero, ya que Rappi permite realizar una compra completa de víveres y productos esenciales.

- Restaurantes y Comidas:
La premisa de este servicio es permitir a los usuarios ordenar comida de cualquier restaurante en su área, proporcionando una variedad de opciones gastronómicas.

- Rappicash:
En cuanto al servicio Rappicash, se enfoca en llevar efectivo a la ubicación deseada por el cliente, brindando facilidad en el acceso a dinero en efectivo.

- Salud y Bienestar:
En lo que concierne al servicio de Salud, Rappi facilita la compra de medicamentos y artículos de salud necesarios para los usuarios.

## Operación de una Aplicación de Entrega a Domicilio:

![image](https://github.com/Kevin2606/rappi_campus/assets/54305330/49857b4f-df51-474a-a8de-f64505e20811)

1. Creación y Gestión de Cuentas:
Los usuarios se conectan con la aplicación mediante el proceso de registro. Por ende, este proceso debe ser rápido y sencillo, solicitando únicamente la información esencial. La mayoría de las aplicaciones de entrega utilizan métodos como correo electrónico, contraseña y número telefónico, así como opciones de registro a través de Google o Facebook.

2. Exploración de Servicios:
Los usuarios tienen acceso a un catálogo de restaurantes o servicios, y es recomendable incorporar una función de búsqueda para una navegación más eficiente. Los clientes suelen buscar opciones de pedido por nombre del establecimiento, ubicación o menú.

3. Realización de Pedidos:
Los usuarios deben tener la posibilidad de agregar artículos al carrito en pocos clics y también deben poder modificar o eliminar elementos fácilmente. Luego, pueden revisar un resumen de su compra, el cual debe ser confirmado antes de proceder al pago.

4. Procesamiento de Pagos:
Comienza ofreciendo de 2 a 3 métodos de pago, con la opción de expandir a medida que la plataforma crezca. Si los usuarios han ingresado sus detalles de pago previamente, se les debe permitir seleccionar esta opción durante el proceso de pago.

5. Rastreo de Pedidos:
La función de seguimiento permite a los usuarios conocer la ubicación de sus pedidos en tiempo real. El seguimiento se lleva a cabo utilizando APIs de ubicación, como la proporcionada por Google en Android o la CoreLocation Framework en iOS. Estas herramientas permiten estimar el tiempo de entrega aproximado basado en la ubicación del repartidor.

6. Notificaciones:
Dado que los clientes objetivos suelen tener agendas ocupadas, es fundamental mantenerlos informados sobre el estado de sus pedidos (Confirmado, En Progreso, En Camino, Entregado). Esto puede lograrse a través de notificaciones push o mensajes de texto, garantizando que solo se envíen notificaciones relevantes.

7. Valoraciones y Opiniones:
Los usuarios comparten sus experiencias al otorgar calificaciones y escribir reseñas. Fomenta su participación al permitirles evaluar los servicios de entrega, el tiempo de espera y la calidad de los alimentos. Las reseñas también son útiles para detectar problemas potenciales en el servicio.

8. Historial de Pedidos:
Ofrecer a los usuarios un historial de pedidos anteriores mejora su experiencia. Pueden acceder fácilmente a los platos que más les gustaron y repetir pedidos. Esto brinda comodidad y fomenta la lealtad del cliente.

![image](https://github.com/Kevin2606/rappi_campus/assets/54305330/8c3c8968-5a99-4133-b970-121fedc7c04f)

## Biblografia

- [Rappi](https://www.rappi.com.co/)
- [Rappi: ¿Qué es?](https://blog.rappi.com/que-es-rappi/)
- [Rappi: ¿Cómo funciona?](https://www.lacoladerata.co/opinion/analisis/como-funcionan-las-companias-de-domicilio-como-rappi/)


## ¿Qué es Rappi Campus?

Rappi Campus es un proyecto que permitira brindar un servicio de entrega de productos a domicilio a las personas, utilizando tecnologias de desarrollo web y movil.

## ¿Qué tecnologias se utilizaran?

- [React](https://es.reactjs.org/)
- [MongoDB](https://www.mongodb.com/es)
- [Express](https://expressjs.com/es/)
- [NodeJS](https://nodejs.org/es/)

## ¿Que servicios se ofreceran?
- Modulo de clientes
- Modulo de repartidores
- Modulo de restaurantes
- Servicio de entrega a domicilio
- Servicio de pago en linea
- Servicio de rastreo de pedidos
- Servicio de notificaciones
- Servicio de valoraciones y opiniones
- Servicio de historial de pedidos


## Cómo asignar ramas en GitHub:

### Paso 1: Crear una nueva rama
```bash
# Desde la línea de comandos
git checkout -b nombre-de-la-rama
```

### Paso 2: Realizar cambios y confirmar
Realiza tus cambios en la nueva rama y luego confírmalos.
```bash
git add .
git commit -m "Descripción de los cambios"
```

### Paso 3: Subir la rama al repositorio remoto
```bash
git push origin nombre-de-la-rama
```

### Paso 4: Crear una Pull Request (PR)
Dirígete a tu repositorio en GitHub y verás un mensaje para comparar y crear una Pull Request desde tu rama. Completa los detalles y crea la PR.

### Paso 5: Revisión y fusión
Espera a que otros revisen tus cambios en la PR. Si todo está bien, alguien con los permisos adecuados puede fusionar la PR en la rama principal.

## Cómo realizar un release en GitHub:

### Paso 1: Preparar la versión
Asegúrate de que todos los cambios relevantes estén en la rama principal y lista para el release.

### Paso 2: Crear un tag (etiqueta) para la versión
```bash
# Crear un tag y asociarlo al commit actual
git tag -a v1.0.0 -m "Versión 1.0.0"
```

### Paso 3: Subir el tag al repositorio remoto
```bash
git push origin v1.0.0
```

### Paso 4: Crear el release en GitHub
1. Ve al repositorio en GitHub.
2. Navega a la pestaña "Releases" y haz clic en "Create a new release".
3. Ingresa el nombre del tag (ej. v1.0.0) en "Tag version".
4. Completa el título del release.
5. Puedes añadir notas adicionales y enlaces.
6. Haz clic en "Publish release" para crear el release.

### Código en consola para asignar ramas y realizar un release:
```bash
# Crear y cambiar a una nueva rama
git checkout -b nombre-de-la-rama

# Realizar cambios y confirmar en la nueva rama
git add .
git commit -m "Descripción de los cambios"

# Subir la rama al repositorio remoto
git push origin nombre-de-la-rama

# Crear un tag y subirlo al repositorio remoto
git tag -a v1.0.0 -m "Versión 1.0.0"
git push origin v1.0.0
```

Recuerda reemplazar `nombre-de-la-rama` y `v1.0.0` con los nombres y versiones adecuados según tu proyecto.

# Notion: Plataforma de Gestión de Tareas y Colaboración

![imagen](https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_23f1df4a48002425b3574347f0ea5676/notion.png)

**Notion** es una plataforma que combina la gestión de tareas, la toma de notas y la colaboración en un solo lugar. Permite a los usuarios crear y organizar información de manera flexible, lo que la hace ideal para equipos y proyectos. Aquí hay una descripción general de cómo funcionaba Notion:

1. Espacio de Trabajo Estructurado
Notion se basa en el concepto de páginas y bloques. Las páginas pueden ser carpetas, documentos o bases de datos, y los bloques son elementos individuales de contenido dentro de esas páginas. Los bloques pueden ser texto, listas, imágenes, enlaces, tablas, archivos adjuntos, etc.

2. Organización Personalizada
Los usuarios pueden crear su propio sistema de organización mediante la creación y la jerarquía de páginas y subpáginas. Esto permite adaptar Notion a las necesidades específicas de cada usuario o proyecto.

3. Gestión de Tareas y Proyectos
Notion permite crear listas de tareas, tablas Kanban, calendarios y más para la gestión de proyectos y tareas. Puedes asignar tareas a miembros del equipo, establecer fechas límite y prioridades.

4. Colaboración en Tiempo Real
Varios usuarios pueden colaborar en un espacio de trabajo de Notion al mismo tiempo. Los cambios se reflejan en tiempo real, lo que facilita la colaboración en equipo sin problemas.

5. Bases de Datos y Consultas
Notion permite crear bases de datos personalizadas con campos y propiedades específicas. Puedes agregar filtros, ordenar y agrupar datos en estas bases de datos para un análisis más profundo.

6. Plantillas y Personalización
Notion proporciona una amplia variedad de plantillas predefinidas para diferentes casos de uso, como gestión de proyectos, seguimiento de objetivos, planificación de viajes y más. También puedes personalizar estas plantillas según tus necesidades.

7. Integraciones y Automatizaciones
Notion ofrece integraciones con otras herramientas populares, como Google Drive, Slack, Trello y más. También tiene funciones de automatización que permiten crear flujos de trabajo automatizados.

8. Aplicaciones Móviles y Acceso en Línea
Notion está disponible en dispositivos móviles (iOS y Android) y se puede acceder a través de navegadores web, lo que permite acceder a tus datos desde cualquier lugar.

Ejemplo:

![image](https://github.com/Kevin2606/rappi_campus/assets/54305330/a683f9e3-bedb-4ade-ba42-d78cae9809c9)

Bibliografía:
- [Notion](https://www.notion.so/)
- [¿Qué es Notion y cómo funciona? Guía completa - Crehana](https://www.crehana.com/blog/negocios/que-es-notion/)
- [Cómo Usar Notion: Guía Completa Para Principiantes - Juan Pardo](https://juanpardo.es/como-usar-notion/)
- [Notion, qué es y cómo funciona - El Grupo Informático](https://www.elgrupoinformatico.com/tutoriales/notion-que-como-funciona-t77621.html)


## Autores
- [Kevin Andres Gallardo Robles](https://github.com/Kevin2606)
- [Gerson Hernandez Olave](https://github.com/gersonhdz8)