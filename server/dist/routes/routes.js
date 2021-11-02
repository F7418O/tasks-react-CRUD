"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Task_1 = __importDefault(require("../model/Task"));
const routes = (0, express_1.Router)();
routes.post('/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    if (title !== '' || description !== "")
        console.log('si hay datos');
    const task = new Task_1.default({
        title,
        description
    });
    yield task.save();
    return res.json(task);
}));
routes.get('/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield Task_1.default.find();
    res.send(tasks);
}));
routes.get('/tasks/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield Task_1.default.findById(req.params.id);
    return res.send(task);
}));
routes.put('/tasks/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield Task_1.default.findByIdAndUpdate(req.params.id, req.body);
    return res.json(task);
}));
routes.delete('/tasks/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskDeleted = yield Task_1.default.findByIdAndDelete(req.params.id);
    return res.json(taskDeleted);
}));
exports.default = routes;
