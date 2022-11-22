module.exports = {
  'globDirectory': 'src/public/',
  'globPatterns': [
    '**/*.{css, png, jpg, js}',
  ],
  'swDest': 'src/public/sw.js',
  'swSrc': 'src/workbox.js',
  modifyURLPrefix: {
    'css': '/css',
    'fonts':'/fonts',
    'images':'/images',
    'js':'/js'
  }
}