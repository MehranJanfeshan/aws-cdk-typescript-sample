#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { MyNewStack } from '../lib/my-new-stack'

const app = new cdk.App()
new MyNewStack(app, 'MyCDKStack', {})

