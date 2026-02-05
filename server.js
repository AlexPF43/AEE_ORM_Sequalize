import express from "express";
import productoRoutes from "./routes/productosRoutes.js";
import logRoutes from "./routes/logRoutes.js";
import { sequelize } from "./config/db.js";
import initModels from "./models/init-models.js";
import clientesRoutes from "./routes/clientesRoutes.js";
import categoriasRoutes from "./routes/categoriasRoutes.js";
import pedidosRoutes from "./routes/pedidosRoutes.js";
import detalles_pedidoRoutes from "./routes/detalles_pedidoRoutes.js";

const app = express();
app.use(express.json());

// Inicializamos los modelos una sola vez
const models = initModels(sequelize);
app.locals.models = models;
// Rutas
app.use("/productos", productoRoutes);
app.use("/log", logRoutes);
app.use("/clientes", clientesRoutes);
app.use("/categorias", categoriasRoutes);
app.use("/pedidos", pedidosRoutes);
app.use("/detalles_pedido", detalles_pedidoRoutes);
// Sincronizar base de datos
(async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log("✅ Tablas sincronizadas.");
    } catch (error) {
        console.error("❌ Error al sincronizar las tablas:", error);
    }
})();
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor correindo en http://localhost:${PORT}`));