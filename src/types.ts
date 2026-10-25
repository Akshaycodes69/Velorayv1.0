export type TabType = 'overview' | 'hardware-and-specs' | 'companion-app' | 'shop-and-bundles';

export type CockpitDisplayMode = 'turn-by-turn' | 'compass' | 'segment' | 'telemetry';

export interface RouteData {
  id: string;
  name: string;
  location: string;
  distanceKm: number;
  elevGainM: number;
  estDuration: string;
  terrain: 'Gravel' | 'Alpine Road' | 'Urban Grid' | 'Coastal Paved';
  turns: Array<{
    id: number;
    instruction: string;
    distanceMeters: number;
    icon: string;
    road: string;
  }>;
  segments: Array<{
    name: string;
    lengthKm: number;
    prDeltaSeconds: number;
    avgGradePct: number;
  }>;
}

export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  image: string;
  badge?: string;
  features: string[];
  inStockRemaining?: number;
  type: 'core' | 'bundle' | 'accessory';
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}
