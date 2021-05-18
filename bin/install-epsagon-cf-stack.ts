#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { InstallEpsagonCfStackStack } from '../lib/install-epsagon-cf-stack-stack';

const app = new cdk.App();

const env = {
  account: '<ACCOUNT ID>',
  region: '<REGION>'
};

new InstallEpsagonCfStackStack(app, 'EpsagonStack', { env: env });