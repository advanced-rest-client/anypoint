import { svg } from 'lit-element';
/* eslint-disable max-len */

const iconWrapper = (tpl) => svg`<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">${tpl}</svg>`;

export const exchange = iconWrapper(svg`<path d="M24 13c0 2.497-.832 4.799-2.234 6.645-.607.8-1.321 1.514-2.121 2.121l-5.231-5.231 2.122-2.121 4.158 4.159C21.83 17.007 22.5 15.082 22.5 13s-.67-4.007-1.806-5.573L6.355 21.766c-.8-.607-1.514-1.321-2.121-2.121C2.832 17.799 2 15.497 2 13s.832-4.799 2.234-6.645c.607-.8 1.321-1.514 2.121-2.121l5.231 5.23-2.121 2.122-4.159-4.159C4.17 8.993 3.5 10.918 3.5 13s.67 4.007 1.806 5.573L19.645 4.234c.8.607 1.514 1.321 2.121 2.121C23.168 8.201 24 10.503 24 13z"></path>`);
