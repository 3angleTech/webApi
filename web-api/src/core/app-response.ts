/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webApi/LICENSE
 */

import { Response } from 'express';
import { User } from '../data';

export interface UserContext {
  user: User;
}

export interface AppResponse extends Response {
  getUserContext: () => UserContext;
}