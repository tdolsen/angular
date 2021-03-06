/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import * as module from './module';

if (module.AppModule) {
  platformBrowserDynamic().bootstrapModule(module.AppModule);
}