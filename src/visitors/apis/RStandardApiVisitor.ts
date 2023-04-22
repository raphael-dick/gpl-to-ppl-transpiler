import StandardApi from "../../interfaces/apis/StandardApi";
import ApiVisitor from "../../interfaces/ApiVisitor";

export default class RStandardApiVisitor extends ApiVisitor {

  /** the generator used for generating the output api code */
  private target: StandardApi;

  /**
   * Setup the ApiVisitor
   * 
   * @param target the generator used for generating the output api code
   */
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