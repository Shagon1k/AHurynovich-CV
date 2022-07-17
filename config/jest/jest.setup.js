import React from 'react';
import PropTypes from 'prop-types';

// Application automatically loaded modules (using Webpack Provide Plugin) should be injected globally in test scopes
window.React = React;
window.PropTypes = PropTypes;
