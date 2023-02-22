import { WidgetClientController } from "@beyond-js/widgets/controller";
import { WidgetServerController, IWidgetRendered } from "@beyond-js/widgets/controller";
import { module } from "beyond_context";
import { Wrapper } from "./wrapper";

export /*bundle*/
abstract class HtmlWidgetController extends WidgetServerController {
    render(props: Record<string, any>): IWidgetRendered {
        if (!this.Widget) {
            return { errors: [`Widget "${this.element}" does not export a Widget class`] };
        }

        try {
            const p = { Widget: this.Widget, styles: this.styles, props };
            //beyond_context.module.dirname;
            console.log(module.dirname);
            return { html: "hola mundo" };
        } catch (exc) {
            console.error(exc.stack);
            return { errors: [exc.message] };
        }
    }
}
