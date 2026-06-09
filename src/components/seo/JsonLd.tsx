// Server component that emits a JSON-LD <script> into the page.
// Pass `raw` for a pre-serialized, verbatim JSON-LD string (used for the
// hand-authored FAQPage blocks), or `data` for a plain object that should be
// serialized here (used for the generated BlogPosting/Article schema).
// The `<` escape prevents the closing-script-tag XSS vector per Next.js guidance.

function escapeForScript(json: string): string {
  return json.replace(/</g, "\\u003c");
}

export default function JsonLd({
  data,
  raw,
}: {
  data?: unknown;
  raw?: string;
}) {
  const json = raw ?? JSON.stringify(data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: escapeForScript(json) }}
    />
  );
}
