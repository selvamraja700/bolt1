import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AudienceSection from '@/components/AudienceSection';
import CatalogSection from '@/components/CatalogSection';
import ProcessSection from '@/components/ProcessSection';
import GallerySection from '@/components/GallerySection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ProductModal from '@/components/ProductModal';
import EnquiryModal from '@/components/EnquiryModal';
import TransactionOverlay from '@/components/TransactionOverlay';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useEnquiryForm } from '@/hooks/useEnquiryForm';
import type { Product as ProductType } from '@/lib/content';

export default function Home() {
  const [activeProduct, setActiveProduct] = useState<ProductType | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [whatsappHidden, setWhatsappHidden] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  const form = useEnquiryForm();

  // IntersectionObserver to hide WhatsApp button near footer
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;
    footerRef.current = footer as HTMLElement;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.25) {
            setWhatsappHidden(true);
          } else {
            setWhatsappHidden(false);
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // Hide WhatsApp when modals are open
  const modalActive = activeProduct !== null || enquiryModalOpen || form.isProcessing;

  const handleOpenEnquiry = () => setEnquiryModalOpen(true);
  const handleCloseEnquiry = () => setEnquiryModalOpen(false);

  const handleAudienceSelect = (buyerType: string) => {
    form.prefill('buyerType', buyerType);
    setEnquiryModalOpen(true);
  };

  const handleProductSelect = (product: ProductType) => {
    setActiveProduct(product);
  };

  const handleEnquireProduct = (productName: string) => {
    form.prefill('product', productName);
    setEnquiryModalOpen(true);
  };

  const handleNavigate = (_path: string) => {
    // Could be used for analytics tracking
  };

  return (
    <div className="min-h-screen bg-forest-900">
      <Header onOpenEnquiry={handleOpenEnquiry} onNavigate={handleNavigate} />

      <main>
        <Hero onOpenEnquiry={handleOpenEnquiry} />
        <AudienceSection onAudienceSelect={handleAudienceSelect} />
        <CatalogSection
          onProductSelect={handleProductSelect}
          onEnquireProduct={handleEnquireProduct}
        />
        <ProcessSection />
        <GallerySection />
        <FAQSection />
        <ContactSection
          formData={form.formData}
          formErrors={form.formErrors}
          draftRestored={form.draftRestored}
          updateField={form.updateField}
          handleSubmit={form.handleSubmit}
        />
      </main>

      <Footer />

      {/* Modals & Overlays */}
      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onEnquire={handleEnquireProduct}
      />
      <EnquiryModal
        open={enquiryModalOpen}
        onClose={handleCloseEnquiry}
        formData={form.formData}
        formErrors={form.formErrors}
        draftRestored={form.draftRestored}
        updateField={form.updateField}
        handleSubmit={form.handleSubmit}
      />
      <TransactionOverlay
        isProcessing={form.isProcessing}
        status={form.formStatus}
        message={form.formStatusMessage}
      />
      <WhatsAppButton hidden={whatsappHidden || modalActive} />
    </div>
  );
}
