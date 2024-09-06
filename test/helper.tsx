import React from 'react';
import { MemoryRouter } from 'react-router';
import {
  render as testRender,
  screen as testScreen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider } from '@apollo/client/testing';
import { ThemeProvider } from 'styled-components';

declare const global: {
  React: any;
};
global.React = React;

type WrapperProps = {
  children: any;
  graphqlMocks?: any[];
};

export const WrappingComponent: React.FC<WrapperProps> = ({
  children,
  graphqlMocks = [],
}) => (
  <ThemeProvider theme={{ color: {}, spacing: {}, breaks: {} }}>
    <MemoryRouter>
      <MockedProvider mocks={graphqlMocks}>{children}</MockedProvider>
    </MemoryRouter>
  </ThemeProvider>
);

export const render = (element: any, graphqlMocks?: any[]) =>
  testRender(element, {
    wrapper: (props) => (
      <WrappingComponent graphqlMocks={graphqlMocks} {...props} />
    ),
  });
export const screen = testScreen;
