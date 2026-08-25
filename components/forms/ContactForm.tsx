"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import { services } from "@/data/services";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

function validate(values: FormState): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[0-9+\-\s()]{7,}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.service) {
    errors.service = "Please choose a service.";
  }

  if (!values.message.trim()) {
    errors.message = "Please tell us a little about what you need.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please add a few more details (at least 10 characters).";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    field: keyof FormState,
    value: string
  ) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Frontend-only for now: no API call yet. This is where a future
    // `POST /api/contact` (or CMS/API integration) would be wired in.
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-2xl border border-brand-100 bg-white p-10 text-center"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-lg font-semibold text-brand-900">
          Thanks — your message is in.
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-brand-700/75">
          We&rsquo;ll get back to you shortly. If it&rsquo;s urgent, message us directly
          on WhatsApp instead.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-600 underline underline-offset-4 hover:text-brand-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-brand-100 bg-white p-6 sm:p-8"
    >
      {status === "error" && Object.keys(errors).length > 0 && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Please fix the highlighted fields below and try again.</span>
        </div>
      )}

      <Field
        label="Name"
        htmlFor="name"
        error={errors.name}
      >
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClasses(Boolean(errors.name))}
        />
      </Field>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Phone" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClasses(Boolean(errors.phone))}
          />
        </Field>

        <Field label="Email (optional)" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClasses(Boolean(errors.email))}
          />
        </Field>
      </div>

      <Field label="Service" htmlFor="service" error={errors.service}>
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={(e) => handleChange("service", e.target.value)}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? "service-error" : undefined}
          className={inputClasses(Boolean(errors.service))}
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </Field>

      <Field label="Message" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClasses(Boolean(errors.message))}
          placeholder="Tell us what you need help with..."
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-400 px-6 py-3.5 text-sm font-semibold text-brand-900 transition-all hover:bg-accent-500 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-medium text-brand-900">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClasses(hasError: boolean) {
  return `w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-brand-900 shadow-sm transition-colors placeholder:text-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400 ${
    hasError ? "border-red-400" : "border-brand-200"
  }`;
}
