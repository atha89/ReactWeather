var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is my first React application.</p>
      <p>We are using the <a href="http://www.openweathermap.org" target="blank">Open Weather Map API</a>.</p>
    </div>
  )
};

module.exports = About;
