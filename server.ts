// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// ERROR -> ERROR { Error: Uncaught (in promise): Error: The XMLHttpRequest compatibility library was not found.
// Ref -> https://github.com/angular/angularfire2/issues/1766
// https://github.com/gdi2290/angular-websocket/issues/103
(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


// Error after build SSR
// WARNING in ./node_modules/ws/lib/buffer-util.js
// Module not found: Error: Can't resolve 'bufferutil' in 'D:\Self-Preparation\angular-update\angular-update\node_modules\ws\lib'
//  @ ./node_modules/ws/lib/buffer-util.js
//  @ ./node_modules/ws/lib/receiver.js
//  @ ./node_modules/ws/index.js
//  @ ./server.ts

// WARNING in ./node_modules/ws/lib/validation.js
// Module not found: Error: Can't resolve 'utf-8-validate' in 'D:\Self-Preparation\angular-update\angular-update\node_modules\ws\lib'
//  @ ./node_modules/ws/lib/validation.js
//  @ ./node_modules/ws/lib/receiver.js
//  @ ./node_modules/ws/index.js
//  @ ./server.ts
// Ref - https://github.com/gdi2290/angular-websocket/issues/103



// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    // Our index.html
    document: template,
    url: options.req.url,
    // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }).then(html => {
    callback(null, html);
  });
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
