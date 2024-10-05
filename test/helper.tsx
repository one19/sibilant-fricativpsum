import React from 'react';
import { MemoryRouter } from 'react-router';
import {
  render as testRender,
  screen as testScreen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';
import { ThemeProvider } from 'styled-components';

declare const global: {
  React: typeof React,
};
global.React = React;

type WrapperProps = {
  children: React.ReactNode,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  graphqlMocks?: any[],
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const render = (element: React.ReactNode, graphqlMocks?: any[]) =>
  testRender(element, {
    wrapper: (props) => (
      <WrappingComponent graphqlMocks={graphqlMocks} {...props} />
    ),
  });
export const screen = testScreen;
