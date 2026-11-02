# SMART ONLINE SERVICE POINT (CSC CENTRE)

Modern responsive website for a Govt. Approved CSC Centre focused on document, insurance and digital service assistance.

## Main focus services

- Third-party vehicle insurance and policy renewal
- PAN Card application, correction and reprint
- Voter Card application and updates
- Passport forms, appointments and status assistance
- Driving Licence services
- Visa and Visa PCC assistance
- Character PCC and certificate assistance
- Patiala House stamp, affidavit and document work
- Other CSC services such as Aadhaar, banking, bill payments and government schemes

## Website features

- Responsive landing page with English, Hindi and Punjabi translations
- English-default language selector, visible on desktop and mobile
- SMART ONLINE SERVICE POINT (CSC CENTRE) branding
- Responsive navigation with active section state
- Continuously scrolling topbar service ticker that updates from the service cards
- Service category filters
- Click-to-select service cards
- Direct phone call links
- Direct WhatsApp button with pre-filled message
- Animated hero cards and service hover states
- Cursor-follow glow effect on desktop
- Reduced-motion support for accessibility
- Premium gradient header and footer
- Govt. Approved CSC Centre messaging
- SharpGBS maintenance attribution linked to `https://sharp-gbs.in`

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure, content, services and links |
| `styles.css` | Responsive layout, visual design and animations |
| `script.js` | Navigation, service filters, active cards and cursor effect |
| `assets/smart-online-service-point-logo.png` | Supplied centre logo used in the header, hero card and footer |
| `assets/service-*.png` | Individual illustrations displayed on their matching service cards |

## Run locally

From the project directory:

```powershell
python -m http.server 4173
```

Open:

```text
http://localhost:4173/index.html
```

## Contact configuration

The current contact number used throughout the website is:

```text
+91 70097 17425
```

To change it, update the `tel:` and `wa.me` links in `index.html`.

## Git history

The project is stored in a local Git repository. The initial website commit includes:

- Responsive website structure
- CSC service sections
- SMART ONLINE SERVICE POINT (CSC CENTRE) branding
- Header and footer design
- WhatsApp integration
- Animations and visual polish

## Notes

- This is a dependency-free static website.
- No build step is required.
- Use `Ctrl + F5` in the browser after editing to bypass cached CSS or JavaScript.
