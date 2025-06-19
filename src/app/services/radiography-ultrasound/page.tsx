import { Metadata } from "next";
import DiagnosticImagingContent from "./diagnostic-imaging-content";

export const metadata: Metadata = {
  title: "Diagnostic Imaging - Red Rock Veterinary Health",
  description: "Advanced diagnostic imaging services including digital radiography and ultrasound in Colorado Springs. Board-certified radiologist evaluations with minimal stress procedures.",
};

export default function DiagnosticImagingPage() {
  return <DiagnosticImagingContent />;
}