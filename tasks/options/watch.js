module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['source/js/*.js'],
    tasks: ['jshint', 'uglify'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['source/css/scss/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    }
  },
  images: {
    files: ['source/images/**/*.{png,jpg,gif}', 'source/images/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: {
      spawn: false,
    }
  },
  html:{
    files: ['./**/*.html'],
    tasks: [],
    options: {
      spawn: false
    }
  }
}