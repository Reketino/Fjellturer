const emojiMap = {
  clearsky_day: { text: "Klarvær (dag) ", emoji: "☀️" },
  clearsky_night: { text: "Klarvær (natt) ", emoji: "🌙" },

  fair_day: { text: "Lett skyet (dag) ", emoji: "🌤️" },
  fair_night: { text: "Lett skyet (natt) ", emoji: "🌙☁️" },

  partlycloudy_day: { text: "Delvis skyet (dag) ", emoji: "⛅" },
  partlycloudy_night: { text: "Delvis skyet (natt) ", emoji: "🌙☁️" },
  cloudy: { text: "Skyet ", emoji: "☁️" },

  lightrain: { text: "Lett regn", emoji: "🌦️" },
  rain: { text: "Regn ", emoji: "🌧️" },
  lightrainshowers_day: { text: "Lette regnbyger (dag)", emoji: "🌦️" },
  rainshowers_day: { text: "Lette regnbyger (dag)", emoji: "🌦️" },
  heavyrain: { text: "Kraftig regn ", emoji: "🌧️💦" },
  heavyrainshowers_day: { text: "Kraftige regnbyger (dag)", emoji: "🌧️☀️" },

  lightsnow: { text: "Lett snø", emoji: "🌨️" },
  snow: { text: "Snø ", emoji: "❄️" },
  heavysnow: { text: "Kraftig Snø", emoji: "❄️❄️" },
  heavysnowshowersday: { text: "Kraftige Snøbyger", emoji: "🌨️" },

  lightsleet: { text: "Lett sludd", emoji: "🌨️🌧️" },
  sleet: { text: "Sludd", emoji: "🌨️🌧️" },
  heavysleet: { text: "Kraftig sludd", emoji: "🌨️🌧️💦" },

  lightsleetshowers_day: { text: "Lette sluddbyger (dag)", emoji: "🌨️🌧️☀️" },
  lightsleetshowers_night: { text: "Lette sluddbyger (natt)", emoji: "🌨️🌧️🌙" },
  sleetshowers_day: { text: "Sluddbyger (dag)", emoji: "🌨️🌧️☀️" },
  sleetshowers_night: { text: "Sluddbyger (natt)", emoji: "🌨️🌧️🌙" },
  heavysleetshowers_day: { text: "Kraftige sluddbyger (dag)", emoji: "🌨️🌧️" },
  heavysleetshowers_night: {
    text: "Kraftige sluddbyger (natt)",
    emoji: "🌨️🌧️🌙",
  },

  fog: { text: "Tåke ", emoji: "🌫️" },
  fogday: { text: "Tåke (dag) ", emoji: "🌫️☀️" },
  mist: { text: "Dis", emoji: "🌁" },
  mist_day: { text: "Dis (dag)", emoji: "🌁☀️" },

  thunderstorm: { text: "Tordenvær", emoji: "⛈️" },
  lightrainandthunder: { text: "Lett regn og tordenvær", emoji: "🌦️⚡" },
  rainandthunder: { text: "Regn og tordenvær", emoji: "🌧️⚡" },
  heavyrainandthunder: { text: "Kraftig regn og tordenvær", emoji: "⛈️" },
  lightrainshowersandthunder_day: {
    text: "Lette regnbyger og tordenvær (dag)",
    emoji: "🌦️⚡",
  },
  rainshowersandthunder_day: {
    text: "Regnbyger og tordenvær (dag)",
    emoji: "🌧️⚡",
  },
  lightsnowandthunder: { text: "Lett snø og tordenvær", emoji: "🌨️⚡" },
  snowandthunder: { text: "Snø og tordenvær", emoji: "❄️⚡" },
  heavysnowandthunder: { text: "Kraftig snø og tordenvær", emoji: "❄️⚡⚡" },
};

export default emojiMap;
