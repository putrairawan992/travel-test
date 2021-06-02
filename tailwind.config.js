module.exports = {
  theme: {
    fontFamily: {
      sans: ["Quicksand", "sans-serif"]
    },
    extend: {
      fontSize: {
        "15": "0.9375rem"
      },
      colors: {
        "main": "#061a3a",
        "main-02": "#211e3b",
        "primary": "#ff7c5b",
        "gray": "#555",
        "gray-01": "#404040",
        "blue": "#f1f8ff"
      },
      backgroundImage: {},
      boxShadow: {
        "card": "0px 15px 25px 0px rgba(0,0,0, 0.05)"
      },
      maxWidth: {},
      spacing: {},
      borderRadius: {},
      opacity: {},
      borderWidth: {}
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    }
  },
  purge: {
    content: ["./src/**/*.js", "./src/**/*.jsx"],
    options: {
      safelist: ['w-1/12','w-2/12','w-3/12','w-4/12','w-5/12','w-6/12','w-7/12','w-8/12','w-9/12','w-10/12','w-11/12','md:w-1/12','md:w-2/12','md:w-3/12','md:w-4/12','md:w-5/12','md:w-6/12','md:w-7/12','md:w-8/12','md:w-9/12','md:w-10/12','md:w-11/12']
    },
  },
  plugins: [],
};
