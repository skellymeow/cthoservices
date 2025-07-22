// CHANGELOG
// - Initial creation: /book page with Cal.com embed for booking (moved to app/book/page.tsx for proper routing)
// - Made booking page 100% fullscreen, edge-to-edge, no max-width, no margin, no centering, no whitespace
// - Added consistent Header and Footer components
// - Removed Header from /book page, Footer remains

'use client';
import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import Footer from '@/components/ui/Footer';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import ContactDialog from '@/components/ui/ContactDialog';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function BookPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '15min' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <>
      <style>{`html, body { overflow-x: hidden !important; }`}</style>
      <div style={{ width: '100vw', maxWidth: '100vw', minHeight: '100vh', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', background: 'var(--background, #fff)', color: 'var(--foreground, #000)', overflowX: 'hidden', boxSizing: 'border-box' }}>
        {/* Booking Embed */}
        <div style={{ width: '100%', flex: '0 0 auto' }}>
          <Cal
            namespace="15min"
            calLink="ctho-work/15min"
            style={{ width: '100%', minHeight: '60vh', background: 'transparent', border: 'none' }}
            config={{ layout: 'month_view' }}
          />
        </div>
        {/* Modern CTA Section (compact, not sticky) */}
        <section style={{ width: '100%', background: 'var(--background, #fff)', borderTop: '1px solid var(--border, #eee)', padding: '1.25rem 0 1rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', flex: '0 0 auto' }}>
          <div style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--foreground, #222)', marginBottom: '0.25rem', textAlign: 'center' }}>
            Not ready to book? <span style={{ color: '#6017EA' }}>Leave us a message instead.</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-primary text-base py-2 px-5 flex items-center gap-2"
            style={{ borderRadius: '0.375rem', fontWeight: 600, fontSize: '1rem' }}
          >
            Contact us
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </button>
        </section>
        {/* Footer always at the bottom */}
        <Footer />
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-md w-full">
            <ContactDialog onClose={() => setIsModalOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
} 