<!-- /* cSpell:ignore typeof  -->
# — Argow's JS Module's _Cheat sheet_ —


# Style Guide
   ## JavaScript
   * Variables & Constants: use simplified [Hungarian Notation](https://en.wikipedia.org/wiki/Hungarian_notation)
         iNT, nUMBER, dATE, bOOLEAN, sTRING, oOBJECT, arGOW-OBJECT;
   * Strive to use Argow functions;
   * Keep *.mjs files under 201 lines;
   * Use only simple quotes ```'``` (double are for HTML);
   * See w3School for [conventions](https://www.w3schools.com/js/js_conventions.asp) and  [practices](https://www.w3schools.com/js/js_conventions.asp);

   ## HTML
   * Attributes order: start with ```id="ar:xyzName"``` then  ```class= "..., ar-xyzName, ..." ```;
   * Class Name: prepend ```ar-``` (to avoid class name collision), continue with 3 letter (to group elements) and end with ID if any, or a name;
   * ID specification: prepend ```ar:``` (to avoid using ID as a variable) and continue in a similar to class.
   * To refer to the element by its ID in a css file, use ```ar\:xyzName```;
   * Use only double quotes ```"``` (simple are for js);


# md
[How to format](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) this **md** file.


# @ts

Type Checking JavaScript Files:
[Check my js](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html).

### Examples

  ```js
   /* file check, before any code: */
   // @ts-check

   /* skip this file from checking: */
   // @ts-nocheck

   /* before a line to ignore an 'error': */
   // @ts-ignore _must explain why_

   /* use it when a variable may not be declared, but I'm sure it's ok */ */
   // @ts-expect-error
   if (typeof appConfig === UNDEFINED) { ... }
   ```

# JSDoc

* To document JavaScript use the [subset of JSDoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) defined by TypeScript;

* [Full documentation](https://jsdoc.app/)


### Examples
   ```js
   /* import datatype:
    * @param {import("./DefaultTag.mjs").ArUiTag} arTag
    * :
    * :

   // Enumerators: (@module ar_ui/baseDataType.mjs)
   /**
   * Argow's Base Data Type
   * @enum {string}
   */
   export const baseDataType = {
      STRING: 'dtString',
      :
      :
   }

   /**
    * Property Modifiers
    *  @public
    *  @private
    *  @protected
    *  @readonly
    *
    *  @deprecated
    */

   /**
    * @typedef {Object} ApiTable
    * @property {string} alias an app name to simplify use.
    * @property {Array<string>} lookup
    * @property {string} filter
    * :
    */

   /**
    * Function
    *  @type {(s: string, b: boolean) => number} TypeScript syntax
    *  @type {function(string, boolean): number} Closure syntax
    *  @type {function|Function}
    */

   /**
    * Display a text
    *
    * @async
    * @callback fDisplayModal
    * @param {string} sText
    * @param {string=} sTitle= app.title
    * @param {import("./spear-display=generic.mjs").DisplayOptions=} oOptions see #defOptions
    * @returns {Promise<string>}
    */
   ```

# Spell Checker
Use the [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) extension,
setting it at the begin of each file (just below `// @ts-check`), optionally with same 'local valid' words (for the file)

   ```js
   /*
      cSpell:locale en,pt-br
      cSpell:ignore atts, dicty, cmpt
   */
   ```


`eof`