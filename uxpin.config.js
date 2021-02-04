module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/BorderButton/BorderButton.js',
          'src/components/UserAttendeeComponent/UserAttendeeComponent.js',
          'src/components/AspectElevationRoseInput/AspectElevationRoseInput.js'
        ]
      }
    ],
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Duck Labs'
};
