import { Component, ComponentInterface, Prop, h } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.css',
  shadow: true,
})
export class ButtonComponent implements ComponentInterface {
  @Prop() onClick: void;

  @Prop() link: string;

  @Prop() loading: boolean;
  
  @Prop() disabled: boolean;

  @Prop() variant: string = "primary";

  render() {
    return (
      <div class={this.variant + " btn-container"}>
        <a class="btn-a" href={this.link}>
          <div class="btn-comp">
            <div class="text">
              <slot></slot>
            </div>
          </div>
        </a>
      </div>
    );
  }

}
