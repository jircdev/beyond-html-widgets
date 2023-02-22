import type * as React from "react";
import type { HtmlWidgetController } from "./controller";

/**
 *
 */
export class Wrapper {
    #Widget: HtmlWidgetController;
    get Widget(): HtmlWidgetController<any> {
        return this.#Widget.Widget;
    }

    // Property changed should be overwritten to get notified about HMR changes
    changed = (): void => void 0;

    constructor(Widget: HtmlWidgetController) {
        this.#Widget = Widget;
    }
}
