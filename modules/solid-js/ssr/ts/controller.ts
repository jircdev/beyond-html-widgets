import { PageReactWidgetController } from "@beyond-js/react-18-widgets/page";
import { HtmlWidgetController } from "html-widgets/base";
import { Page } from "./views";

console.log(10, HtmlWidgetController);
export /*bundle*/
class Controller extends HtmlWidgetController {
    get Widget() {
        return Page;
    }
}
