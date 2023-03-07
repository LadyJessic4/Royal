/**
 * @module ar_app/js/common-i.js
 * @fileoverview Home of the common parts to be injected into the HTML pages of the App.
 * @author Miguel Gastelumendi <mgd@satelier.com.br>
 * @copyright Software Atelier 2022
 * @version 2022.10.06
 */
/* cSpell:locale en pt-br */
//@ts-check

// 'Global' sections
const sections = {};
sections.menu =
  '<nav class="navbar navbar-expand-lg bg-dark ar-icmMenu">' +
  '<div class="container-fluid">' +
  '<a class="navbar-brand fs-2 d-flex ar-icmLogo" href="#">' +
  '<img src="img/argowLogo.png" alt="Logo" width="80" height="30" class="d-inline-block align-text-top">' +
  '</a>' +
  '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenuItems">' +
  '<span>' +
  '<img src="img/bs-i/list.svg">' +
  '</span>' +
  '</button>' +
  '<div class="collapse navbar-collapse justify-content-center" id="navMenuItems">' +
  '<div class="navbar-nav fs-5">' +
  '<a class="nav-link pe-4">' +
  '<div id="ar:btnServidor">' +
  '<input id="ar:saveOnServer" type="button" class="btn btn-warning" value="Salvar">' +
  '<input id="ar:sendToServer" type="button" class="btn btn-success" value="Fechar Apontamento">' +
  '<input id="ar:pingServer" type="button" class="btn btn-info" value="Verificar Servidor">' +
  '</div>' +
  '</a>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</nav>';

sections.modal =
  '<div id="ar:mdlWindow" class="modal fade" tabindex="-1">' +
  '<div class="modal-dialog modal-lg">' +
  '<div class="modal-content">' +
  '<div class="modal-header">' +
  '<h6 class="modal-title">' +
  '<span id="ar:mdlIcon" class="m-2"></span>' +
  '<span id="ar:mdlTitle"></span>' +
  '</h6>' +
  '<button id="ar:mdlClose" type="button" data-bs-dismiss="modal" class="btn-close visually-hidden"></button>' +
  '</div>' +
  '<div id="ar:mdlText" class="modal-body"></div>' +
  '<div id="ar:mdlFooter" class="modal-footer">' +
  '<button id="ar:mdlBtn1" type="button" data-bs-dismiss="modal" class="btn">Ok</button>' +
  '<button id="ar:mdlBtn2" type="button" data-bs-dismiss="modal" class="btn btn-secondary visually-hidden"></button>' +
  '<button id="ar:mdlBtn3" type="button" data-bs-dismiss="modal" class="btn btn-secondary visually-hidden"></button>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>';

// col-6 + col-2 não mexer
sections.banner =
  '<div id="ar:bnrWindow" class="mx-auto mt-4 alert container ar-noTextSel ar-icmBnr">' +
  '<div class="row align-items-center">' +
  '<div id="ar:bnrText" class="text-center col-6"></div>' +
  '<div id="ar:bnrSpin" class="text-center align-middle spinner-border text-info col-2"></div>' +
  '</div>' +
  '</div>';

sections.toast =
  '<div class="toast-container position-fixed bottom-0 end-0 p-3">' +
  '<div id="ar:totWindow" class="toast">' +
  '<div class="toast-header">' +
  '<img src="img/toast.ico" class="rounded me-2" alt="...">' +
  '<strong id="ar:totTitle" class="me-auto"></strong>' +
  '<button id="ar:totClose" type="button" class="btn-close visually-hidden" data-bs-dismiss="toast"></button>' +
  '</div>' +
  '<div id="ar:totText" class="toast-body"></div>' +
  '</div>' +
  '</div>';


sections.hint =
  '<div id="ar:hntWindow" class="alert alert-info p-1 ar-noTextSel ar-icmHint">' +
  '<div id="ar:hntText" class="text-center">Aguarde...</div>' +
  '</div>';

sections.incog =
  '<div class="ar-icmIncog progress">' +
  '<div id="ar:bnrIncog" class="progress-bar progress-bar-striped progress-bar-animated bg-warning visually-hidden" style="height: 100%"></div>' +
  '</div>';

/**
 * @typedef {Object<string, string|number>} IcVariables
 */

