module.exports = {
  content: [
    './*.html'
  ],
  theme: {
    container: {
      padding: '1.4rem'
    },
    extend: {
      fontFamily: {
        'sans': "'Work Sans', sans-serif",
        'cascadia': "'CascadiaCode'"
      },
      colors: {
        'do-blue-dark': '#080c2d',
        'do-blue-medium-dark': '#1d274c',
        'do-blue-light': 'rgb(20,86,255)',
        'do-blue-medium': 'rgb(0,105,255)'
      },
      boxShadow: {
        'input': '0 4px 1px 0 rgba(0, 0 ,0 ,0.1)',
        'input-focus': '0 2px 1px 0 rgba(0, 0 ,0 ,0.1)'
      }
    },
  },
  plugins: [],
}
