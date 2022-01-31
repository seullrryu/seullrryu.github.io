module.exports = {
  purge: [],
  theme: {
    fontSize: {
      'sm': ['14px', '20px'],
      'base': ['18px', '30px'],
      'lg': ['24px', '32px'],
      'xl': ['28px', '36px'],
      '2xl': ['32px', '40px'],
      '3xl': ['36px', '44px'],
      '4xl': ['44px', '56px'],
    },
    extend: {
      fontFamily: {
        sans: ["Lato", "Roboto", "Arial"],
      }
    },
    screens: {
      'sm': '640px',
      'md': '950px',
      'lg': '1280px',
      'xl': '1440px'
    }
  },
  variants: {
    display: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
  corePlugins: {
    listStyleType: false,
  }
}
