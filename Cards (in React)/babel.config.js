const plugins = [];
if(process.env.NODE_ENV === 'development') {
  plugins.push('react-refresch/babel')
}// React hot reloading необходим только в режиме разработки

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],// Добавляем в babel
  // пресет для работы с React
  plugins,
}