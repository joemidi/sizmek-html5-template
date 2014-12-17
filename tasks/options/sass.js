module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'source/css/styles.css': 'source/css/scss/styles.scss'
    }
  }
}