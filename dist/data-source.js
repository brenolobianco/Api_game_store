"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
require("dotenv/config");
require("reflect-metadata");
const AppDataSource = new typeorm_1.DataSource(process.env.NODE_ENV === "test" ?
    {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"]
    } :
    {
        type: 'postgres',
        host: process.env.PGHOST,
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        port: parseInt(process.env.PGPORT),
        database: process.env.DB,
        synchronize: false,
        logging: true,
        entities: [path_1.default.join(__dirname, "./entities/*.{ts,js}")],
        migrations: [path_1.default.join(__dirname, "./migrations/*.{ts,js}")]
    });
exports.default = AppDataSource;
//# sourceMappingURL=data-source.js.map