/**
 * Replaces keys for values
 * @param {string} sHtml
 * @param {IcVariables?} dicVar
 */
const icReplace = (sHtml, dicVar) => {
  if (dicVar == null) {
    return sHtml;
  }
  // TODO
  return sHtml;
};

/**
 * Injects an array of sections as child nodes to the target element (whose ID is sIdTarget)
 * after replacing variables from the dictionary.
 * @param {string} sIdTarget
 * @param {Array<string>} aSections
 * @param {IcVariables?} dicVar
 */
const injectCommon = (sIdTarget, aSections, dicVar) => {
  const tagById = (/** @type{string} */ sId) => document.getElementById(sId);
  // TODO: create an hidden div with to keep track of the injected sections
  const tagGlobalTarget = document.body;
  let tagDefaultTarget = (sIdTarget == null || ("" + sIdTarget).trim() == "") ? null : tagById(sIdTarget);
  if (tagDefaultTarget == null) {
    tagDefaultTarget = tagGlobalTarget;
  }
  // Compatibility aSections.forEach((item) => {
  for (let i = 0; i < aSections.length; i++) {
    const item = aSections[i];

    // an item is:  sectionKey || sectionKey>target
    const aKeyAndTarget = ("" + item).split(">");
    const sKey = aKeyAndTarget[0].trim();
    const sTarget = aKeyAndTarget.length > 1 ? aKeyAndTarget[1].trim() : "";
    let tagTmp;
    const tagTarget = /** @type {HTMLElement} */ (
      ((sTarget == "") || (null == (tagTmp = tagById(sTarget)))) ? tagDefaultTarget : tagTmp
    );
    if ((tagTarget != null) && (Object.keys(sections).find(s => s == sKey))) {
      const tag = document.createElement("div");
      const sHtml = icReplace(sections[sKey], dicVar);
      tag.innerHTML = sHtml;
      tagTarget.appendChild(tag);
    }
  }; //}
};

/**
 * Reads the configuration from an attribute of the element (whose ID is sIdConfig)
 * and injects it into the element sIdTarget.
 * @param {string} sIdTarget
 * @param {string} sIdConfig
 * @param {string} sAttribSec
 * @param {string} sAttribVar
 */
const injectCommonFromTag = (sIdTarget, sIdConfig, sAttribSec, sAttribVar) => {
  const tagConfig = document.getElementById(sIdConfig);
  if (tagConfig == null) {
    return;
  }
  const sSections = tagConfig.getAttribute(sAttribSec);
  let aSections = [];
  if (sSections == null) {
    return;
  } else if (sSections == "*") {
    // inject all global `sections` // TODO: check:
    //Compatibility Object.keys(sections).forEach((s) => aSections.push(s));
    for (let i = 0; i < Object.keys(sections).length; i++) { aSections.push(sections[i]) }
  } else {
    aSections = sSections
      .split(",")
      .map(e => e.trim())
      .filter(e => e != "");
  }
  const dicVar = /** @type {IcVariables} */ ({});
  injectCommon(sIdTarget, aSections, dicVar);
};

//-----------------------
/**
 * » ID of an element that have the configuration attributes.
 * » It's usually the same as the script (see below for an example).
 */
const icIdConfig = "ar:ic-config";

/**
 * » Configuration attribute: `Target`.
 * » Default target element's id, optional.
 */
const icIdTarget = "ar:ic-target";

/**
 * » Configuration attribute: `Sections`.
 * » A list of sections (separate by ,) to inject.
 * » If the attribute's value is '*' or no attribute at all, then
 *   all sections are injected.
 * » A section is one of the string properties of the class `sections`.
 *   See above (fist code line) `const sections = {};`
 * » Optionally, each item can be follow by a gt (>) and a target's id.
 * » If no '> target id' is specified, the default 'Target'
 *   (see attribute `Target`) will be used.
 * » If there is no default 'Target' or only the gt (>) is used, the target
 *    will be `body`.
 */
const icAttribSections = "data-ar:ic-sec";

/**
 * » Configuration attribute: `Dictionary`.
 * » A dictionary<key, value> to replace variables in the HTML code
 * » not implemented
 */
const icAttribDictionary = "data-ar:ic-dic";

{
  injectCommonFromTag(
    icIdTarget,
    icIdConfig,
    icAttribSections,
    icAttribDictionary
  );
}
//eof
