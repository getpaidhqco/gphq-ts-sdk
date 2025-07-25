import { BaseEntity } from './common';

export interface Gateway extends BaseEntity {
  org_id: string;
  psp_id: string;
  name: string;
  settings: Record<string, any>;
  is_active: boolean;
}

export interface PspConfiguration extends BaseEntity {
  name: string;
  provider: 'paystack' | 'checkout_com' | 'stripe';
  configuration: any;
  is_active: boolean;
}

export interface CreateGatewayRequest {
  psp_id: string;
  name: string;
  settings: Record<string, any>;
  is_active?: boolean;
}

export interface CreatePspConfigurationRequest {
  name: string;
  provider: 'paystack' | 'checkout_com' | 'stripe';
  configuration: any;
  is_active?: boolean;
}

export interface UpdateGatewayRequest {
  name?: string;
  settings?: Record<string, any>;
  is_active?: boolean;
}
