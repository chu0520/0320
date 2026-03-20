/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Clock, Globe, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center p-4 font-serif">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="box max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-black/5"
        id="bookstore-card"
      >
        {/* Top Section: Header with Image Background */}
        <div className="top relative h-48 flex items-end p-8 bg-[#5A5A40]">
          <img 
            src="https://pic.pimg.tw/sidney6811/1529508979-1559019819_n.jpg"
            alt="浮光書局背景"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5A5A40] via-[#5A5A40]/40 to-transparent" />
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white tracking-tight flex flex-col leading-none" id="main-title">
              浮光書局
              <span className="smalltxt text-sm font-sans font-light tracking-[0.2em] mt-2 opacity-80 uppercase">
                Illumination BOOKS
              </span>
            </h2>
          </div>
        </div>

        {/* Bottom Section: Info and Buttons */}
        <div className="bottom p-8 space-y-8">
          <ul className="space-y-6 text-[#4a4a3a]">
            <li className="flex items-start gap-4" id="address-item">
              <MapPin className="w-5 h-5 mt-1 text-[#5A5A40] shrink-0" />
              <div>
                <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-[#5A5A40]/60 mb-1">地址</h3>
                <p className="text-lg leading-relaxed">台北市大同區赤峰街 47 巷 16 號 2 樓</p>
              </div>
            </li>
            
            <li className="flex items-start gap-4" id="phone-item">
              <Phone className="w-5 h-5 mt-1 text-[#5A5A40] shrink-0" />
              <div>
                <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-[#5A5A40]/60 mb-1">電話</h3>
                <p className="text-lg">02 2550 7288</p>
              </div>
            </li>
            
            <li className="flex items-start gap-4" id="hours-item">
              <Clock className="w-5 h-5 mt-1 text-[#5A5A40] shrink-0" />
              <div>
                <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-[#5A5A40]/60 mb-1">開放時間</h3>
                <p className="text-lg flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  今日正常營業 · 14:00–21:30
                </p>
              </div>
            </li>
          </ul>

          <div className="buttons flex gap-3 pt-4" id="action-buttons">
            <a 
              href="#" 
              className="flex-1 flex items-center justify-center gap-2 bg-[#5A5A40] text-white py-4 rounded-2xl font-sans font-medium hover:bg-[#4a4a3a] transition-colors shadow-lg shadow-[#5A5A40]/20"
              id="btn-website"
            >
              <Globe className="w-4 h-4" />
              前往網站
            </a>
            <a 
              href="#" 
              className="flex-1 flex items-center justify-center gap-2 border-2 border-[#5A5A40]/10 text-[#5A5A40] py-4 rounded-2xl font-sans font-medium hover:bg-[#5A5A40]/5 transition-colors"
              id="btn-more"
            >
              <Info className="w-4 h-4" />
              更多訊息
            </a>
          </div>
        </div>
      </motion.div>

      {/* Footer Decoration */}
      <div className="fixed bottom-8 text-[#5A5A40]/30 font-sans text-[10px] tracking-[0.5em] uppercase pointer-events-none">
        Chifeng Street · Taipei City
      </div>
    </div>
  );
}
