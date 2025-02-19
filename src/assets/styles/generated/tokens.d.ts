/**
 * Do not edit directly, this file was auto-generated.
 */

export default tokens;

declare interface DesignToken {
  value?: any;
  type?: string;
  comment?: string;
  name?: string;
  themeable?: boolean;
  attributes?: Record<string, unknown>;
  [key: string]: any;
}

declare const tokens: {
  border: {
    core: {
      radius: {
        none: DesignToken;
        sm: DesignToken;
        md: DesignToken;
        lg: DesignToken;
        xl: DesignToken;
        "2xl": DesignToken;
        full: DesignToken;
      };
      width: {
        none: DesignToken;
        thin: DesignToken;
        thick: DesignToken;
        thicker: DesignToken;
      };
      style: {
        solid: DesignToken;
        dashed: DesignToken;
        dotted: DesignToken;
      };
    };
    semantic: {
      radius: {
        container: DesignToken;
        button: DesignToken;
        input: DesignToken;
        card: DesignToken;
        badge: DesignToken;
      };
      width: {
        focus: DesignToken;
        separator: DesignToken;
        divider: DesignToken;
      };
    };
  };
  color: {
    brand: {
      primary: DesignToken;
      "primary-light": DesignToken;
      "primary-lighter": DesignToken;
      "primary-dark": DesignToken;
      "primary-darker": DesignToken;
      secondary: DesignToken;
      "secondary-light": DesignToken;
      "secondary-lighter": DesignToken;
      "secondary-dark": DesignToken;
      "secondary-darker": DesignToken;
      success: DesignToken;
      warning: DesignToken;
      error: DesignToken;
    };
    core: {
      primary: DesignToken;
      secondary: DesignToken;
      white: DesignToken;
      gray: {
        "50": DesignToken;
        "100": DesignToken;
        "200": DesignToken;
        "300": DesignToken;
        "400": DesignToken;
        "500": DesignToken;
        "600": DesignToken;
        "700": DesignToken;
        "800": DesignToken;
        "900": DesignToken;
      };
    };
    semantic: {
      background: {
        primary: {
          light: DesignToken;
          dark: DesignToken;
        };
        secondary: {
          light: DesignToken;
          dark: DesignToken;
        };
        tertiary: {
          light: DesignToken;
          dark: DesignToken;
        };
      };
      text: {
        primary: {
          light: DesignToken;
          dark: DesignToken;
        };
        secondary: {
          light: DesignToken;
          dark: DesignToken;
        };
        disabled: {
          light: DesignToken;
          dark: DesignToken;
        };
        inverse: {
          light: DesignToken;
          dark: DesignToken;
        };
      };
      button: {
        primary: {
          bg: {
            light: DesignToken;
            dark: DesignToken;
          };
          text: {
            light: DesignToken;
            dark: DesignToken;
          };
          hover: {
            light: DesignToken;
            dark: DesignToken;
          };
          active: {
            light: DesignToken;
            dark: DesignToken;
          };
          disabled: {
            light: DesignToken;
            dark: DesignToken;
          };
        };
        secondary: {
          bg: {
            light: DesignToken;
            dark: DesignToken;
          };
          text: {
            light: DesignToken;
            dark: DesignToken;
          };
          hover: {
            light: DesignToken;
            dark: DesignToken;
          };
          active: {
            light: DesignToken;
            dark: DesignToken;
          };
          disabled: {
            light: DesignToken;
            dark: DesignToken;
          };
        };
        tertiary: {
          bg: {
            light: DesignToken;
            dark: DesignToken;
          };
          text: {
            light: DesignToken;
            dark: DesignToken;
          };
          hover: {
            light: DesignToken;
            dark: DesignToken;
          };
          active: {
            light: DesignToken;
            dark: DesignToken;
          };
        };
        outline: {
          bg: {
            light: DesignToken;
            dark: DesignToken;
          };
          text: {
            light: DesignToken;
            dark: DesignToken;
          };
          border: {
            light: DesignToken;
            dark: DesignToken;
          };
          hover: {
            light: DesignToken;
            dark: DesignToken;
          };
        };
        disabled: {
          bg: {
            light: DesignToken;
            dark: DesignToken;
          };
          text: {
            light: DesignToken;
            dark: DesignToken;
          };
        };
      };
      border: {
        default: {
          light: DesignToken;
          dark: DesignToken;
        };
        hover: {
          light: DesignToken;
          dark: DesignToken;
        };
        focus: {
          light: DesignToken;
          dark: DesignToken;
        };
        disabled: {
          light: DesignToken;
          dark: DesignToken;
        };
      };
    };
  };
  elevation: {
    core: {
      shadow: {
        none: DesignToken;
        xs: DesignToken;
        sm: DesignToken;
        md: DesignToken;
        lg: DesignToken;
        xl: DesignToken;
        "2xl": DesignToken;
      };
      blur: {
        none: DesignToken;
        sm: DesignToken;
        md: DesignToken;
        lg: DesignToken;
        xl: DesignToken;
        "2xl": DesignToken;
        "3xl": DesignToken;
      };
    };
    semantic: {
      shadow: {
        surface: {
          raised: DesignToken;
          floating: DesignToken;
          overlay: DesignToken;
        };
        component: {
          default: DesignToken;
          hover: DesignToken;
          active: DesignToken;
        };
      };
      blur: {
        background: DesignToken;
        modal: DesignToken;
      };
    };
  };
  grid: {
    core: {
      breakpoints: {
        xs: DesignToken;
        sm: DesignToken;
        md: DesignToken;
        lg: DesignToken;
        xl: DesignToken;
        "2xl": DesignToken;
      };
      container: {
        "max-width": {
          xs: DesignToken;
          sm: DesignToken;
          md: DesignToken;
          lg: DesignToken;
          xl: DesignToken;
          "2xl": DesignToken;
        };
        padding: {
          xs: DesignToken;
          sm: DesignToken;
          md: DesignToken;
          lg: DesignToken;
        };
      };
      columns: {
        count: DesignToken;
        gap: {
          xs: DesignToken;
          sm: DesignToken;
          md: DesignToken;
          lg: DesignToken;
        };
      };
    };
  };
  motion: {
    core: {
      duration: {
        instant: DesignToken;
        fast: DesignToken;
        normal: DesignToken;
        slow: DesignToken;
      };
      easing: {
        linear: DesignToken;
        "ease-in": DesignToken;
        "ease-out": DesignToken;
        "ease-in-out": DesignToken;
      };
    };
    semantic: {
      transition: {
        entrance: {
          duration: DesignToken;
          easing: DesignToken;
        };
        exit: {
          duration: DesignToken;
          easing: DesignToken;
        };
        interactive: {
          duration: DesignToken;
          easing: DesignToken;
        };
      };
    };
  };
  spacing: {
    core: {
      "0": DesignToken;
      xxs: DesignToken;
      xs: DesignToken;
      sm: DesignToken;
      md: DesignToken;
      lg: DesignToken;
      xl: DesignToken;
      xxl: DesignToken;
      "3xl": DesignToken;
      "4xl": DesignToken;
      "5xl": DesignToken;
    };
    semantic: {
      component: {
        padding: {
          small: DesignToken;
          medium: DesignToken;
          large: DesignToken;
        };
        gap: {
          small: DesignToken;
          medium: DesignToken;
          large: DesignToken;
        };
      };
      layout: {
        padding: {
          page: DesignToken;
          section: DesignToken;
          content: DesignToken;
        };
        gap: {
          stack: DesignToken;
          inline: DesignToken;
        };
      };
    };
  };
  typography: {
    core: {
      fontFamily: {
        primary: DesignToken;
        secondary: DesignToken;
      };
      fontSize: {
        xs: DesignToken;
        sm: DesignToken;
        base: DesignToken;
        lg: DesignToken;
        xl: DesignToken;
        "2xl": DesignToken;
        "3xl": DesignToken;
      };
      fontWeight: {
        regular: DesignToken;
        medium: DesignToken;
        semibold: DesignToken;
        bold: DesignToken;
      };
      lineHeight: {
        tight: DesignToken;
        normal: DesignToken;
        relaxed: DesignToken;
      };
    };
  };
  theme: {
    light: {
      background: {
        primary: DesignToken;
        secondary: DesignToken;
        tertiary: DesignToken;
      };
      text: {
        primary: DesignToken;
        secondary: DesignToken;
        disabled: DesignToken;
        inverse: DesignToken;
      };
      button: {
        primary: {
          bg: DesignToken;
          text: DesignToken;
          hover: DesignToken;
          active: DesignToken;
          disabled: DesignToken;
        };
        secondary: {
          bg: DesignToken;
          text: DesignToken;
          hover: DesignToken;
          active: DesignToken;
          disabled: DesignToken;
        };
        tertiary: {
          bg: DesignToken;
          text: DesignToken;
          hover: DesignToken;
          active: DesignToken;
        };
        outline: {
          bg: DesignToken;
          text: DesignToken;
          border: DesignToken;
          hover: DesignToken;
        };
        disabled: {
          bg: DesignToken;
          text: DesignToken;
        };
      };
      border: {
        default: DesignToken;
        hover: DesignToken;
        focus: DesignToken;
        disabled: DesignToken;
      };
      color: {
        background: {
          primary: DesignToken;
          secondary: DesignToken;
          tertiary: DesignToken;
        };
        text: {
          primary: DesignToken;
          secondary: DesignToken;
          disabled: DesignToken;
          inverse: DesignToken;
        };
        action: {
          primary: DesignToken;
          "primary-hover": DesignToken;
          "primary-active": DesignToken;
          "primary-disabled": DesignToken;
          secondary: DesignToken;
          "secondary-hover": DesignToken;
          "secondary-active": DesignToken;
          "secondary-disabled": DesignToken;
        };
        border: {
          default: DesignToken;
          hover: DesignToken;
          focus: DesignToken;
          disabled: DesignToken;
        };
      };
    };
    dark: {
      background: {
        primary: DesignToken;
        secondary: DesignToken;
        tertiary: DesignToken;
      };
      text: {
        primary: DesignToken;
        secondary: DesignToken;
        disabled: DesignToken;
        inverse: DesignToken;
      };
      button: {
        primary: {
          bg: DesignToken;
          text: DesignToken;
          hover: DesignToken;
          active: DesignToken;
          disabled: DesignToken;
        };
        secondary: {
          bg: DesignToken;
          text: DesignToken;
          hover: DesignToken;
          active: DesignToken;
          disabled: DesignToken;
        };
        tertiary: {
          bg: DesignToken;
          text: DesignToken;
          hover: DesignToken;
          active: DesignToken;
        };
        outline: {
          bg: DesignToken;
          text: DesignToken;
          border: DesignToken;
          hover: DesignToken;
        };
        disabled: {
          bg: DesignToken;
          text: DesignToken;
        };
      };
      border: {
        default: DesignToken;
        hover: DesignToken;
        focus: DesignToken;
        disabled: DesignToken;
      };
      color: {
        background: {
          primary: DesignToken;
          secondary: DesignToken;
          tertiary: DesignToken;
        };
        text: {
          primary: DesignToken;
          secondary: DesignToken;
          disabled: DesignToken;
          inverse: DesignToken;
        };
        action: {
          primary: DesignToken;
          "primary-hover": DesignToken;
          "primary-active": DesignToken;
          "primary-disabled": DesignToken;
          secondary: DesignToken;
          "secondary-hover": DesignToken;
          "secondary-active": DesignToken;
          "secondary-disabled": DesignToken;
        };
        border: {
          default: DesignToken;
          hover: DesignToken;
          focus: DesignToken;
          disabled: DesignToken;
        };
      };
    };
  };
};
