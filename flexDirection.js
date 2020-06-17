export default function() {
  return function({ addUtilities, variants }) {
    addUtilities(
      {
        '.flex-row': {
          'flex-direction': 'row',
        },
        '.flex-row-reverse': {
          'flex-direction': 'row-reverse',
        },
        '.flex-column': {
          'flex-direction': 'column',
        },
        '.flex-column-reverse': {
          'flex-direction': 'column-reverse',
        },
      },
      variants('flexDirection')
    )
  }
}
