exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    fontSize: 14,
    fontFamily: '"Source Code Pro", monospace',
    cursorColor: '#f18260',
    foregroundColor: '#dddddd',
    backgroundColor: '#282828',
    borderColor: '#282828',
    padding: '15px',
    windowSize: [800, 600],
    colors: {
      black: '#232323',
      red: '#c42d29',
      green: '#b4d388',
      yellow: '#ffd949',
      blue: '#92bfbf',
      magenta: '#f18260',
      cyan: '#92bfbf',
      white: '#eeeeee',
      lightBlack: '#797979',
      lightRed: '#ff2606',
      lightGreen: '#cdefa5',
      lightYellow: '#ede480',
      lightBlue: '#b2eeef',
      lightMagenta: '#f49d62',
      lightCyan: '#b2eeef',
      lightWhite: '#ffffff'
    },
    css: `
      ${config.css || ''}
      .tab_tab:not(.tab_active) { background-color: #1F1F1F !important; }
      .tab_active:before { display: none !important }
    `
  });
}
