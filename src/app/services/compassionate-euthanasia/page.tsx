import { Metadata } from "next";
import EuthanasiaContent from "./euthanasia-content";

export const metadata: Metadata = {
  title: "Compassionate Euthanasia - Red Rock Veterinary Health",
  description: "Peaceful, respectful end-of-life services with compassionate euthanasia, quality of life assessments, and aftercare options including cremation and keepsakes.",
};

export default function EuthanasiaPage() {
  return <EuthanasiaContent />;
}