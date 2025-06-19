import { Metadata } from "next";
import BehavioralContent from "./behavioral-content";

export const metadata: Metadata = {
  title: "Pet Behavioral Management - Red Rock Veterinary Health",
  description: "Comprehensive behavioral evaluations and treatment for fear, anxiety, aggression, and compulsive behaviors. Evidence-based behavioral medicine with specialist collaboration.",
};

export default function BehavioralPage() {
  return <BehavioralContent />;
}