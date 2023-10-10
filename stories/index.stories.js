import React, { Component } from 'react';
import { within, userEvent } from '@storybook/testing-library';

import { action } from '@storybook/addon-actions';

import { MapInteractionCSS } from '../src';
import gridImg from './grid.png';

const BLUE_BORDER = '1px solid blue';

export default {
  title: 'MapInteractionCSS',
};

export const BasicUncontrolled = () => {
  return (
    <div style={{ width: 500, height: 500, border: BLUE_BORDER }}>
      <MapInteractionCSS>
        <img src={gridImg} style={{ pointerEvents: 'none' }} alt="" />
      </MapInteractionCSS>
    </div>
  );
};

BasicUncontrolled.story = {
  name: 'Basic uncontrolled',
};

export const BasicControlled = () => {
  class Controller extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: {
          scale: 1,
          translation: { x: 0, y: 0 },
        },
      };
    }

    render() {
      return (
        <div style={{ width: 500, height: 500, border: BLUE_BORDER }}>
          <MapInteractionCSS
            value={this.state.value}
            onChange={(value) => {
              this.setState({ value });
            }}
            showControls
          >
            <img src={gridImg} style={{ pointerEvents: 'none' }} alt="" />
          </MapInteractionCSS>
        </div>
      );
    }
  }

  return <Controller />;
};

BasicControlled.story = {
  name: 'Basic controlled',
};

export const FlipControlledToUncontrolled = () => {
  class Controller extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: {
          scale: 1,
          translation: { x: 0, y: 0 },
        },
        controlled: true,
      };
    }

    render() {
      const { controlled, scale, translation } = this.state;

      return (
        <div style={{ width: 500, height: 500, border: BLUE_BORDER }}>
          <MapInteractionCSS
            value={controlled ? this.state.value : undefined}
            onChange={controlled ? (value) => this.setState({ value }) : undefined}
            showControls
          >
            <img src={gridImg} style={{ pointerEvents: 'none' }} alt="" />
          </MapInteractionCSS>
          <button
            onClick={() => {
              this.setState((state) => {
                return { controlled: !state.controlled };
              });
            }}
          >
            flip
          </button>
        </div>
      );
    }
  }

  return <Controller />;
};

FlipControlledToUncontrolled.story = {
  name: 'Flip controlled to uncontrolled',
};

export const ButtonInside = () => {
  return (
    <div style={{ width: 500, height: 500, border: BLUE_BORDER }}>
      <MapInteractionCSS>
        <button
          onClick={(e) => {
            if (e.defaultPrevented) {
              action('Drag!')();
            } else {
              action('Click!')();
            }
          }}
          onTouchEnd={(e) => {
            if (e.defaultPrevented) {
              action('Drag!')();
            } else {
              action('Click!')();
            }
          }}
        >
          click me
        </button>
      </MapInteractionCSS>
    </div>
  );
};

ButtonInside.story = {
  name: 'Button inside',
};

export const _2OnScreen = () => {
  return (
    <div>
      <div style={{ width: 500, height: 500, border: BLUE_BORDER }}>
        <MapInteractionCSS>
          <button onClick={action('click 1')}>click me</button>
        </MapInteractionCSS>
      </div>
      <br />
      <div style={{ width: 500, height: 500, border: BLUE_BORDER }}>
        <MapInteractionCSS>
          <button onClick={action('click 2')}>click me</button>
        </MapInteractionCSS>
      </div>
    </div>
  );
};

_2OnScreen.story = {
  name: '2 on screen',
};

export const ClickElementOutside = () => {
  return (
    <div>
      <div style={{ width: 500, height: 500, border: BLUE_BORDER }}>
        <MapInteractionCSS>
          <img src={gridImg} style={{ pointerEvents: 'none' }} alt="" />
        </MapInteractionCSS>
      </div>
      <br />
      <button onClick={action('click')}>click me</button>
    </div>
  );
};

ClickElementOutside.story = {
  name: 'Click element outside',
};

export const TextInputOutside = () => {
  return (
    <div>
      <div style={{ width: 500, height: 500, border: BLUE_BORDER }}>
        <MapInteractionCSS>
          <img src={gridImg} style={{ pointerEvents: 'none' }} alt="" />
        </MapInteractionCSS>
      </div>
      <br />
      <input type="text" onChange={action('onChange')} />
    </div>
  );
};

TextInputOutside.story = {
  name: 'Text input outside',
};

export const Controls = () => {
  return (
    <div style={{ width: 500, height: 500, border: BLUE_BORDER }}>
      <MapInteractionCSS showControls>
        <img src={gridImg} style={{ pointerEvents: 'none' }} alt="" />
      </MapInteractionCSS>
    </div>
  );
};
