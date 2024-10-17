import { colors } from './colors';

export const globalStyles = {
  global: {
    "html, body, main, article, nav, aside, section, header, footer, address, div, h1, h2, h3, h4, h5, h6, p, blockquote, ol, ul, li, dl, dt, dd, hr, pre, figure, figcaption, table, caption, thead, tbody, tfoot, tr, th, td, col, colgroup, form, fieldset, legend, label, input, button, select, datalist, optgroup, option, textarea, progress, meter, img, iframe, embed, object, param, video, audio, source, canvas, track, map, area, del, ins, a, em, strong, i, b, u, s, small, abbr, q, cite, dfn, sub, sup, time, code, kbd, samp, var, bdi, bdo, ruby, rt, rp, wbr, mark, span, br": {
      padding: 0,
      margin: 0,
      fontSize: "100%",
      fontStyle: "normal",
      fontWeight: "normal",
      verticalAlign: "baseline",
      background: "transparent",
      boxSizing: "border-box",
    },

    body: {
      fontFamily: '"Poppins", Arial, Helvetica, sans-serif',
      backgroundColor: colors.app.clear.morning.background,
      color: colors.app.clear.morning.text,
      minHeight: "100vh",
      lineHeight: "1.38",
      fontWeight: 600,
    },

    a: {
      textDecoration: "none",
    },

    "img, svg": {
      maxWidth: "100%",
      border: 0,
    },

    "svg a": {
      display: "block",
    },

    li: {
      listStyle: "none",
    },

    hr: {
      border: 0,
    },

    table: {
      borderCollapse: "collapse",
      borderSpacing: 0,
    },

    "caption, th, td": {
      textAlign: "left",
    },

    "::after, ::before": {
      boxSizing: "inherit",
    },

    "h1, h2, h3, h4, h5, h6": {
      marginBottom: "24px",
      fontWeight: 700,
    },

    h1: {
      fontSize: "28px",
    },

    h2: {
      fontSize: "24px",
    },

    h3: {
      fontSize: "20px",
    },

    h4: {
      fontSize: "16px",
    },

    h5: {
      fontSize: "12px",
    },

    h6: {
      fontSize: "12px",
    },

    p: {
      lineHeight: "1.3",
    },

    em: {
      fontStyle: "oblique",
    },

    strong: {
      fontWeight: 500,
    },

    "ol, ul": {
      marginBottom: "16px",
    },

    "ol li": {
      marginRight: "4px",
      marginLeft: "24px",
      listStyleType: "decimal",
    },

    "ul li": {
      marginRight: "4px",
      marginLeft: "24px",
    },
  },
};
