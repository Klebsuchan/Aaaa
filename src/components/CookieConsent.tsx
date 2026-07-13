import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or declined
    const consent = localStorage.getItem('gtb-cookie-consent');
    if (!consent) {
      // Small delay to make it feel smoother
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gtb-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('gtb-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-50 md:max-w-[400px]"
        >
          <div className="bg-white dark:bg-secondary border border-slate-200 dark:border-secondary-light shadow-2xl rounded-2xl p-6 relative overflow-hidden">
            <button 
              onClick={handleDecline} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">Cookies e Privacidade</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência, personalizar anúncios e analisar nosso tráfego. Ao continuar navegando, você concorda com nossas <a href="#" className="text-primary hover:text-primary-light underline">Políticas de Privacidade</a> e <a href="#" className="text-primary hover:text-primary-light underline">Cookies</a>.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={handleAccept}
                    className="flex-1 bg-primary text-[#0a1422] font-bold py-2.5 rounded-xl hover:bg-primary-light transition-colors text-sm shadow-md"
                  >
                    Aceitar
                  </button>
                  <button 
                    onClick={handleDecline}
                    className="flex-1 bg-slate-100 dark:bg-secondary-light/30 text-slate-700 dark:text-slate-300 font-bold py-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-secondary-light/50 transition-colors text-sm"
                  >
                    Recusar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
