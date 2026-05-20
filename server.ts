import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // Shared server-side initialization for Gemini AI SDK
  const geminiApiKey = process.env.GEMINI_API_KEY;
  const ai = geminiApiKey
    ? new GoogleGenAI({
        apiKey: geminiApiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      })
    : null;

  // API Route: AI Diagnostics
  app.post("/api/diagnose", async (req, res) => {
    try {
      if (!ai) {
        return res.status(503).json({
          error: "Sistem Diagnosis AI saat ini belum terhubung. Silakan hubungi kami langsung via WhatsApp.",
        });
      }

      const { deviceType, brand, modelName, issues, description } = req.body;

      if (!deviceType || !brand || !modelName) {
        return res.status(400).json({ error: "Mohon isi tipe perangkat, merek, dan model secara lengkap." });
      }

      const prompt = `Lakukan analisis teknis untuk masalah gadget berikut:
Tipe Perangkat: ${deviceType}
Merek: ${brand}
Model/Tipe: ${modelName}
Masalah Utama: ${Array.isArray(issues) ? issues.join(", ") : issues}
Deskripsi Tambahan: ${description || "Tidak ada keterangan tambahan"}

Sebagai teknisi senior 'Mobile X Service' di GRAND ITC PERMATA HIJAU LT3 Blok C11 No.5, berikan diagnosis yang akurat, jelaskan perkiraan komponen yang rusak, durasi perbaikan, estimasi biaya realistis dalam Rupiah (pasar Indonesia), tindakan pengamanan mandiri pertama, dan pesan WhatsApp pemesanan yang ramah dan siap kirim.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: `Anda adalah asisten diagnosis AI senior dari "Mobile X Service", sebuah pusat reparasi gadget terpercaya di GRAND ITC PERMATA HIJAU LT3 Blok C11 No.5.
Gaya komunikasi Anda profesional, informatif, ramah, dan solutif.
Berikan estimasi harga yang realistis sesuai kisaran harga pasar reparasi gadget di Jakarta saat ini (misalnya untuk LCD, Baterai, Konektor Charger, IC Power, Water Damage, dll.).
Output Anda HARUS dalam format JSON dengan skema yang telah ditentukan secara kaku.`,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              deviceState: {
                type: Type.STRING,
                description: "Ringkasan kondisi umum kegagalan perangkat berdasarkan deskripsi user.",
              },
              primaryIssue: {
                type: Type.STRING,
                description: "Komponen utama yang diidentifikasi mengalami kerusakan atau kegagalan (misalnya: LCD Screen, IC Battery Charger, dsb.)",
              },
              diagnosis: {
                type: Type.STRING,
                description: "Analisis teknis mendalam mengenai penyebab kerusakan dan mengapa penggantian/perbaikan diperlukan.",
              },
              estimatedTime: {
                type: Type.STRING,
                description: "Estimasi waktu pengerjaan, misalnya: '30-45 Menit', '2-3 Jam', atau '1-2 Hari Kerja' tergantung kerumitan.",
              },
              estimatedCost: {
                type: Type.STRING,
                description: "Estimasi kisaran biaya realistis dalam Rupiah, misalnya: 'Rp 450.000 - Rp 750.000' (beritahukan jika butuh cek kondisi langsung).",
              },
              firstAidSteps: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "Daftar 3 tindakan pertolongan pertama atau instruksi keselamatan yang harus dilakukan pengguna sekarang sebelum membawa gadget ke toko.",
              },
              whatsappDraft: {
                type: Type.STRING,
                description: "Teks pesan WhatsApp siap kirim yang sopan. Harus mengandung nama device, kendala, dan menanyakan ketersediaan sparepart untuk jadwal perbaikan di toko GRAND ITC PERMATA HIJAU LT3 Blok C11 No.5.",
              },
            },
            required: [
              "deviceState",
              "primaryIssue",
              "diagnosis",
              "estimatedTime",
              "estimatedCost",
              "firstAidSteps",
              "whatsappDraft",
            ],
          },
        },
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error("Keluaran kosong dari model AI.");
      }

      // Return the parsed JSON directly
      const parsedData = JSON.parse(responseText.trim());
      res.json(parsedData);
    } catch (error: any) {
      console.error("Kesalahan diagnosis AI:", error);
      res.status(500).json({
        error: "Terjadi gangguan saat memproses analisis AI. Kami tetap siap membantu Anda langsung via WhatsApp di 081288678992.",
      });
    }
  });

  // API Route: Check if Gemini is connected (status endpoint)
  app.get("/api/ai-status", (req, res) => {
    res.json({
      connected: !!ai,
      message: ai
        ? "Sistem Penganalisis AI Mobile X Service aktif"
        : "Sistem Penganalisis AI tidak aktif (Kunci API tidak ditemukan). Menggunakan sistem estimasi cadangan.",
    });
  });

  // Serve static files / integration with bundlers
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Mobile X Service Server berjalan di http://localhost:${PORT}`);
  });
}

startServer();
