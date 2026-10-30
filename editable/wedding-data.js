/**
 * wedding-data.js — Customer-facing editable data layer for wax-seal-royale
 * Configured for Manu Gupta & Ekta Gupta — 25th Wedding Anniversary (#EkMann)
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Manu Gupta",
    bride: "Ekta Gupta",
    groomFirst: "Manu",
    brideFirst: "Ekta",
    occasion: "25th Wedding Anniversary",
    hashtag: "#EkMann",
    subtitle: "Celebrating 25 Years of Togetherness • Silver Jubilee",
  },

  wedding: {
    dateLabel: "29th NOV - 1st DEC",
    dateISO: "2026-11-29T12:00:00+05:30",
    invitationNote: "Dear Friends and Family,<br />Join us for a celebration of love, laughter, and 25 years of beautiful togetherness as we celebrate our Silver Jubilee!",
  },

  schedule: [
    { title: "The Silver Arrival", time: "12:00 NOON" },
    { title: "Act I / The Opening Toast", time: "1:30 PM" },
    { title: "Act II / The Grand Unwrapping", time: "3:30 PM" },
    { title: "Act III / Nazrana (Mehfil)", time: "8:30 PM" },
    { title: "The Silver Ball", time: "8:30 PM" },
  ],

  itinerary: [
    {
      day: "29 November",
      tagline: "Arrivals, sundowner, mehfil & after-hours",
      dateShort: "29 Nov",
      events: [
        {
          time: "12:00 NOON",
          title: "The Silver Arrival",
          subtitle: "Guest check-in"
        },
        {
          time: "1:30 PM ONWARDS",
          title: "Act I / The Opening Toast",
          subtitle: "Welcome lunch"
        },
        {
          time: "3:30 - 6:30 PM",
          title: "Act II / The Grand Unwrapping",
          subtitle: "Candlelit sundowner - Amphitheater"
        },
        {
          time: "8:30 - 11:30 PM",
          title: "Act III / Nazrana",
          subtitle: "Mehfil night - Zen Garden"
        },
        {
          time: "12:30 AM ONWARDS",
          title: "Past Our Bedtime",
          subtitle: "Afterparty - Concord (early 30 November)",
          highlight: "The afterparty begins just after midnight on 30 November.",
          quote: "The only plan is not to have one. Bigger beats, a little mischief and a dance floor with no curfew."
        }
      ]
    },
    {
      day: "30 November",
      tagline: "From coffee to the grand celebration",
      dateShort: "30 Nov",
      events: [
        {
          time: "7:30 - 10:30 AM",
          title: "Coffee & Cover Stories",
          subtitle: "Breakfast - Aurora"
        },
        {
          time: "12:30 PM ONWARDS",
          title: "The Poolside Prelude",
          subtitle: "Lunch - Poolside"
        },
        {
          time: "2:30 - 6:30 PM",
          title: "Baraat 2.0",
          subtitle: "Poolside to Machan & Main Lawn"
        },
        {
          time: "DURING THE AFTERNOON",
          title: "Rangrez - Raag, Rang & Rajasthan",
          subtitle: "Folk music & festive food - Rangrez Lawn"
        },
        {
          time: "8:30 PM ONWARDS",
          title: "The Silver Ball - The Leopard Edit",
          subtitle: "Serenade Garden / Music, cake & afterparty",
          highlight: "The main event flows directly into the late-night party."
        }
      ]
    },
    {
      day: "1 December",
      tagline: "Farewell Morning & The Curtain Call",
      dateShort: "1 Dec",
      events: [
        {
          time: "7:30 - 10:30 AM",
          title: "The Farewell Brew",
          subtitle: "Breakfast - Aurora",
          quote: "One last coffee. Several new stories. A relaxed breakfast before everyone returns to being responsible.",
          venue: "AURORA / Breakfast"
        },
        {
          time: "BY 12:00 NOON",
          title: "Checkout",
          subtitle: "Checked out. Still #EkMann.",
          quote: "Thank you for making our Silver Jubilee an occasion worth remembering. — Manu & Ekta"
        }
      ]
    }
  ],

  venue: {
    name: "Buena Vista Luxury Garden Spa Resort",
    address: "Jaipur, Rajasthan",
    mapsUrl: "https://maps.app.goo.gl/bsTEjSybxpoKaKLw9?g_st=ic",
  },

  details: {
    giftPreference: "Your presence and blessings are our greatest gift.",
    dressCode: "Mehfil Night • Folk Festive • The Silver Ball (The Leopard Edit) / Elegant Evening Attire",
  },

  media: {
    overlayImage: "./editable/assets/ChatGPT Image Jun 23, 2026, 04_40_29 PM.png",
    sealVideo: "./editable/assets/1782224012851.mp4",
    heroVideo: "./editable/assets/Swans2.mov",
    audio: "./editable/assets/background-music.mp3",
  },
};
