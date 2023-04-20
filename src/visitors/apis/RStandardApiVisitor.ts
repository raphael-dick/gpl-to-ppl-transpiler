import StandardApi from "../../interfaces/apis/StandardApi";
import ApiVisitor from "../../interfaces/ApiVisitor";

export default class RStandardApiVisitor extends ApiVisitor {

  private target: StandardApi;

  constructor(target: StandardApi) {
    super();
    this.target = target
  }

  lookup = (expression: string, args: string[]) => {
    switch (expression) {
      case 'print':
        return this.target.handlePrint(args[0]);
      default:
        return undefined;
    }
  };

}