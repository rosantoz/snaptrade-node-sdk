export interface CurrencyType {
  id: string;
  code: string;
  name: string;
}
export interface AccountType {
  id: string;
  brokerage: string;
  number: string;
  name: string;
}

export interface BalanceType {
  currency: CurrencyType;
  cash: number;
}

export interface SymbolType {
  symbol: string;
  name: string;
  currency: CurrencyType;
  exchange: {
    code: string;
    name: string;
  };
}

export interface PositionType {
  symbol: SymbolType;
}

export interface UniversalSymbolType {
  id: string;
  symbol: string;
  description: string;
  currency: CurrencyType;
}

export interface ManualTradeSymbolType {
  brokerage_symbol_id: string;
  universal_symbol_id: string;
  currency: CurrencyType;
  local_id: string;
  description: string;
  symbol: string;
}

export interface TradeType {
  id: string;
  account: AccountType;
  order_type: string;
  time_in_force: 'FOK' | 'Day';
  symbol: ManualTradeSymbolType;
  action: string;
  units: number;
  price: number;
}

export interface BrokerageType {
  id: string;
  name: string;
  url: string;
  authorized_types: {
    type: string;
  }[];
}

export interface ExchangeRateType {
  src: CurrencyType;
  dst: CurrencyType;
  exchange_rate: number;
}

export interface PortfolioGroupType {
  id: string;
  name: string;
}

export interface PortfolioGroupPositionType {
  symbol: SymbolType;
  price: number;
  units: number;
  fractional_units: number;
}

export interface SecurityType {
  id: string;
  code: string;
  description: string;
  is_supported: boolean;
}

export interface BrokerageAuthorizationTypeObject {
  id: string;
  type: 'read' | 'trade';
  auth_type: string;
  brokerage: {
    id: string;
    name: string;
    slug: string;
  };
}

export interface StockExchange {
  id: string;
  code: string;
  mic_code: string;
  name: string;
  timezone: string;
  start_time: string;
  close_time: string;
  suffix: string;
}
