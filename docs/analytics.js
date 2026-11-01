// Site analytics for the demo page. Off until you fill in an ID below.
// 访问统计：填入下面任意一个 ID 就会开启，留空则完全不加载任何统计脚本。
//
//   Umami (recommended, cookie-free): create a website at https://cloud.umami.is
//     or your self-hosted Umami, then paste its Website ID.
//   Google Analytics 4: paste the Measurement ID (G-XXXXXXXXXX).
//
// Tracked events: pose_switch, pattern_switch, card_open, png_download,
// source_view, lang_switch, github_click.
window.DUO_ANALYTICS = {
  umamiWebsiteId: "",
  umamiSrc: "https://cloud.umami.is/script.js",
  gaMeasurementId: ""
};

(function (cfg) {
  var head = document.head;
  if (cfg.umamiWebsiteId) {
    var u = document.createElement("script");
    u.defer = true;
    u.src = cfg.umamiSrc;
    u.setAttribute("data-website-id", cfg.umamiWebsiteId);
    head.appendChild(u);
  }
  if (cfg.gaMeasurementId) {
    var g = document.createElement("script");
    g.async = true;
    g.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(cfg.gaMeasurementId);
    head.appendChild(g);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", cfg.gaMeasurementId);
  }
})(window.DUO_ANALYTICS);

// Safe to call even when analytics is off.
window.duoTrack = function (name, data) {
  try {
    if (window.umami && typeof window.umami.track === "function") window.umami.track(name, data || {});
    if (typeof window.gtag === "function" && window.DUO_ANALYTICS.gaMeasurementId) window.gtag("event", name, data || {});
  } catch (e) { /* never break the page */ }
};
