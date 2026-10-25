import { useState } from 'react';
import { TabType, CartItem, ProductItem } from './types.ts';
import { PRODUCTS } from './data/mockData.ts';
import { Header } from './components/Header.tsx';
import { OverviewView } from './components/OverviewView.tsx';
import { HardwareSpecsView } from './components/HardwareSpecsView.tsx';
import { CompanionAppView } from './components/CompanionAppView.tsx';
import { ShopBundlesView } from './components/ShopBundlesView.tsx';
import { CartDrawer } from './components/CartDrawer.tsx';
import { CheckoutModal } from './components/CheckoutModal.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('overview');
  // Initialize with 1x VELORAY Core 01 Kit in cart as shown in the reference design
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);

  const handleSelectTab = (tab: TabType) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: ProductItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleInstantPreOrder = (product: ProductItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) return prev;
      return [...prev, { product, quantity: 1 }];
    });
    setIsCheckoutOpen(true);
  };

  const handlePreOrderHeaderClick = () => {
    setIsCheckoutOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between selection:bg-primary-container selection:text-on-primary-container">
      {/* Sticky Tactical Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onPreOrderClick={handlePreOrderHeaderClick}
      />

      {/* Main Content Area */}
      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-4rem)] flex-1">
        {currentTab === 'overview' && (
          <OverviewView
            onSelectTab={handleSelectTab}
            onPreOrder={handlePreOrderHeaderClick}
          />
        )}
        {currentTab === 'hardware-and-specs' && <HardwareSpecsView />}
        {currentTab === 'companion-app' && <CompanionAppView />}
        {currentTab === 'shop-and-bundles' && (
          <ShopBundlesView
            onAddToCart={handleAddToCart}
            onInstantPreOrder={handleInstantPreOrder}
          />
        )}
      </main>

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Pre-Order Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderCompleted={() => {
          setCartItems([]);
        }}
      />

      {/* Tactical Engineering Footer */}
      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}
