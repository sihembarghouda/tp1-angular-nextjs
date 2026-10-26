
import { Suspense } from "react";
import ContactDetails from "./ContactDetails";

export default function ContactDetailsPage() {
  return (
    <Suspense fallback={<p style={{ textAlign: "center", margin: "60px" }}>Chargement...</p>}>
      <ContactDetails />
    </Suspense>
  );
}
