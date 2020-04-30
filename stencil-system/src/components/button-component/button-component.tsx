import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.css',
  shadow: true,
})
export class ButtonComponent implements ComponentInterface {

  render() {
    return (
      <div class="btn-comp">
        <span>
          <slot></slot>
        </span>
      </div>
    );
  }

}
