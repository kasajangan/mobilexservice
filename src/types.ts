export type DeviceCategory = "smartphone" | "tablet" | "laptop" | "wearable";

export interface PresetIssue {
  id: string;
  label: string;
  description: string;
  severity: "low" | "medium" | "high" | "critical";
}

export interface BrandOption {
  id: string;
  name: string;
  icon?: string;
}

export interface DiagnosticResult {
  deviceState: string;
  primaryIssue: string;
  diagnosis: string;
  estimatedTime: string;
  estimatedCost: string;
  firstAidSteps: string[];
  whatsappDraft: string;
}

export interface ServiceEstimate {
  id: string;
  category: string;
  items: {
    name: string;
    description: string;
    priceRange: string;
    duration: string;
  }[];
}
