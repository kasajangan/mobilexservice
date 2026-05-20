import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageSquare,
  Wrench,
  Shield,
  Zap,
  Sparkles,
  Clock,
  Copy,
  Check,
  Eye,
  Code,
  Smartphone,
  ChevronRight,
  Laptop,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { AIDiagCard } from "./components/AIDiagCard";

export default function App() {
  const [copiedWordPressCode, setCopiedWordPressCode] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  // Phone numbers and locations
  const waNumber = "081288678992";
  const waMessage = "Halo Mobile X Service! Saya ingin tanya biaya dan ketersediaan sparepart untuk perangkat saya.";
  const waLink = `https://wa.me/6281288678992?text=${encodeURIComponent(waMessage)}`;
  const locationText = "GRAND ITC PERMATA HIJAU LT3 Blok C11 No.5";
  const googleMapsSearchLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("ITC Permata Hijau Lt.3 Blok C11 No.5 Jakarta")}`;

  // Image references from our generated files
  const heroImage = "/src/assets/images/gadget_repair_hero_1779277358048.png";
  const toolsImage = "/src/assets/images/repair_tools_detail_1779277377553.png";

  // Raw WordPress-optimized, highly-responsive, clean HTML & inline CSS template.
  // It features inline premium gradients, grid systems, high contrast typography, SVGs, and direct WhatsApp / Google Maps CTAs.
  const wordpressHtmlCode = `<!-- Mobile X Service Full Premium Responsive Landing Page for WordPress -->
