"use client";

import { FormEvent, useState } from "react";

type Status = { kind: "success" | "error"; message: string } | null;

export function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [submitting, setSubmitting] = useState(false);
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    if (!endpoint) {
      setStatus({ kind: "error", message: "Contact submissions are not configured for this static build. Please email contact@satyaninfotech.com." });
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch(endpoint, { method: "POST", body: new FormData(event.currentTarget), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Request failed");
      event.currentTarget.reset();
      setStatus({ kind: "success", message: "Thank you! Your message has been sent." });
    } catch {
      setStatus({ kind: "error", message: "We could not send your message. Please email contact@satyaninfotech.com." });
    } finally {
      setSubmitting(false);
    }
  }

  return <form method="post" action={endpoint ?? "#contact-form"} className="customform" onSubmit={submit}>
    <div className="line"><div className="margin"><div className="s-12 m-12 l-6"><input name="email" id="email" placeholder="Your e-mail" title="Your e-mail" type="email" required /><p className="email-error form-error">Please enter your e-mail.</p></div><div className="s-12 m-12 l-6"><input name="name" id="name" placeholder="Your name" title="Your name" type="text" minLength={3} required /><p className="name-error form-error">Please enter your name.</p></div></div></div>
    <div className="s-12"><input name="subject" id="subject" placeholder="Subject" title="Subject" type="text" minLength={3} required /><p className="subject-error form-error">Please enter the subject.</p></div>
    <div className="s-12"><textarea name="message" id="message" placeholder="Your message" rows={3} minLength={5} required /><p className="message-error form-error">Please enter your message.</p></div>
    <div className="s-12 honeypot-field" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    {status && <div className={status.kind === "success" ? "alert-success" : "alert-error"} role="status">{status.message}</div>}
    <div className="s-12"><button className="s-12 submit-form button background-primary text-white" name="contactus" value="contactus" type="submit" disabled={submitting}>{submitting ? "Sending..." : "Submit Button"}</button></div>
  </form>;
}
