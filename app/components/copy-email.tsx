"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Email address copied. Paste it into your email app.");
    } catch {
      setStatus(`Couldn’t copy automatically. Select and copy ${email}.`);
    }
  }

  return (
    <div className="copy-email">
      <button type="button" className="copy-email-button" onClick={copyEmail}>
        Copy email address
      </button>
      <span className="copy-email-status" role="status">
        {status}
      </span>
    </div>
  );
}
