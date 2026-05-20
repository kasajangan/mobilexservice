import React, { useState, useEffect } from "react";
import {
  Smartphone,
  Tablet,
  Laptop,
  Watch,
  Wrench,
  Sparkles,
  Clock,
  Coins,
  MessageSquare,
  Copy,
  Check,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import { DiagnosticResult, DeviceCategory } from "../types";

export function AIDiagCard() {
  const [deviceType, setDeviceType] = useState<DeviceCategory>("smartphone");
  const [brand, setBrand] = useState("Apple");
  const [modelName, setModelName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [diagnostic, setDiagnostic] = useState<DiagnosticResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [aiConnected, setAiConnected] = useState(true);

  // Check backend server connection and AI availability on load
  useEffect(() => {
    fetch("/api/ai-status")
      .then((res) => res.json())
      .then((data) => {
        setAiConnected(data.connected);
      })
      .catch((_) => {
        setAiConnected(false); // Offline or missing endpoint
      });
  }, []);

  const commonIssues = [
    { id: "Layar Pecah/Garis", label: "Layar Pecah / Bergaris (LCD)" },
    { id: "Baterai Drop/Kembung", label: "Baterai Drop / Kembung" },
    { id: "Mati Total/No Power", label: "Mati Total / Tidak Berenergi" },
    { id: "Kena Air/Cairan", label: "Kemasukan Air / Kena Cairan" },
    { id: "Konektor Charger Rusak", label: "Tidak Bisa Di-charge" },
    { id: "Kamera Mati/Buram", label: "Kamera Mati / Buram" },
    { id: "Bootloop/Stuck Logo", label: "Bootloop / Stuck Logo" },
  ];

  const toggleIssue = (issueId: string) => {
    setSelectedIssues((prev) =>
      prev.includes(issueId)
        ? prev.filter((id) => id !== issueId)
        : [...prev, issueId]
    );
  };

  const handleDiagnose = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!modelName.trim()) {
      setError("Penting: Mohon tuliskan model/tipe gadget Anda (misal: iPhone 13, Galaxy S21, MacBook Pro 2021).");
      return;
    }
    if (selectedIssues.length === 0 && !description.trim()) {
      setError("Penting: Silakan pilih minimal 1 gejala kerusakan atau tulis deskripsi masalah.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          deviceType,
          brand,
          modelName,
          issues: selectedIssues.length > 0 ? selectedIssues : ["Gejala umum"],
          description,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Gagal menghubungi asisten AI.");
      }

      setDiagnostic(data);
    } catch (err: any) {
      console.warn("Using localized fallback system:", err);
      // Fallback Engine if server is not fully up or key is absent:
      const issuesCombined = selectedIssues.join(", ") || "Masalah kustom";
      const fallbackCost = selectedIssues.includes("Mati Total/No Power") || selectedIssues.includes("Kena Air/Cairan")
        ? "Rp 600.000 - Rp 1.500.000 (Perlu cek IC motherboard)"
        : selectedIssues.includes("Layar Pecah/Garis")
        ? "Rp 450.000 - Rp 2.500.000 (Tergantung tipe LCD/OLED)"
        : "Rp 250.000 - Rp 650.000";

      const fallbackTime = selectedIssues.includes("Kena Air/Cairan") || selectedIssues.includes("Mati Total/No Power")
        ? "1 - 2 Hari (Butuh pengeringan khusus & tracing komponen)"
        : "30 - 60 Menit (Bisa ditunggu langsung di toko)";

      const waText = `Halo Mobile X Service ITC Permata Hijau! Saya ingin memesan perbaikan untuk:
- Perangkat: ${brand} ${modelName} (${deviceType})
- Kerusakan: ${issuesCombined}
- Deskripsi: ${description || "Cek langsung di toko"}
Saya berniat mengunjungi gerai Anda di GRAND ITC PERMATA HIJAU LT3 Blok C11 No.5. Tolong konfirmasi estimasi ketersediaan part dan teknisi ya.`;

      setDiagnostic({
        deviceState: `Kondisi perangkat terdeteksi mengalami kendala pada ${issuesCombined}.`,
        primaryIssue: selectedIssues[0] || "Kerusakan Komponen Fisik/Sistem",
        diagnosis: `Berdasarkan gejala "${issuesCombined}" pada ${brand} ${modelName}, kemungkinan kerusakan terjadi pada modul utama atau jalur daya. Sangat disarankan untuk segera kami periksa langsung di gerai kami agar tidak merambat ke komponen sensitif lainnya.`,
        estimatedTime: fallbackTime,
        estimatedCost: fallbackCost,
        firstAidSteps: [
          "Matikan daya perangkat segera dan jangan dicoba dinyalakan atau di-charge.",
          "Jika terkena cairan, tegakkan perangkat dan usap air luar, jangan digoyang-goyang.",
          "Segera bawa ke gerai kami di Lt. 3 C11 No. 5 agar terhindar dari korosi sirkuit.",
        ],
        whatsappDraft: waText,
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getWhatsAppLink = (text: string) => {
    return `https://wa.me/6281288678992?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-[#151922] rounded-3xl border border-gray-800 p-6 md:p-8 shadow-2xl relative overflow-hidden" id="ai-diagnostics-section">
      {/* Glow Backdrops */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-800">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-950/50 border border-cyan-800/60 rounded-full text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> AI Diagnostic Assistant
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-gray-100 tracking-tight">
            Analisis Instan Kerusakan Gadget Anda
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Ketahui kemungkinan kerusakan, estimasi biaya, dan instruksi penanganan pertama seketika.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${aiConnected ? "bg-emerald-500 shadow-emerald-500/50" : "bg-amber-500 shadow-amber-500/50"} animate-pulse`}></span>
          <span className="text-xs text-gray-400 font-mono">
            {aiConnected ? "AI Engine: Ready" : "Backup Engine Active"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input Form Column */}
        <form onSubmit={handleDiagnose} className="lg:col-span-7 flex flex-col gap-6" id="diagnostic-form">
          {/* Device Category Selector */}
          <div>
            <label className="text-sm font-medium text-gray-300 block mb-3">Pilih Kategori Gadget</label>
            <div className="grid grid-cols-4 gap-2.5">
              {(
                [
                  { id: "smartphone", label: "HP / Tablet", icon: Smartphone },
                  { id: "tablet", label: "iPad/Tab", icon: Tablet },
                  { id: "laptop", label: "Laptop", icon: Laptop },
                  { id: "wearable", label: "Watch", icon: Watch },
                ] as const
              ).map((cat) => {
                const IconComp = cat.icon;
                const isSelected = deviceType === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setDeviceType(cat.id)}
                    className={`flex flex-col items-center justify-center py-3.5 px-2 rounded-2xl border transition-all text-center gap-2 ${
                      isSelected
                        ? "bg-cyan-950/60 border-cyan-500 text-cyan-400 ring-2 ring-cyan-500/20"
                        : "bg-[#0c0f16]/60 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-200"
                    }`}
                  >
                    <IconComp className="w-5.5 h-5.5" />
                    <span className="text-xs font-semibold tracking-wide block">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Brand & Model Input */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-300 block mb-2" htmlFor="brand-select">Merek</label>
              <select
                id="brand-select"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full bg-[#0c0f16]/80 text-gray-200 border border-gray-800 rounded-xl px-4 py-3 placeholder-gray-600 focus:outline-none focus:border-cyan-500 text-sm"
              >
                <option value="Apple">Apple / iPhone</option>
                <option value="Samsung">Samsung</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Oppo">Oppo</option>
                <option value="Vivo">Vivo</option>
                <option value="MacBook">MacBook / Laptop</option>
                <option value="Asus/Lenovo">Asus / Lenovo / PC</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300 block mb-2" htmlFor="model-input">Tipe / Model</label>
              <input
                id="model-input"
                type="text"
                placeholder="cth: iPhone 12 Pro Max"
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
                className="w-full bg-[#0c0f16]/80 text-gray-200 border border-gray-800 rounded-xl px-4 py-3 placeholder-gray-600 focus:outline-none focus:border-cyan-500 text-sm font-medium"
              />
            </div>
          </div>

          {/* Quick Symptoms Multi-Select */}
          <div>
            <label className="text-sm font-medium text-gray-300 block mb-2.5">
              Pilih Gejala Kerusakan (Bisa pilih lebih dari satu)
            </label>
            <div className="flex flex-wrap gap-2">
              {commonIssues.map((issue) => {
                const isSelected = selectedIssues.includes(issue.id);
                return (
                  <button
                    key={issue.id}
                    type="button"
                    onClick={() => toggleIssue(issue.id)}
                    className={`text-xs px-3.5 py-2.5 rounded-full border transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-cyan-500/10 border-cyan-500 text-cyan-300 font-medium"
                        : "bg-[#0c0f16]/40 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-cyan-400" : "bg-gray-600"}`}></span>
                    {issue.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Description Textarea */}
          <div>
            <label className="text-sm font-medium text-gray-300 block mb-2" htmlFor="custom-issue-desc">
              Detail Gejala / Riwayat Tambahan (Opsional)
            </label>
            <textarea
              id="custom-issue-desc"
              rows={3}
              placeholder="Tuliskan keluhan lengkap, cth: Habis matot setelah kecemplung air bak, atau layar bergaris setelah jatuh..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-[#0c0f16]/80 text-gray-200 border border-gray-800 rounded-xl p-4 placeholder-gray-600 focus:outline-none focus:border-cyan-500 text-sm focus:ring-1 focus:ring-cyan-500/20"
            ></textarea>
          </div>

          {error && (
            <div className="bg-red-950/40 border border-red-900 text-red-300 p-3.5 rounded-xl text-xs flex items-start gap-2 animate-fadeIn">
              <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3.5 rounded-xl tracking-wide transition-all shadow-lg shadow-cyan-950/40 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Menganalisis Gejala Perangkat...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 fill-white" />
                <span>Mulai Diagnosis AI Sekarang</span>
              </>
            )}
          </button>
        </form>

        {/* Diagnosis Results Column */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          {!diagnostic && !loading ? (
            <div className="h-full bg-[#0c0f16]/60 border border-dashed border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center text-gray-500 min-h-[350px]">
              <div className="w-16 h-16 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center mb-4 text-cyan-500/80">
                <Wrench className="w-7 h-7" />
              </div>
              <p className="text-sm font-semibold text-gray-300">Hasil Diagnosis Belum Tersedia</p>
              <p className="text-xs text-gray-500 max-w-xs mt-1.5 leading-relaxed">
                Silakan isi data gadget Anda di samping lalu klik opsi "Mulai Diagnosis AI" untuk memproyeksikan estimasi teknis.
              </p>
            </div>
          ) : loading ? (
            <div className="h-full bg-[#0c0f16]/30 border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[350px]">
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-cyan-950"></div>
                <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin"></div>
                <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
              <h4 className="text-gray-200 font-bold mb-2 text-sm tracking-wide">Merumuskan Analisis Kerusakan</h4>
              <p className="text-xs text-gray-500 max-w-xs leading-relaxed mb-4">
                Sistem AI mencocokkan gejala dengan basis knowledge reparasi HP, laptop, dan ketersediaan komponen gerai gerai kami.
              </p>
              <div className="w-full max-w-[240px] bg-cyan-950/40 border border-cyan-900/60 p-3 rounded-lg flex items-start gap-2 text-left">
                <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-[10px] text-cyan-300 leading-snug">
                  Info: Sebagian besar pengerjaan LCD dan Baterai berkisar 30-45 menit saja di gerai ITC Permata Hijau kami!
                </span>
              </div>
            </div>
          ) : (
            <div className="bg-[#0c0f16] border border-cyan-950/60 rounded-2xl p-6 flex flex-col h-full shadow-inner animate-fadeIn">
              <div className="flex items-center gap-2.5 mb-4 border-b border-gray-800 pb-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-950/70 border border-cyan-800/80 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wider">Hasil Analisis Teknis</h4>
                  <p className="text-[10.5px] text-cyan-400 mt-0.5 font-semibold font-mono">Mobile X Service Diagnostic</p>
                </div>
              </div>

              {/* Badges Info */}
              <div className="space-y-4 flex-grow">
                <div>
                  <span className="text-[10.5px] font-bold text-gray-500 uppercase font-mono block tracking-wider">KONDISI PERANGKAT</span>
                  <p className="text-sm text-gray-300 font-medium leading-relaxed mt-0.5">{diagnostic?.deviceState}</p>
                </div>

                <div>
                  <span className="text-[10.5px] font-bold text-gray-500 uppercase font-mono block tracking-wider">PREDIKSI INDIKASI UTAMA</span>
                  <p className="text-sm text-cyan-400 font-bold flex items-center gap-1.5 mt-0.5">
                    <Wrench className="w-4 h-4 text-cyan-400 flex-shrink-0" /> {diagnostic?.primaryIssue}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed border-l-2 border-cyan-900/60 pl-3 italic">
                    "{diagnostic?.diagnosis}"
                  </p>
                </div>

                {/* Estimate Grid */}
                <div className="grid grid-cols-2 gap-3.5 pt-1.5">
                  <div className="bg-[#121620] border border-gray-800 rounded-xl p-3">
                    <span className="text-[9.5px] font-bold text-gray-500 uppercase font-mono flex items-center gap-1 mb-1.5">
                      <Clock className="w-3 h-3 text-amber-500" /> Estimasi Waktu
                    </span>
                    <span className="text-xs font-semibold text-gray-200 block">{diagnostic?.estimatedTime}</span>
                  </div>
                  <div className="bg-[#121620] border border-gray-800 rounded-xl p-3">
                    <span className="text-[9.5px] font-bold text-gray-500 uppercase font-mono flex items-center gap-1 mb-1.5">
                      <Coins className="w-3 h-3 text-emerald-500" /> Estimasi Biaya
                    </span>
                    <span className="text-xs font-bold text-emerald-400 block">{diagnostic?.estimatedCost}</span>
                  </div>
                </div>

                {/* First Aid */}
                <div className="pt-1">
                  <span className="text-[10.5px] font-bold text-gray-500 uppercase font-mono block tracking-wider mb-2">TINDAKAN PERTAMA KAMU</span>
                  <ul className="space-y-1.5">
                    {diagnostic?.firstAidSteps.map((step, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-start gap-2 leading-relaxed">
                        <span className="w-4.5 h-4.5 rounded-full bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-[10px] text-amber-400 flex-shrink-0 mt-0.5 font-bold">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-5 border-t border-gray-800/80 space-y-3">
                <a
                  href={getWhatsAppLink(diagnostic?.whatsappDraft || "")}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#128C7E] hover:bg-[#075e54] text-white font-bold py-3 px-4 rounded-xl text-center text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4.5 h-4.5 fill-white" />
                  <span>Kirim Kontak & Jadwalkan Perbaikan</span>
                </a>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(diagnostic?.whatsappDraft || "")}
                    className="flex-1 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 text-gray-300 font-semibold py-2.5 px-3 rounded-lg text-xs transition-all flex items-center justify-center gap-1.5"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-400">Pesan Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Draf Pesan WA</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setDiagnostic(null);
                      setSelectedIssues([]);
                      setModelName("");
                      setDescription("");
                    }}
                    className="bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-gray-200 py-2.5 px-3.5 rounded-lg text-xs transition-all font-semibold"
                  >
                    Mulai Baru
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
