/**
 * wedding-data.js — Customer-facing editable data layer for wax-seal-royale
 * Configured for Manu Gupta & Ekta Gupta — 25th Wedding Anniversary (#EkMan / #EkMann)
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Manu Gupta",
    bride: "Ekta Gupta",
    groomFirst: "Manu",
    brideFirst: "Ekta",
    occasion: "25th Wedding Anniversary",
    hashtag: "#EkMan",
    subtitle: "Celebrating 25 Years of Togetherness<br />Silver Jubilee",
  },

  wedding: {
    dateLabel: "30th NOV - 1st DEC",
    dateISO: "2026-11-30T07:30:00+05:30",
    invitationNote: "Dear Friends and Family,<br />Join us for a celebration of love, laughter, and 25 years of beautiful togetherness as we celebrate our Silver Jubilee!",
  },

  schedule: [
    { title: "Coffee & Cover Stories", time: "7:30 AM" },
    { title: "The Poolside Prelude", time: "12:30 PM" },
    { title: "Baraat 2.0", time: "2:30 PM" },
    { title: "Rangrez Lawn", time: "2:30 PM" },
    { title: "The Silver Ball", time: "8:30 PM" },
    { title: "The Farewell Brew", time: "7:30 AM" },
    { title: "Checkout", time: "12:00 NOON" }
  ],

  itinerary: [
    {
      dayId: "day1",
      dayTitle: "30 November",
      dayDate: "Monday, 30 November 2026",
      tagline: "From coffee to the grand celebration",
      dateShort: "30 Nov",
      overviewCard: "images/events/p15_day2_overview.png",
      footerNote: "The main event flows directly into the late-night party.",
      events: [
        {
          id: "coffee-cover-stories",
          number: "07:30",
          act: "30 NOVEMBER / THE MORNING AFTER",
          title: "Coffee & Cover Stories",
          subtitle: "Breakfast - Aurora",
          quote: "Good mornings. Better stories from last night.",
          description: "Recharge, compare notes and casually pretend we slept early.",
          date: "Monday, 30 November 2026",
          time: "7:30 - 10:30 AM",
          venue: "AURORA / Breakfast",
          cardImage: "images/events/p16_event_coffee_cover_stories.png"
        },
        {
          id: "poolside-prelude",
          number: "12:30",
          act: "30 NOVEMBER / THE MIDDAY INTERLUDE",
          title: "The Poolside Prelude",
          subtitle: "Lunch - Poolside",
          quote: "A relaxed lunch before the celebrations find their feet.",
          description: "Sunshine, familiar faces and a little anticipation before the baraat.",
          date: "Monday, 30 November 2026",
          time: "12:30 PM onwards",
          venue: "POOL SIDE / Lunch",
          cardImage: "images/events/p17_event_poolside_prelude.png"
        },
        {
          id: "baraat",
          act: "30 NOVEMBER / THE JOINT PROCESSION",
          title: "Baraat 2.0",
          subtitle: "Two Leads. One Procession.",
          tagline: "Twenty-five years later, this time we dance in together.",
          date: "Monday, 30 November 2026",
          time: "2:30 - 6:30 PM",
          venue: "Poolside > Machan > Main Lawn",
          venueArt: "images/events/art/photo_baraat_dancing.png",
          cardImage: "images/events/p18_event_baraat.png",
          dressCode: {
            title: "The Bright Side of Baraat",
            subtitle: "Light. Bright. Ready to dance.",
            time: "30 NOVEMBER | 2:30 - 6:30 PM",
            description: "Airy festive silhouettes, cheerful pastels and comfortable movement.",
            caricature: "images/events/art/caricature_bright_side_baraat.png",
            cardImage: "images/events/p19_dresscode_bright_side_baraat.png",
            colors: ["#f3c6b3", "#d3b27a", "#bed3dd", "#efdd9e"]
          }
        },
        {
          id: "rangrez",
          act: "30 NOVEMBER / THE RAJASTHANI CELEBRATION",
          title: "Rangrez Lawn",
          subtitle: "Raag, Rang & Rajasthan",
          tagline: "Folk music and a Rajasthani feast, from every jharokha.",
          date: "Monday, 30 November 2026",
          time: "During the 2:30 - 6:30 PM celebration",
          venue: "Machan & adjoining Main Lawn",
          venueArt: "images/events/art/venue_rangrez.png",
          cardImage: "images/events/p20_event_rangrez.png"
        },
        {
          id: "silver-ball",
          act: "30 NOVEMBER / THE GRAND ANNIVERSARY",
          title: "The Silver Ball",
          subtitle: "The Leopard Edit",
          tagline: "Heritage glamour. A little dramatic instinct.",
          date: "Monday, 30 November 2026",
          time: "8:30 PM onwards",
          venue: "Serenade Garden",
          venueArt: "images/events/art/venue_silver_ball.png",
          cardImage: "images/events/p21_event_silver_ball.png",
          dressCode: {
            title: "Heritage After Dark",
            subtitle: "Vintage glamour with a leopard accent",
            time: "30 NOVEMBER | 8:30 PM ONWARDS",
            description: "Black, oxblood, antique gold; leopard print as an accent, not a costume.",
            caricature: "images/events/art/caricature_heritage_after_dark.png",
            cardImage: "images/events/p22_dresscode_heritage_after_dark.png",
            colors: ["#1c1818", "#50252d", "#ae7f53", "#d1b887"]
          }
        }
      ]
    },
    {
      dayId: "day2",
      dayTitle: "1 December",
      dayDate: "Tuesday, 1 December 2026",
      tagline: "Farewell Morning & The Curtain Call",
      dateShort: "1 Dec",
      overviewCard: null,
      footerNote: "Checked out. Still #EkMan.",
      events: [
        {
          id: "farewell-brew",
          number: "07:30",
          act: "1 DECEMBER / FAREWELL MORNING",
          title: "The Farewell Brew",
          subtitle: "Breakfast - Aurora",
          quote: "One last coffee. Several new stories.",
          description: "A relaxed breakfast before everyone returns to being responsible.",
          date: "Tuesday, 1 December 2026",
          time: "7:30 - 10:30 AM",
          venue: "AURORA / Breakfast",
          cardImage: "images/events/p24_event_farewell_brew.png"
        },
        {
          id: "checkout",
          act: "1 DECEMBER / THE CURTAIN CALL",
          title: "Checkout",
          subtitle: "By 12:00 noon",
          quote: "Checked out. Still #EkMan.",
          description: "Thank you for making our Silver Jubilee an occasion worth remembering.",
          date: "Tuesday, 1 December 2026",
          time: "By 12:00 noon",
          venue: "Buena Vista Luxury Resorts & Garden Spa",
          signature: "MANU & EKTA",
          cardImage: "images/events/p25_event_checkout.png"
        }
      ]
    }
  ],

  venue: {
    name: "Buena Vista Luxury Resorts & Garden Spa",
    address: "Jaipur",
    mapsUrl: "https://maps.app.goo.gl/bsTEjSybxpoKaKLw9?g_st=ic",
  },

  details: {
    giftPreference: "Your presence and blessings are our greatest gift.",
    dressCode: "Mehfil Night • Folk Festive • The Silver Ball (The Leopard Edit) / Elegant Evening Attire",
  },

  media: {
    overlayImage: "./editable/assets/envelope.jpg",
    sealVideo: "./editable/assets/1782224012851.mp4",
    heroVideo: "./editable/assets/Swans2.mov",
    audio: "./editable/assets/background-music.mp3",
  },
};