<div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; background: #090b11; color: #f1f5f9; min-height: 100vh; width: 100%; max-width: 1100px; margin: 0 auto; border-radius: 32px; border: 1px solid #111827; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.7); overflow: hidden; box-sizing: border-box; line-height: 1.5;">

  <!-- Main Container -->
  <div style="padding: 0; box-sizing: border-box; position: relative;">
    
    <!-- Decorative Ambient Glows -->
    <div style="position: absolute; top: 15%; left: -10%; width: 350px; height: 350px; background: rgba(6, 182, 212, 0.05); border-radius: 50%; filter: blur(80px); pointer-events: none;"></div>
    <div style="position: absolute; top: 35%; right: -10%; width: 350px; height: 350px; background: rgba(37, 99, 235, 0.04); border-radius: 50%; filter: blur(80px); pointer-events: none;"></div>
    <div style="position: absolute; bottom: 15%; left: 10%; width: 300px; height: 300px; background: rgba(245, 158, 11, 0.03); border-radius: 50%; filter: blur(80px); pointer-events: none;"></div>

    <!-- 1. Header Navigation Bar -->
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px; padding: 25px 30px; border-bottom: 1px solid #1f2937; background: rgba(9, 11, 17, 0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); box-sizing: border-box;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="width: 44px; height: 44px; border-radius: 12px; background: linear-gradient(135deg, #06b6d4, #2563eb); display: flex; align-items: center; justify-content: center; color: white; font-weight: 900; font-size: 20px; text-shadow: 0 2px 4px rgba(0,0,0,0.3); box-shadow: 0 4px 14px rgba(6, 182, 212, 0.2);">
          MX
        </div>
        <div>
          <span style="font-size: 19px; font-weight: 800; letter-spacing: -0.5px; color: #ffffff; display: block; line-height: 1.2;">
            Mobile X Service
          </span>
          <div style="display: flex; align-items: center; gap: 6px; margin-top: 3px;">
            <span style="width: 7px; height: 7px; border-radius: 50%; background: #10b981; display: inline-block;"></span>
            <span style="font-size: 11px; color: #9ca3af; font-weight: 600;">Buka Setiap Hari (10:00 - 21:00)</span>
          </div>
        </div>
      </div>

      <div style="display: flex; align-items: center; gap: 15px;">
        <a href="https://wa.me/6281288678992?text=Halo%20Mobile%20X%20Service!%20Saya%20tertarik%20untuk%20menanyakan%20konsultasi%20reparasi%20gadget%20saya" target="_blank" rel="noopener noreferrer" style="background: #10b981; color: white !important; font-weight: 700; padding: 12px 24px; border-radius: 14px; text-decoration: none; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.25); transition: background 0.2s;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="fill: currentColor;"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          WhatsApp: 0812-8867-8992
        </a>
      </div>
    </div>

    <!-- 2. Hero Section -->
    <div style="padding: 50px 30px; border-bottom: 1px solid #111827; box-sizing: border-box;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; align-items: center;">
        
        <!-- Left Column: Content -->
        <div style="box-sizing: border-box;">
          <span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 100px; color: #f59e0b; font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px;">
            🌟 Gerai Tepercaya ITC Permata Hijau
          </span>
          
          <h1 style="font-size: 44px; font-weight: 850; line-height: 1.15; letter-spacing: -1.5px; color: #ffffff; margin: 0 0 20px 0;">
            Spesialis Reparasi Gadget<br>
            <span style="background: linear-gradient(135deg, #22d3ee, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              Mobile X Service
            </span>
          </h1>

          <p style="font-size: 16px; color: #9ca3af; line-height: 1.6; margin: 0 0 28px 0; font-weight: 400;">
            Kami hadir di <strong style="color: #f1f5f9;">GRAND ITC PERMATA HIJAU LT3 Blok C11 No.5</strong> dengan layanan pengerjaan transparan, suku cadang tepercaya, dan teknisi bersertifikasi yang siap memperbaiki gadget Anda <span style="color: #22d3ee; font-weight: 600; text-decoration: underline; decoration-color: #1e3a8a;">langsung di depan mata</span>.
          </p>

          <!-- Quick Stats Row -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 30px;">
            <div style="background: #111827; border: 1px solid #1f2937; padding: 14px; border-radius: 16px; text-align: center;">
              <span style="font-size: 20px; font-weight: 800; color: #22d3ee; display: block; font-family: monospace;">30m</span>
              <span style="font-size: 10.5px; color: #9ca3af; display: block; margin-top: 4px; font-weight: 500;">Servis Layar LCD</span>
            </div>
            <div style="background: #111827; border: 1px solid #1f2937; padding: 14px; border-radius: 16px; text-align: center;">
              <span style="font-size: 20px; font-weight: 800; color: #f59e0b; display: block; font-family: monospace;">100%</span>
              <span style="font-size: 10.5px; color: #9ca3af; display: block; margin-top: 4px; font-weight: 500;">Keamanan Data</span>
            </div>
            <div style="background: #111827; border: 1px solid #1f2937; padding: 14px; border-radius: 16px; text-align: center;">
              <span style="font-size: 20px; font-weight: 800; color: #10b981; display: block; font-family: monospace;">30d</span>
              <span style="font-size: 10.5px; color: #9ca3af; display: block; margin-top: 4px; font-weight: 500;">Garansi Nyata</span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div style="display: flex; flex-wrap: wrap; gap: 15px;">
            <a href="https://wa.me/6281288678992?text=Halo%20Mobile%20X%20Service!%20Saya%20ingin%20tanya%20estimasi%20biaya%20servis%20di%20Gerai%20ITC%20Permata%20Hijau" target="_blank" rel="noopener noreferrer" style="background: linear-gradient(135deg, #06b6d4, #2563eb); color: white !important; font-weight: 700; padding: 14px 28px; border-radius: 14px; text-decoration: none; font-size: 14px; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="fill: currentColor;"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              Konsultasi Biaya Sekarang &rarr;
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=ITC+Permata+Hijau+Lt.3+Blok+C11+No.5+Jakarta" target="_blank" rel="noopener noreferrer" style="background: #111827; border: 1px solid #1f2937; color: #cbd5e1 !important; font-weight: 700; padding: 14px 28px; border-radius: 14px; text-decoration: none; font-size: 14px; display: inline-flex; align-items: center; gap: 8px;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Rute Lokasi Toko
            </a>
          </div>
        </div>

        <!-- Right Column: Curated Gadget Repair Hero Image -->
        <div style="position: relative; box-sizing: border-box; display: flex; justify-content: center;">
          <div style="background: #111827; border: 1px solid #1f2937; border-radius: 28px; padding: 12px; max-width: 440px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); transform: rotate(1deg); transition: transform 0.3s ease;">
            <img src="https://ais-pre-l3hanfxguon45ldonuzhfk-342718199602.asia-east1.run.app/src/assets/images/gadget_repair_hero_1779277358048.png" alt="Proses Reparasi Gadget Berpresisi Tinggi" style="width: 100%; border-radius: 20px; display: block; object-fit: cover;" />
            
            <!-- Float information badge inside image card -->
            <div style="display: flex; gap: 12px; background: rgba(9, 11, 17, 0.95); border: 1px solid #1f2937; border-radius: 16px; padding: 15px; margin-top: 15px; align-items: center;">
              <div style="background: rgba(6, 182, 212, 0.1); width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #06b6d4;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <div>
                <h4 style="margin: 0; font-size: 13px; font-weight: 700; color: #ffffff; letter-spacing: -0.2px;">Reparasi On-The-Spot</h4>
                <p style="margin: 2px 0 0 0; font-size: 11px; color: #9ca3af; font-weight: 500;">Bisa langsung ditunggu & dipantau kerjanya.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- 3. Services List Grid Section -->
    <div style="padding: 60px 30px; background: #0c0f16; border-bottom: 1px solid #111827; box-sizing: border-box;">
      <div style="text-align: center; max-width: 600px; margin: 0 auto 45px auto;">
        <h2 style="font-size: 30px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; margin: 0 0 8px 0;">
          Layanan Suku Cadang & Reparasi Utama
        </h2>
        <p style="font-size: 14.5px; color: #9ca3af; line-height: 1.5; margin: 0; font-weight: 400;">
          Teknisi Mobile X Service menguasai berbagai tingkatan penanganan dari kerusakan fisik standar hingga micro-soldering sirkuit IC motherboard.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;">
        
        <!-- Service Item 1 -->
        <div style="background: #111827; border: 1px solid #1f2937; border-radius: 20px; padding: 22px; display: flex; flex-col: column; justify-content: space-between; box-sizing: border-box;">
          <div>
            <span style="font-size: 10px; font-weight: 700; color: #22d3ee; background: rgba(34, 211, 238, 0.1); border: 1px solid rgba(34, 211, 238, 0.2); padding: 4px 10px; border-radius: 100px; text-transform: uppercase;">⏱️ 30-45 MENIT</span>
            <h3 style="font-size: 17px; font-weight: 700; color: #ffffff; margin: 15px 0 6px 0;">Layar & LCD Screen</h3>
            <span style="font-size: 11px; color: #9ca3af; font-weight: 600; display: block; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Pecah, Bergaris, Blank, Error</span>
            <p style="font-size: 12.5px; color: #9ca3af; margin: 0; line-height: 1.6; font-weight: 400;">
              Penggantian modul layar LCD/OLED kelas premium untuk sensasi sentuh halus & ketajaman warna orisinalitas tinggi.
            </p>
          </div>
          <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #1f2937;">
            <a href="https://wa.me/6281288678992?text=Halo%20Mobile%20X%20Service!%20Saya%20ingin%20tanya%20estimasi%20ganti%20LCD%20Layar" target="_blank" style="font-size: 12px; font-weight: 700; color: #22d3ee; text-decoration: none; display: flex; align-items: center; gap: 4px;">
              Tanya Biaya Suku Cadang &rarr;
            </a>
          </div>
        </div>

        <!-- Service Item 2 -->
        <div style="background: #111827; border: 1px solid #1f2937; border-radius: 20px; padding: 22px; display: flex; flex-col: column; justify-content: space-between; box-sizing: border-box;">
          <div>
            <span style="font-size: 10px; font-weight: 700; color: #f59e0b; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.2); padding: 4px 10px; border-radius: 100px; text-transform: uppercase;">⏱️ 20-30 MENIT</span>
            <h3 style="font-size: 17px; font-weight: 700; color: #ffffff; margin: 15px 0 6px 0;">Baterai Drop & Kembung</h3>
            <span style="font-size: 11px; color: #9ca3af; font-weight: 600; display: block; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Drop, Cepat Habis, Mati Mendadak</span>
            <p style="font-size: 12.5px; color: #9ca3af; margin: 0; line-height: 1.6; font-weight: 400;">
              Penggantian cell baterai bersertifikasi keamanan tinggi agar kesehatan baterai (Battery Health) kembali prima 100%.
            </p>
          </div>
          <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #1f2937;">
            <a href="https://wa.me/6281288678992?text=Halo%20Mobile%20X%20Service!%20Saya%20ingin%20tanya%20estimasi%20ganti%20baterai" target="_blank" style="font-size: 12px; font-weight: 700; color: #f59e0b; text-decoration: none; display: flex; align-items: center; gap: 4px;">
              Tanya Biaya Suku Cadang &rarr;
            </a>
          </div>
        </div>

        <!-- Service Item 3 -->
        <div style="background: #111827; border: 1px solid #1f2937; border-radius: 20px; padding: 22px; display: flex; flex-col: column; justify-content: space-between; box-sizing: border-box;">
          <div>
            <span style="font-size: 10px; font-weight: 700; color: #3b82f6; background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); padding: 4px 10px; border-radius: 100px; text-transform: uppercase;">⏱️ 1-2 HARI</span>
            <h3 style="font-size: 17px; font-weight: 700; color: #ffffff; margin: 15px 0 6px 0;">Kena Air & Air Korosi</h3>
            <span style="font-size: 11px; color: #9ca3af; font-weight: 600; display: block; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Kemasukan Cairan, Karat Board</span>
            <p style="font-size: 12.5px; color: #9ca3af; margin: 0; line-height: 1.6; font-weight: 400;">
              Pembersihan ultrasonik dari sisa mineral cairan, tracing komponen karat, re-soldering kapasitor jalur konslet daya.
            </p>
          </div>
          <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #1f2937;">
            <a href="https://wa.me/6281288678992?text=Halo%20Mobile%20X%20Service!%20Saya%20ingin%20servis%20handphone%20kemasukan%20air" target="_blank" style="font-size: 12px; font-weight: 700; color: #3b82f6; text-decoration: none; display: flex; align-items: center; gap: 4px;">
              Tanya Biaya Suku Cadang &rarr;
            </a>
          </div>
        </div>

        <!-- Service Item 4 -->
        <div style="background: #111827; border: 1px solid #1f2937; border-radius: 20px; padding: 22px; display: flex; flex-col: column; justify-content: space-between; box-sizing: border-box;">
          <div>
            <span style="font-size: 10px; font-weight: 700; color: #818cf8; background: rgba(129, 140, 248, 0.1); border: 1px solid rgba(129, 140, 248, 0.2); padding: 4px 10px; border-radius: 100px; text-transform: uppercase;">⏱️ 2-3 HARI</span>
            <h3 style="font-size: 17px; font-weight: 700; color: #ffffff; margin: 15px 0 6px 0;">Solder Motherboard</h3>
            <span style="font-size: 11px; color: #9ca3af; font-weight: 600; display: block; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">IC Power, Sinyal, Hardisk penuh</span>
            <p style="font-size: 12.5px; color: #9ca3af; margin: 0; line-height: 1.6; font-weight: 400;">
              Reparasi solder mikro binokuler presisi untuk menata jalur kelistrikan, pergantian chip pendorong performa board.
            </p>
          </div>
          <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #1f2937;">
            <a href="https://wa.me/6281288678992?text=Halo%20Mobile%20X%20Service!%20Saya%20ingin%20tanya%20servis%20solder%20ic%20motherboard" target="_blank" style="font-size: 12px; font-weight: 700; color: #818cf8; text-decoration: none; display: flex; align-items: center; gap: 4px;">
              Tanya Biaya Suku Cadang &rarr;
            </a>
          </div>
        </div>

      </div>
    </div>

    <!-- 4. Location & Map Detailed Blueprint -->
    <div style="padding: 60px 30px; border-bottom: 1px solid #111827; box-sizing: border-box;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; align-items: stretch;">
        
        <!-- Left Column: Location Details -->
        <div style="display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box;">
          <div>
            <span style="font-size: 11px; uppercase; font-weight: 700; color: #f59e0b; letter-spacing: 1.2px; display: block; margin-bottom: 8px;">GERAI FISIK RESMI</span>
            <h2 style="font-size: 28px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; margin: 0 0 16px 0;">Kunjungi Gerai Kami di Jakarta Selatan</h2>
            <p style="font-size: 14.5px; color: #9ca3af; line-height: 1.6; margin: 0 0 24px 0; font-weight: 400;">
              Ingin konsultasi langsung, melihat seluruh proses perbaikan, atau sekadar melakukan diagnosa kerusakan hardware secara gratis? Datang langsung dan nikmati ruang tunggu ber-AC yang nyaman.
            </p>
          </div>

          <!-- Address Specific card Info -->
          <div style="background: #111827; border: 1px solid #1f2937; border-radius: 20px; padding: 22px; margin-bottom: 15px; position: relative; overflow: hidden;">
            <div style="display: flex; gap: 14px; align-items: flex-start;">
              <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.2); width: 42px; height: 42px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #f59e0b;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4 style="margin: 0; font-size: 15px; font-weight: 700; color: #ffffff;">Mobile X Service Gerai</h4>
                <p style="margin: 6px 0 0 0; font-size: 13.5px; color: #cbd5e1; line-height: 1.5; font-weight: 500;">
                  <strong>GRAND ITC PERMATA HIJAU</strong><br>
                  Lantai 3 Blok C11 No.5<br>
                  Kebayoran Lama, Kota Jakarta Selatan, DKI Jakarta 12210
                </p>
              </div>
            </div>

            <div style="margin-top: 18px; padding-top: 15px; border-top: 1px solid #1f2937; display: flex; flex-wrap: wrap; gap: 20px;">
              <div>
                <span style="font-size: 11px; color: #6b7280; display: block; font-weight: 600;">Hari Operasional:</span>
                <span style="font-size: 12.5px; color: #cbd5e1; font-weight: 500;">Setiap Hari (Senin - Minggu)</span>
              </div>
              <div>
                <span style="font-size: 11px; color: #6b7280; display: block; font-weight: 600;">Jam Kerja:</span>
                <span style="font-size: 12.5px; color: #cbd5e1; font-weight: 500;">10:00 - 21:00 WIB</span>
              </div>
            </div>

            <a href="https://www.google.com/maps/search/?api=1&query=ITC+Permata+Hijau+Lt.3+Blok+C11+No.5+Jakarta" target="_blank" rel="noopener noreferrer" style="background: rgba(30,37,53,0.8); border: 1px solid #1f2937; color: #cbd5e1 !important; font-weight: 700; padding: 11px 18px; border-radius: 12px; text-decoration: none; font-size: 12.5px; display: block; text-align: center; margin-top: 18px;">
              Buka Peta Navigasi Google Maps &rarr;
            </a>
          </div>
        </div>

        <!-- Right Column: Visual Tools Showcase with dynamic image overlay -->
        <div style="position: relative; box-sizing: border-box; display: flex; justify-content: center;">
          <div style="background: #111827; border: 1px solid #1f2937; border-radius: 28px; padding: 12px; max-width: 440px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
            <div style="position: relative; border-radius: 20px; overflow: hidden;">
              <img src="https://ais-pre-l3hanfxguon45ldonuzhfk-342718199602.asia-east1.run.app/src/assets/images/repair_tools_detail_1779277377553.png" alt="Detail Peralatan Solder Spesialis" style="width: 100%; display: block; object-fit: cover;" />
              <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), transparent); padding: 20px;">
                <span style="font-size: 9.5px; font-weight: 700; color: #22d3ee; letter-spacing: 1px; text-transform: uppercase;">Keandalan Motherboard</span>
                <h4 style="margin: 4px 0 0 0; font-size: 15px; font-weight: 700; color: #ffffff;">Lab Solder Khusus Presisi</h4>
                <p style="margin: 4px 0 0 0; font-size: 11px; color: #cbd5e1; font-weight: 400; line-height: 1.4;">Kami melengkapi meja mekanik dengan mikroskop binokular, elemen tiup berkendali suhu, dan alat solder anti-statis ESD.</p>
              </div>
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: 15px; padding: 0 6px;">
              <span style="font-size: 11.5px; color: #9ca3af; font-weight: 500;">✓ Menerima Pengiriman kurir se-JaDeTaBek</span>
              <a href="https://wa.me/6281288678992?text=Halo%2520Mobile%2512X%2512Service!%2512Saya%2512ingin%2512konsultasi%2512kirim%2512unit%2512dari%2512luar%2512kota" target="_blank" style="font-size: 11.5px; color: #22d3ee; font-weight: 700; text-decoration: none;">Info Kurir &rarr;</a>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- 5. Footer and copyright details -->
    <div style="padding: 30px; background: #07090d; border-top: 1px solid #111827; box-sizing: border-box; text-align: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
        <p style="margin: 0; font-size: 13px; color: #cbd5e1; font-weight: 600;">Mobile X Service &copy; 2026</p>
        <p style="margin: 0; font-size: 12px; color: #6b7280; max-width: 500px; line-height: 1.5;">
          GRAND ITC PERMATA HIJAU Lantai 3 Blok C11 No.5, Kebayoran Lama, Jakarta Selatan. WhatsApp 081288678992. Hak Cipta Dilindungi Undang-Undang.
        </p>
      </div>
    </div>

  </div>
