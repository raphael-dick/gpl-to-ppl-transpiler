import ApiHandler from './Api'

/**
 * Defines the functionality of the languages Standard API
 */
export default abstract class StandardApi extends ApiHandler {
  /**
   * Handles a console output
   * @param items the text contents of the print statement
   */
  abstract handlePrint: (items: string[]) => string

  /**
   * Handles a range definition
   * @param from the start of the range
   * @param to the end of the range
   */
  abstract handleRange: (from: string, to: string) => string

  /**
   * Adds a minimum length to a string and fills the remaining space with the given filler
   * @param target the target string
   * @param minLength the minimum string length
   * @param filler the item to fill the remaining spaces
   */
  abstract handleStringPadding: (target: string, minLength: string, filler: string) => string

  /**
   * Returns the length of an array
   * @param target the array
   */
  abstract handleArrayLength: (target: string) => string

  /**
   * List Constructor
   * @param items the lists items
   */
  abstract handleList: (items?: string[]) => string

  /**
   * Creates a new Dictonary
   * @param items the lists items
   */
  abstract handelDictionary: (items?: Record<string, string>) => string

  /**
   * Integer type cast
   * @param content the content to be cast
   */
  abstract handleTypeCastInt: (content: string) => string

  /**
   * Repeat contents
   * @param content the content which is repeated
   * @param count how often it should be repeated
   */
  abstract handleRepeat: (content: string, count: string) => string

  /**
   * Return the current process time
   */
  abstract handleProcessTime: () => string

  /**
   * Adds the values of two keys in a given dictionary
   * @param dict the dictionary
   * @param key1 first key
   * @param key2 second key
   */
  abstract handleAdditionInDictiornary: (dict: string, key1: string, key2: string) => string

  /**
   * Merges the data from one dictionary into the other
   * @param target the dictionary where the data will be merged to
   * @param source the dictonary which the data will be merged from
   */
  abstract handleMergeDictionaries: (target: string, source: string) => string

  /**
   * Dictionary to List
   * @param dict the dictionary
   */
  abstract handleConvertDictionaryToList: (dict: string) => string

  /**
   * Concatinate list of strings
   * @param strings list of strings to be concatinated
   */
  abstract handleConcatinateStrings: (strings: string[]) => string
}
