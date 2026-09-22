---
title: 'Tax Code by Tommaso Scalici - Privacy Policy'
description: 'Privacy Policy and Google API Services User Data Policy compliance for Tax Code by Tommaso Scalici.'
---

<p class="text-sm text-muted">Last updated: September 22, 2026</p>

This Privacy Policy describes how personal information and user data are handled by the application **Tax Code by Tommaso Scalici** (referred to as "the App", "we", "our", or "us"), developed by **Tommaso Scalici** ("Data Controller").

We are deeply committed to user privacy and data security. The App is designed on an **offline-first and privacy-by-design** principle: core features operate locally on your device without requiring an account, and cloud synchronization is strictly optional.

<hr class="my-8 border-white/10" />

## 1. Data Controller & Application Information

- **Application Name:** Tax Code by Tommaso Scalici
- **Application Home Page:** <a href="https://tommasoscalici.dev/apps/taxcode/">https://tommasoscalici.dev/apps/taxcode/</a>
- **Developer / Data Controller:** Tommaso Scalici
- **Developer Website:** <a href="https://tommasoscalici.dev" target="_blank" rel="noopener noreferrer">https://tommasoscalici.dev</a>
- **Support & Inquiries Email:** <a href="mailto:contact@tommasoscalici.dev">contact@tommasoscalici.dev</a>

<hr class="my-8 border-white/10" />

## 2. Google OAuth 2.0 & User Data Policy Compliance

The App integrates **Google Sign-In** as an optional feature solely to allow users to synchronize their saved Tax Code cards across their personal devices (e.g., Android mobile phones and Wear OS smartwatches).

### Google Scopes & Data Accessed

When you explicitly choose to sign in with your Google Account, the App requests access to standard authentication scopes (`openid`, `profile`, `email`) managed securely through Firebase Authentication. We collect:

- Your unique Google User ID (UID)
- Your email address
- Your display name and profile picture URL (used only to display your active account profile in the app header/settings)

### How Google User Data is Used

- **Authentication & Authorization:** To verify your identity and authenticate access to your synchronized database.
- **Cross-Device Cloud Synchronization:** To securely store and synchronize your saved Tax Code records in Google Cloud Firestore under a path scoped specifically to your authenticated user ID.

### Protection of Google User Data

- **Encrypted in Transit:** All communications with Google Cloud services use secure transport protocols (HTTPS with TLS 1.3).
- **Encrypted at Rest:** Data stored in Google Cloud Firestore is encrypted at rest using Google Cloud managed encryption keys.
- **Strict Access Control:** Database security rules enforce that only your authenticated account (`request.auth.uid == userId`) can read, write, or delete your synchronized records.

### Google API Services User Data Policy Disclosure

> **Tax Code by Tommaso Scalici's use and transfer to any other app of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements.**

### No Commercialization, Profiling, or Advertising

- We **never** sell, rent, license, or trade Google user data or any personal data to data brokers, advertisers, or third parties.
- We **do not** use Google user data to serve targeted advertisements or build commercial marketing profiles.
- We **do not** use Google user data or your tax code records to train generalized artificial intelligence or machine learning models.

<hr class="my-8 border-white/10" />

## 3. Other Information Processed by the App

### A. Tax Code Calculation (In-House Offline Engine)

The calculation of the Italian Tax Code (_Codice Fiscale_) from personal details (first name, last name, date of birth, place of birth/country, gender) is performed **entirely on your local device** using the official ministerial algorithm (D.M. 23/12/1976) and an embedded offline database of Italian municipalities and foreign Belfiore codes.

- These inputs are processed in-memory on your device.
- No personal data entered for calculation is sent to external calculation servers.

### B. Smart Document Scanning (Gemini Enterprise Agent Platform)

The App includes an assistive camera scanner to recognize physical Health Cards (_Tessera Sanitaria_) and Identity Cards (_Carta d'Identità_).

- When you use the document scanner, the image capture is transmitted over TLS directly to secure Google Cloud Functions powered by the **Gemini Enterprise Agent Platform (GEAP)** for optical character recognition (OCR) and structured field extraction.
- Scanned images are processed transiently in memory and are **immediately discarded**. Images are **never stored on servers** and are **never used to train machine learning models**.

### C. Local Storage (Hive CE)

If you use the App in Guest Mode (without Google Sign-In), your saved tax codes and settings are stored strictly in local on-device storage using Hive CE. This data remains under your exclusive physical control.

<hr class="my-8 border-white/10" />

## 4. Legal Basis for Processing (GDPR)

The processing of personal data is carried out in compliance with the General Data Protection Regulation (GDPR - EU Regulation 2016/679):

- **Contractual Necessity / Consent:** For providing the requested services (offline calculation, optional cloud sync requested by the user).
- **Legitimate Interest:** For maintaining app stability, error prevention, and ensuring data security.

<hr class="my-8 border-white/10" />

## 5. Data Retention and Deletion

We believe in complete data ownership and user control:

- **Data Retention Period:** Your synchronized data is retained in Cloud Firestore only for as long as your account remains active.
- **In-App Account Deletion (Self-Service):** You can permanently delete your account and all associated cloud data at any time directly within the app under **Settings → Delete Account**. This action permanently wipes your user record and all saved tax code entries from Google Cloud Firestore.
- **Web Data Deletion Guide:** For step-by-step instructions or deletion requests, please refer to our dedicated <a href="/apps/taxcode/data-deletion/">Data Deletion Instructions</a> page.
- **Revoking Google Permissions:** You can revoke the App's access to your Google Account at any time through your <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">Google Account Permissions Settings</a>.

<hr class="my-8 border-white/10" />

## 6. Your Rights (GDPR / Privacy Regulations)

Under applicable data protection laws, you have the right to:

- Access, rectify, or request the erasure of your personal data.
- Restrict or object to the processing of your data.
- Request data portability.
- Lodge a complaint with a supervisory authority (such as the Italian _Garante per la protezione dei dati personali_ or your local EU authority).

To exercise any of these rights, contact us directly at <a href="mailto:contact@tommasoscalici.dev">contact@tommasoscalici.dev</a>.

<hr class="my-8 border-white/10" />

## 7. Changes to this Privacy Policy

We may update this Privacy Policy periodically to reflect changes in our practices or regulatory requirements. Any modifications will be posted on this page with an updated revision date.

<hr class="my-8 border-white/10" />

## 8. Disclaimer

**Tax Code by Tommaso Scalici is an independent third-party tool and is not affiliated with, endorsed by, or representative of the Italian Revenue Agency (_Agenzia delle Entrate_) or any government body.** For further legal terms, please read our <a href="/apps/taxcode/terms-of-service/">Terms of Service</a>.
