import { MapPin, X } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function Footer() {
  const [modalOpen, setModalOpen] = useState<'privacy' | 'cookies' | null>(null);

  return (
    <footer id="contato" className="bg-white/60 dark:bg-secondary-dark/80 pt-16 pb-12 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-secondary-light/30">
      <div className="max-w-[1440px] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img 
                src="/logo gtb.png" 
                alt="GTB Logo" 
                className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed mb-8 font-light">
              A GTB é uma correspondente bancária focada em oferecer as melhores soluções financeiras e opções de crédito seguras.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 uppercase text-xs tracking-widest">Links Úteis</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#servicos" className="hover:text-primary-light transition-colors">Serviços de Crédito</a></li>
              <li><a href="#vantagens" className="hover:text-primary-light transition-colors">Por que nos escolher</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-secondary-light/30 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.15em] gap-6 text-slate-500 dark:text-slate-500 text-center md:text-left">
          <span>GTB SOLUÇÕES FINANCEIRAS LTDA © {new Date().getFullYear()}</span>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <span>CNPJ: 35.211.729/0001-91</span>
            <span onClick={() => setModalOpen('privacy')} className="text-primary hover:text-primary-light transition-colors underline cursor-pointer">Privacidade</span>
            <span onClick={() => setModalOpen('cookies')} className="text-primary hover:text-primary-light transition-colors underline cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-none lg:backdrop-blur-sm"
              onClick={() => setModalOpen(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white/60 dark:bg-secondary border border-slate-200 dark:border-secondary-light shadow-2xl rounded-2xl p-6 lg:p-10 max-h-[85vh] overflow-y-auto"
            >
              <button 
                onClick={() => setModalOpen(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-secondary-dark text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              {modalOpen === 'privacy' && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Políticas de Privacidade</h3>
                  <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    <p>A confidencialidade e integridade dos seus dados é o nosso principal compromisso. Esta Política de Privacidade explica como obtemos, armazenamos, utilizamos e descartamos seus dados pessoais.</p>
                    <h4 className="text-slate-900 dark:text-white font-bold text-base mt-6 mb-2">1. Coleta de Informações</h4>
                    <p>Coletamos dados necessários para a análise de crédito e propostas, como nome completo, CPF, e-mail e número de telefone celular. Nenhuma senha de banco ou dado sensível desnecessário é exigido pela GTB nesta etapa.</p>
                    <h4 className="text-slate-900 dark:text-white font-bold text-base mt-6 mb-2">2. Uso das Informações</h4>
                    <p>Seus dados são utilizados exclusivamente para entrar em contato com você via WhatsApp, telefone ou e-mail, bem como verificar condições de crédito nos sistemas dos bancos parceiros.</p>
                    <h4 className="text-slate-900 dark:text-white font-bold text-base mt-6 mb-2">3. Segurança dos Dados</h4>
                    <p>Implementamos tecnologias rigorosas para proteção dos seus dados, garantindo privacidade desde o preenchimento até a cotação com as instituições.</p>
                  </div>
                </div>
              )}

              {modalOpen === 'cookies' && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Políticas de Cookies</h3>
                  <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    <p>A GTB utiliza cookies e tecnologias semelhantes para garantir o correto funcionamento do site, melhorar sua navegação e personalizar nossa comunicação com você.</p>
                    <h4 className="text-slate-900 dark:text-white font-bold text-base mt-6 mb-2">O que são cookies?</h4>
                    <p>Cookies são pequenos arquivos de texto armazenados no seu navegador ao visitar um site. Eles permitem que o nosso sistema reconheça seu dispositivo e lembre de algumas de suas preferências e interações anteriores conosco.</p>
                    <h4 className="text-slate-900 dark:text-white font-bold text-base mt-6 mb-2">Como utilizamos?</h4>
                    <ul className="list-disc pl-4 space-y-2">
                      <li><strong>Essenciais:</strong> Para o site funcionar de forma segura.</li>
                      <li><strong>Desempenho:</strong> Para entender como os visitantes usam o site.</li>
                      <li><strong>Marketing:</strong> Para personalizar campanhas caso você tenha interesse em crédito.</li>
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
