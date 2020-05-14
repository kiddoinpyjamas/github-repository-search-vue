import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md",
  },
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.deepPurple.darken1,
        secondary: colors.deepOrange.darken3,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.pink.darken2,
        secondary: colors.deepOrange.darken3,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
    },
  },
});