</div>`;

  const handleCopyWordPressCode = () => {
    navigator.clipboard.writeText(wordpressHtmlCode);
    setCopiedWordPressCode(true);
    setTimeout(() => setCopiedWordPressCode(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#090b11] text-gray-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#090b11]/80 backdrop-blur-xl border-b border-gray-900 px-4 py-3.5 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black tracking-tighter text-xl shadow-lg shadow-cyan-500/15">
              MX
            </div>
            <div>
              <span className="text-lg font-black tracking-tight bg-linear-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Mobile X Service
              </span>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] text-gray-400 font-medium">Buka Hari Ini (10:00 - 21:00)</span>
              </div>
            </div>
          </div>

          {/* Quick Header Details */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gray-950 border border-gray-800 flex items-center justify-center text-amber-500">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-gray-200">GRAND ITC PERMATA HIJAU</p>
                <p className="text-gray-400 text-[11px] font-mono">LT3 Blok C11 No.5</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gray-950 border border-gray-800 flex items-center justify-center text-emerald-500">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-gray-200">Hubungi WhatsApp</p>
                <p className="text-gray-400 text-[11px] font-mono">081288678992</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs md:text-sm px-4.5 py-2.5 rounded-xl transition-all shadow-md shadow-emerald-900/10 flex items-center gap-1.5"
            id="header-wa-cta"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span className="hidden sm:inline">Hubungi Kami</span>
            <span>0812-8867-8992</span>
          </a>

        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-10 pb-16 px-4 md:px-8 border-b border-gray-950 overflow-hidden" id="hero-section">
        {/* Ambient Gradient */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-semibold tracking-wide">
              🌟 Gerai Tepercaya ITC Permata Hijau
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-gray-100">
              Spesialis Reparasi Gadget <br className="hidden sm:inline" />
              <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                Mobile X Service
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-normal">
              Kami hadir di <strong className="text-gray-200">GRAND ITC PERMATA HIJAU LT3 Blok C11 No.5</strong> dengan layanan pengerjaan transparan, suku cadang tepercaya, dan teknisi bersertifikasi yang siap memperbaiki gadget Anda <span className="text-cyan-400 font-semibold underline decoration-cyan-900">langsung di depan mata</span>.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 py-2">
              <div className="bg-[#10141d] border border-gray-800 p-3.5 rounded-2xl">
                <span className="text-xl md:text-2xl font-black text-cyan-400 font-mono">30m</span>
                <span className="text-[10px] md:text-xs text-gray-400 block mt-1 font-medium leading-tight">Rata-rata Servis LCD</span>
              </div>
              <div className="bg-[#10141d] border border-gray-800 p-3.5 rounded-2xl">
                <span className="text-xl md:text-2xl font-black text-amber-500 font-mono">100%</span>
                <span className="text-[10px] md:text-xs text-gray-400 block mt-1 font-medium leading-tight">Keamanan Data Aman</span>
              </div>
              <div className="bg-[#10141d] border border-gray-800 p-3.5 rounded-2xl">
                <span className="text-xl md:text-2xl font-black text-emerald-500 font-mono">30d</span>
                <span className="text-[10px] md:text-xs text-gray-400 block mt-1 font-medium leading-tight">Garansi Suku Cadang</span>
              </div>
            </div>

            {/* Micro CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <a
                href="#ai-diagnostics-section"
                className="bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3.5 px-6 rounded-xl text-center text-sm transition-all shadow-lg shadow-cyan-950/40 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 fill-white" />
                <span>Coba Diagnosis AI Sekarang</span>
              </a>
              <a
                href={googleMapsSearchLink}
                target="_blank"
                rel="noreferrer"
                className="bg-gray-900 border border-gray-800 hover:border-gray-700 hover:bg-gray-850 text-gray-300 font-bold py-3.5 px-6 rounded-xl text-center text-sm transition-all flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>Petunjuk Arah Rute</span>
              </a>
            </div>
          </div>

          {/* Hero Curated Image Mockups Column */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-video sm:aspect-square md:aspect-video lg:aspect-square relative flex items-center justify-center">
              {/* Decorative behind screen boxes */}
              <div className="absolute top-6 left-6 right-6 bottom-6 bg-linear-to-tr from-cyan-500/10 to-blue-600/10 blur-xl rounded-full"></div>
              
              {/* Primary Image Slot */}
              <div className="relative w-full max-w-lg bg-gray-950 rounded-3xl p-3 border border-gray-800 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
                <img
                  src={heroImage}
                  alt="Teknisi spesialis Mobile X Service melakukan reparasi handphone secara teliti di bawah pencahayaan profesional"
                  className="w-full aspect-4/3 object-cover rounded-2xl bg-gray-900"
                />
                
                {/* Floating details badge inside image */}
                <div className="absolute -bottom-5 -right-3 bg-linear-to-br from-[#121620] to-[#0c0e14] border border-gray-800 text-gray-100 rounded-2xl p-4.5 shadow-xl max-w-[260px] flex gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Wrench className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-100 uppercase tracking-wide">Reparasi On-The-Spot</h5>
                    <p className="text-[10.5px] text-gray-400 mt-1 leading-normal font-medium">Bisa ditunggu & dipantau langsung di gerai.</p>
                  </div>
                </div>

                {/* Second Floating component badge */}
                <div className="absolute -top-4 -left-4 bg-[#090b11] border border-gray-800 text-gray-100 rounded-full px-4 py-2 shadow-lg flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">Garansi Sparepart Nyata</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Detailed Services Showcase */}
      <section className="py-16 bg-[#07090d] px-4 md:px-8 border-b border-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-gray-100 tracking-tight">Layanan Suku Cadang & Reparasi Utama</h2>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Tim teknisi Mobile X Service menguasai berbagai tingkatan penanganan dari kerusakan fisik standar hingga micro-soldering IC sirkuit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Layar & LCD Screen",
                issue: "Pecah, Bergaris, Sentuhan Ngacak",
                time: "30-45 Menit",
                desc: "Penggantian modul layar LCD/OLED kelas presisi premium untuk sensasi sentuh & ketajaman warna orisinal.",
                tagColor: "text-cyan-400 bg-cyan-950/45 border-cyan-900/60",
              },
              {
                title: "Baterai Drop & Kembung",
                issue: "Cepat Habis, Sering Restart",
                time: "20-30 Menit",
                desc: "Penggantian cell baterai bersertifikat keamanan tinggi dengan kesehatan baterai (Battery Health) terbaca 100%.",
                tagColor: "text-amber-500 bg-amber-950/45 border-amber-900/60",
              },
              {
                title: "Kena Air (Liquid Damage)",
                issue: "Matot, Lembap, Korosi Jalur",
                time: "1-2 Hari Kerja",
                desc: "Pembersihan ultrasonik dari karat, tracing jalur short, dan perbaikan lapisan filter pasokan daya sirkuit.",
                tagColor: "text-blue-400 bg-blue-950/45 border-blue-900/60",
              },
              {
                title: "IC & Motherboard Repair",
                issue: "Masalah Sinyal, IC Power, CPU",
                time: "2-3 Hari Kerja",
                desc: "Teknologi micro-soldering canggih di bawah lup pembesar digital untuk re-balling komponen rusak terkecil.",
                tagColor: "text-indigo-400 bg-indigo-950/45 border-indigo-900/60",
              },
            ].map((srv, idx) => (
              <div key={idx} className="bg-[#0b0e14] border border-gray-900 rounded-2xl p-5 flex flex-col justify-between hover:border-gray-800 transition-all group">
                <div className="space-y-3.5">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider border ${srv.tagColor}`}>
                    <Clock className="w-3.5 h-3.5" /> {srv.time}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-200 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{srv.title}</h4>
                    <span className="text-[11px] font-semibold text-gray-500 block leading-tight mt-0.5">{srv.issue}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-normal">{srv.desc}</p>
                </div>
                <div className="pt-4 border-t border-gray-900 mt-4">
                  <a
                    href={`https://wa.me/6281288678992?text=Halo%20Mobile%20X%20Service%2C%20saya%20tertarik%20tanya%20layanan%20${encodeURIComponent(srv.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-gray-300 font-bold flex items-center gap-1 hover:text-cyan-400 transition-colors"
                  >
                    Tanya Biaya Suku Cadang <ChevronRight className="w-4 h-4 text-cyan-500 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Live AI Diagnosis Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <AIDiagCard />
      </section>

      {/* 5. Physical Store Location Detailed Blueprint */}
      <section className="py-16 bg-[#07090d] border-t border-gray-950 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Store Description & Mapping */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#f59e0b] block mb-2">GERAI FISIK RESMI</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-100 tracking-tight">Kunjungi Gerai Kami di Jakarta Selatan</h2>
              <p className="text-xs md:text-sm text-gray-400 mt-3 leading-relaxed font-normal">
                Ingin konsultasi tatap muka, melihat proses pengerjaan secara langsung, atau sekadar melakukan pengecekan gratis? Gerai fisik kami ramah, dingin ber-AC, dan menyediakan kopi gratis saat Anda menunggu perangkat berharga diperbaiki.
              </p>
            </div>

            {/* Address Badge */}
            <div className="bg-[#0b0e14] border border-gray-900 rounded-2xl p-5 space-y-3.5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-200">Mobile X Service</h4>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                    <strong>GRAND ITC PERMATA HIJAU</strong><br />
                    Lantai 3 Blok C11 No.5<br />
                    Kebayoran Lama, Kota Jakarta Selatan, DKI Jakarta 12210
                  </p>
                </div>
              </div>
              
              <div className="pt-2 border-t border-gray-900 flex flex-wrap gap-x-6 gap-y-2 text-xs">
                <div>
                  <span className="text-gray-500 font-semibold block">Hari Operasional:</span>
                  <span className="text-gray-300">Setiap Hari (Senin - Minggu)</span>
                </div>
                <div>
                  <span className="text-gray-500 font-semibold block">Jam Operasional:</span>
                  <span className="text-gray-300">Pukul 10:00 - 21:00 WIB</span>
                </div>
              </div>

              <a
                href={googleMapsSearchLink}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#1e2330] border border-gray-800 hover:border-gray-700 text-gray-200 font-bold text-center block py-2.5 rounded-xl text-xs transition-colors"
              >
                Buka Arah Navigasi Google Maps
              </a>
            </div>

            {/* Support Hotline */}
            <div className="flex items-center gap-4 bg-[#10b981]/5 border border-[#10b981]/15 p-4 rounded-xl">
              <Phone className="w-5 h-5 text-[#10b981] flex-shrink-0 animate-bounce" />
              <div className="text-xs">
                <p className="font-bold text-emerald-400">Punya Pertanyaan Darurat?</p>
                <p className="text-gray-400 leading-snug mt-0.5">Kontak WhatsApp khusus unit urgent & ekspedisi kurir.</p>
                <a href={waLink} target="_blank" rel="noreferrer" className="text-emerald-400 font-extrabold hover:underline block mt-1">
                  Kirim Pesan Langsung ke 0812-8867-8992
                </a>
              </div>
            </div>
          </div>

          {/* Large Image Showcase & Visual Accent */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div className="w-full bg-gray-950 border border-gray-900 rounded-3xl p-3 relative shadow-2xl h-full flex flex-col justify-between">
              
              <div className="relative rounded-2xl overflow-hidden aspect-video flex-grow">
                <img
                  src={toolsImage}
                  alt="Komponen microchip dari motherboard smartphone, sirkuit emas, dan kepingan sekrup presisi Mobile X Service"
                  className="w-full h-full object-cover rounded-xl"
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-5">
                  <span className="text-[10px] font-bold text-cyan-400 tracking-widest uppercase">Keandalan Motherboard</span>
                  <h4 className="text-lg font-bold text-white tracking-tight mt-1">Dapur Selesai Presisi Tinggi</h4>
                  <p className="text-xs text-gray-300 max-w-sm mt-1 mb-2 leading-relaxed">
                    Kami melengkapi meja mekanik dengan mikroskop binokular, elemen tiup udara berkualitas tinggi, dan peralatan solder anti-statis ESD.
                  </p>
                </div>
              </div>

              {/* Extra banner */}
              <div className="p-3 bg-[#0d1017] border border-gray-900 rounded-xl mt-3 flex items-center justify-between text-xs gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-gray-300 font-medium leading-none">Menerima Pengiriman Gosend / JNE se-JaDeTaBek</span>
                </div>
                <a
                  href={`https://wa.me/6281288678992?text=Halo%20Mobile%20X%20Service!%20Saya%20dari%20luar%20daerah%2C%20apakah%20bisa%20servis%20lewat%20pengiriman%20ekspedisi%3F`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 underline font-semibold flex items-center gap-0.5 whitespace-nowrap"
                >
                  Info Kirim Unit <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. Dynamic WordPress Code Portal Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full border-t border-gray-950/40" id="wordpress-section">
        <div className="bg-[#0b0e14] border border-gray-900 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Header Description */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800/80 pb-6 mb-8">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-cyan-950/80 border border-cyan-800 text-cyan-400 rounded-md text-[10px] font-bold uppercase tracking-wider">
                <Code className="w-3.5 h-3.5" /> WordPress Code Generator
              </span>
              <h3 className="text-2xl font-black text-gray-100 tracking-tight">
                Salin Coding Blog WordPress Mobile X Service
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-normal">
                Sesuai permintaan Anda, salin baris coding responsif premium ini untuk dipasang langsung ke halaman website atau dashboard WordPress Anda!
              </p>
            </div>

            <div className="flex items-center bg-gray-950 border border-gray-800 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "preview"
                    ? "bg-gray-900 border border-gray-800 text-cyan-400 shadow-sm"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <Eye className="w-3.5 h-3.5" /> Pratinjau Tampilan
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "code"
                    ? "bg-gray-900 border border-gray-800 text-cyan-400 shadow-sm"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <Code className="w-3.5 h-3.5" /> Lihat Coding HTML
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Main Interactive Display (Tab View) */}
            <div className="lg:col-span-8 bg-[#07090d] border border-gray-900 rounded-2xl overflow-hidden min-h-[400px] flex flex-col justify-between">
              
              {activeTab === "preview" ? (
                /* Tab 1: Preview Renders on Page */
                <div className="p-6 md:p-8 flex-grow flex items-center justify-center bg-[#07090d]/60 relative pattern-dots">
                  {/* Real visual representation of the WordPress card */}
                  <div className="bg-[#0c1017] border border-gray-800 rounded-3xl p-6 md:p-8 text-gray-100 relative shadow-2xl max-w-xl w-full">
                    {/* Badge */}
                    <div className="text-center mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-950/60 border border-cyan-800/50 rounded-full text-cyan-400 text-[10px] font-extrabold uppercase tracking-widest">
                        ⚡ PROFESIONAL GADGET REPAIR PARTNER
                      </span>
                      <h4 className="text-3xl font-black text-white tracking-tight mt-3 mb-1">
                        Mobile X Service
                      </h4>
                      <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                        Solusi reparasi kilat & bergaransi untuk iPhone, iPad, Samsung, Xiaomi, Oppo, Vivo, Macbook, & Laptop di Jakarta Selatan.
                      </p>
                    </div>

                    {/* Address Card */}
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 flex gap-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-white tracking-wide">LOKASI GERAI UTAMA</h5>
                          <p className="text-xs text-gray-300 mt-1 leading-normal font-medium">
                            GRAND ITC PERMATA HIJAU<br />LT3 Blok C11 No.5, Kebayoran Lama, Jakarta Selatan
                          </p>
                          <a
                            href={googleMapsSearchLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-amber-500 font-bold inline-flex items-center gap-1 mt-2 hover:underline"
                          >
                            Petunjuk Google Maps &rarr;
                          </a>
                        </div>
                      </div>

                      {/* WhatsApp Card */}
                      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 flex gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 flex-shrink-0">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-white tracking-wide">KONSULTASI & BOOKING CEPAT</h5>
                          <p className="text-xs text-gray-300 mt-1 leading-normal">
                            Hubungi teknisi spesialis kami secara langsung via WhatsApp untuk klaim estimasi & ketersediaan sparepart.
                          </p>
                          <div className="mt-3">
                            <a
                              href={waLink}
                              target="_blank"
                              rel="noreferrer"
                              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg text-xs inline-flex items-center gap-1.5 shadow-md shadow-emerald-900/20"
                            >
                              <MessageSquare className="w-3.5 h-3.5 fill-white" />
                              WhatsApp: 081288678992
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer Badge inside preview card */}
                    <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-[10px] text-gray-500">
                      <span>Gerai Resmi No. 5</span>
                      <span>Buka 10:00 - 21:00 WITA/WIB</span>
                    </div>

                  </div>
                </div>
              ) : (
                /* Tab 2: Code Editor with Syntax style highlighting */
                <div className="flex-grow flex flex-col p-4 bg-gray-950 font-mono text-xs text-gray-300 select-all overflow-y-auto max-h-[460px] relative border-b border-gray-900">
                  <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-gray-920 border border-gray-800 py-1.5 px-3 rounded-md">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">HTML-Format Valid</span>
                  </div>
                  <pre className="whitespace-pre-wrap font-mono select-text leading-relaxed text-cyan-300/90 pt-6">
                    {wordpressHtmlCode}
                  </pre>
                </div>
              )}

              {/* Action and Download ribbon at bottom of code viewport */}
              <div className="bg-[#0b0e14] px-4 md:px-6 py-4 border-t border-gray-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4.5 h-4.5 text-cyan-400" />
                  <span className="text-gray-400">Coding ini terbebas dari dependencies eksternal dan inline styled 100%.</span>
                </div>
                
                <button
                  type="button"
                  onClick={handleCopyWordPressCode}
                  className="bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-2.5 px-5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                >
                  {copiedWordPressCode ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Berhasil Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Salin Semua Coding WordPress</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Instruction Sidebar Guide */}
            <div className="lg:col-span-4 space-y-5">
              <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wider">Kamus Panduan WordPress</h4>
              
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Gunakan Blok 'Custom HTML'",
                    desc: "Buka halaman editor pos/laman WordPress Anda, klik tambah blok baru (+), ketik dan pilih 'HTML Khusus' atau 'Custom HTML'.",
                  },
                  {
                    step: "2",
                    title: "Tempel / Paste Code",
                    desc: "Paste (Ctrl+V / Cmd+V) seluruh kode HTML yang disalin dari portal ini ke dalam ruang input HTML WordPress Anda.",
                  },
                  {
                    step: "3",
                    title: "Klik Pratinjau / Simpan",
                    desc: "Klik tombol 'Preview' di baris blok tersebut untuk memantau tampilan, lalu klik Publikasikan laman Anda secara instan.",
                  },
                  {
                    step: "4",
                    title: "Support Elementor / Divi",
                    desc: "Jika memakai Elementor, cukup seret widget bernama 'HTML' lalu tempel kode. Di Divi, masukkan modul 'Code'.",
                  },
                ].map((inst, idx) => (
                  <div key={idx} className="bg-[#0d1017]/50 border border-gray-900 rounded-xl p-4.5 flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-xs font-bold text-cyan-400 flex-shrink-0">
                      {inst.step}
                    </span>
                    <div>
                      <h5 className="text-xs font-bold text-gray-200 leading-snug">{inst.title}</h5>
                      <p className="text-[11px] text-gray-400 leading-normal mt-1.5 font-normal">{inst.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Warning note */}
              <div className="bg-amber-950/20 border border-amber-900/40 p-4 rounded-xl text-xs space-y-1 leading-snug">
                <span className="font-bold text-amber-500 block uppercase tracking-wider text-[10px]">💡 Catatan Modifikasi:</span>
                <p className="text-gray-400 font-medium font-sans">
                  Sangat mudah! Jika Anda ingin mengubah nomor maupun alamat di kemudian hari, cari kata <code className="text-amber-400 bg-black/40 px-1 py-0.5 rounded text-[10.5px]">081288678992</code> atau tag jalan lokasi pada teks coding dan ganti secara manual.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Footer Section */}
      <footer className="mt-auto bg-[#040609] border-t border-gray-950 px-4 md:px-8 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0c1017] border border-gray-800 flex items-center justify-center text-cyan-400 font-black text-sm">
              MX
            </div>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} <strong>Mobile X Service</strong>. Kebayoran Lama, Jakarta Selatan.
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>GRAND ITC PERMATA HIJAU LT3 Blok C11 No.5</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
            <span>Telp: 0812-8867-8992</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
