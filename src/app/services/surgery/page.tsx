import { Metadata } from "next";
import SurgeryContent from "./surgery-content";

export const metadata: Metadata = {
  title: "Veterinary Surgery - Red Rock Veterinary Health",
  description: "Comprehensive surgical services including routine and complex surgeries, spays/neuters, mass removals, and advanced orthopedic procedures with extensive anesthetic monitoring.",
};

export default function SurgeryPage() {
  return <SurgeryContent />;
}