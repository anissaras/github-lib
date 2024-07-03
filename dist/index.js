"use strict";
// import { getCommitBySHA } from './githubClient';
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
// const owner = 'anissaras';
// const repo = 'EshopV2';
// const sha = 'cf2ac98';
// getCommitBySHA(owner, repo, sha)
//   .then(commit => {
//     console.log('Commit Details:', commit);
//   })
//   .catch(error => {
//     console.error('Error fetching commit:', error.message);
//   });
const express_1 = __importDefault(require("express"));
const githubClient_1 = require("./githubClient");
const app = (0, express_1.default)();
const port = 3000;
app.get('/commit/:owner/:repo/:sha', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { owner, repo, sha } = req.params;
    try {
        const commit = yield (0, githubClient_1.getCommitBySHA)(owner, repo, sha);
        res.json(commit);
    }
    catch (error) {
        res.status(500).json("Une erreur est survenue");
    }
}));
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
