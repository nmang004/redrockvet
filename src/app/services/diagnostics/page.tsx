import { Metadata } from "next";
import DiagnosticsContent from "./diagnostics-content";

export const metadata: Metadata = {
  title: "Diagnostics - Red Rock Veterinary Health",
  description: "State-of-the-art diagnostic equipment for accurate diagnosis. Digital X-rays, ultrasound, blood work, and urinalysis at Red Rock Veterinary Health.",
};

export default function DiagnosticsPage() {
  return <DiagnosticsContent />;
}