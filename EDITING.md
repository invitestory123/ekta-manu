# Customer Editing Guide — Manu & Ekta (#EkMann)

This template is customized for the **25th Wedding Anniversary (Silver Jubilee)** celebration of **Manu Gupta & Ekta Gupta** at **Buena Vista Luxury Resorts & Garden Spa**.

It features an interactive wax-seal envelope overlay, opening animation video, ambient video backdrop, personalized background soundtrack, countdown timer, complete 2-day multi-event programme (tabbed itinerary), venue navigation, and event etiquette.

---

## Configuration & Content

All customer edits are configured in:
→ [editable/wedding-data.js](file:///c:/invitestory/week9/ekta-manu/editable/wedding-data.js)

### Couple & Occasion Information
Edit `couple` in `editable/wedding-data.js`:
- `groom`: `"Manu Gupta"`
- `bride`: `"Ekta Gupta"`
- `groomFirst` & `brideFirst`: `"Manu"`, `"Ekta"`
- `occasion`: `"25th Wedding Anniversary"`
- `hashtag`: `"#EkMann"`
- `subtitle`: `"Celebrating 25 Years of Togetherness • Silver Jubilee"`

### Anniversary Dates & Note
Edit `wedding` in `editable/wedding-data.js`:
- `dateLabel`: `"30th NOV - 1st DEC"`
- `dateISO`: `"2026-11-30T11:00:00+05:30"` (drives countdown timer & Google Calendar)
- `invitationNote`: Main anniversary message text

### Multi-Day Programme (Itinerary)
Edit `itinerary` array in `editable/wedding-data.js`:
- **30 November 2026** (From coffee to the grand celebration):
  - 11:00 AM ONWARDS: The Silver Arrival (Guest check-in & room availability)
  - 12:30 PM ONWARDS: The Poolside Prelude (Lunch – Poolside)
  - 2:30 – 6:30 PM: Baraat 2.0 (Poolside to Machan & Main Lawn)
  - During the Afternoon: Rangrez – Raag, Rang & Rajasthan (Folk music & festive food – Rangrez Lawn)
  - 8:30 PM ONWARDS: The Silver Ball – The Leopard Edit (Serenade Garden / Music, cake & afterparty)
- **1 December 2026** (Farewell Morning & The Curtain Call):
  - 7:30 – 10:30 AM: The Farewell Brew (Breakfast – Aurora)
  - By 12:00 NOON: Checkout ("Checked out. Still #EkMann.")

### Venue & Location
Edit `venue` in `editable/wedding-data.js`:
- `name`: `"Buena Vista Luxury Resorts & Garden Spa"`
- `address`: `"Jaipur"`
- `mapsUrl`: `"https://maps.app.goo.gl/bsTEjSybxpoKaKLw9?g_st=ic"`

### Media & Audio
- `audio`: `./editable/assets/background-music.mp3` (custom extracted soundtrack)
- `heroVideo`: `./editable/assets/Swans2.mov`
- `sealVideo`: `./editable/assets/1782224012851.mp4`
- `overlayImage`: `./editable/assets/envelope.jpg`
