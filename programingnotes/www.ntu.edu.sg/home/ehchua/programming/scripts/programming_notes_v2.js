/*
 * Programming notes JavaScript
 * @version: 2
 * @Created: 29 May 2015
 * @author:  Chua Hock Chuan
 * 
 * Revision Notes:
 * 1. use jquery??
 */
$( function() {
   /*
    * Load Header onto <div id="header"></div>
    */
   $("#header").html('<p>yet another insignificant programming notes... &nbsp;&nbsp;| &nbsp;&nbsp;<a href="../index.html">HOME</a></p>');
   
   /*
    * Load Footer onto <div id="footer"></div>
    */
   $("#footer").html('<p>Feedback, comments, corrections, and errata can be sent to Chua Hock-Chuan (ehchua@ntu.edu.sg) &nbsp;&nbsp;|&nbsp;&nbsp; <a href="../index.html">HOME</a></p>');
   
   /*
    * Generate Table of Content onto <div id="toc"></div>
    */
   generateTOC();

   /*
    * Toggle TOC display via via <a id="show-toc">(Hide)</a>
    */
   $("#show-toc").on('click', function(event) {
      event.preventDefault();
      $("#toc").toggle();
      if ($(this).text() === '(Hide)') {
         $(this).text('(Show)');
      } else {
         $(this).text('(Hide)');
      }
   });
   
   /*
    * Load source files onto
    * <div data-myinclude="src.html"></div>
    */
   $('div[data-myinclude]').each( function() {
      var $elm = $(this);
      var url = $elm.attr('data-myinclude');  // get file url
      $.ajax({
         type:     'GET',
         url:       url,
         dataType: 'text'
      })
         .done( function (responseText) { // Triggered if response status code is 200 (OK)
            /*
             * Apply styles
             */ 
            $elm.html(markupSource(responseText, url));
            
            /*
             * "SELECT" text for copy
             */
            $('div[data-myinclude]').on('click', ':button', function(event) {
               // event.delegateTarget is the div
               // pre:eq(1) is the 2nd <pre>
               var elm = $(event.delegateTarget).find('pre:eq(1)')[0];
               var range, selection;
               if (document.body.createTextRange) {
                  range = document.body.createTextRange();
                  range.moveToElementText(elm);
                  range.select();
               } else if (window.getSelection) {
                  selection = window.getSelection();        
                  range = document.createRange();
                  range.selectNodeContents(elm);
                  selection.removeAllRanges();
                  selection.addRange(range);
               }
               $(this).val('Ctrl-C to COPY');
            });

         })
         .fail( function (jqXHR, status, error) { // Triggered if response status code is NOT 200 (OK)
            $elm.html('<pre class="error">' + url + ': ' + error + '</pre>');
         });
   });
   
});


/*
 * Generate TOC based on <h3> and <h4>:
 * - prepend section number "x." or "x.y"
 * - append an anchor point <a id="zz-x.y"></a> to the header
 * - add an entry with link to <div id="toc">
 *   <a class='toc-h3|h4' href='#zz-x.y'>heading text</a><br>"
 */
var ANCHOR_PREFIX = "zz-";
var SECTION_HEADER = "h3";
var SUB_SECTION_HEADER = "h4";

function generateTOC() {
   var currentSection    = 0;  // current section number counter
   var currentSubSection = 0;  // current sub-section number counter
   var headingID;
   var headingText;
   
   // Process the sections and sub-sections
   $(SECTION_HEADER + ',' + SUB_SECTION_HEADER).each( function() {

      if ($(this).prop("tagName").toLowerCase() === SECTION_HEADER.toLowerCase() ) {
         // Process sections
         ++currentSection;
         currentSubSection = 0; // reset sub-section number

         // Add section number
         $(this).prepend(currentSection + ".&nbsp;&nbsp;");
         // Add anchor point
         var headingID = ANCHOR_PREFIX + currentSection;
         var headingText = $(this).html();
         $(this).append('<a id="' + headingID + '"></a>');
         // Append to TOC
         $('#toc').append("<a class='toc-" + SECTION_HEADER 
               + "' href='#" + headingID + "'>" + headingText + "</a><br>");
         
      } else {
         // Process sub-sections
         ++currentSubSection;
         
         // Add section.sub-section number
         $(this).prepend(currentSection + "." + currentSubSection + "&nbsp;&nbsp;");
         // Add anchor point
         var headingID = ANCHOR_PREFIX + currentSection + "." + currentSubSection;
         var headingText = $(this).html();
         $(this).append('<a id="' + headingID + '"></a>');
         // Append to TOC
         $('#toc').append("<a class='toc-" + SUB_SECTION_HEADER 
               + "' href='#" + headingID + "'>" + headingText + "</a><br>");
      }
   });
   $('#toc').append('<br>');
}


/*
 * Markup the sourceStr with styles
 * To consider an optional parameter type="html|java|js" for syntax highlighting
 */
function markupSource(sourceStr, url) {
   var filename = url.substring(url.indexOf('\/') + 1);
   
   var result = '';
   
   sourceStr = sourceStr.trim();  // remove leading/trailing whitespaces and newlines
   numLines = sourceStr.match(/\n/g).length + 1;
   
   result += '<table class="table-program">\n';
   result += '<col class="col-line-number">\n'; 
   result += '<col class="col-program">\n';
   
   // Add a copy button in the table header
   result += '<thead>\n'; 
   result += '<tr>\n';
   result += '<th colspan="2" class="code">\n';
   result += filename + '&nbsp;&nbsp;<input type="button" value="SELECT">\n';
   result += '</th>\n';
   result += '</tr>\n';
   result += '</thead>\n'; 
   
   // Table body
   result += '<tbody>\n'; 
   result += '<tr>\n';
   
   // print line numbers
   result += '<td>\n';
   result += '<pre class="text-right">'; 
   for (var line = 1; line <= numLines; ++line) {
      result += '\n' + line;
   }
   result += '</pre>\n';
   result += '</td>\n';
   
   // print source codes
   result += '<td>\n';
   result += '<pre>\n';
   
   // Replace tab with 3 spaces
   sourceStr = sourceStr.replace(/\t/g, '   ');

   // Encode HTML &<>" with entity references
   // The order of substitution is important!
   sourceStr = sourceStr.replace(/&/g, '&amp;');  // Substitute & first
   sourceStr = sourceStr.replace(/</g, '&lt;');   // Substitute <
   sourceStr = sourceStr.replace(/>/g, '&gt;');   // Substitute >
   sourceStr = sourceStr.replace(/"/g, '&quot;'); // Substitute "

   // Mark highlight texts - do this before the comment
   // /* highlight-begin */ ...  /* highlight-end */
   // <!-- highlight-begin --> ...  <!-- highlight-end -->
   // with optional newline
   sourceStr = sourceStr.replace(/\/\* highlight-begin \*\//g, '<span class="highlight">');
   sourceStr = sourceStr.replace(/\/\* highlight-end \*\//g, '</span>');
   sourceStr = sourceStr.replace(/&lt;!-- highlight-begin --&gt;/g, '<span class="highlight">');
   sourceStr = sourceStr.replace(/&lt;!-- highlight-end --&gt;/g, '</span>');
   
   // Apply style to single-line comment //
   // ? to curb greediness, optional \r
   sourceStr = sourceStr.replace(/(\/\/.*?\r?\n)/g, '<span class="comment">$1</span>');
   
   // Apply style to HTML multi-line comment <!-- -->
   sourceStr = sourceStr.replace(/(&lt;!--(.|[\r\n])*?--&gt;)/g, '<span class="comment">$1</span>');
   
   // Apply style to multi-line comment /* */
   // dot does not match newline
   sourceStr = sourceStr.replace(/(\/\*(.|[\r\n])*?\*\/)/g, '<span class="comment">$1</span>');
   
   result += sourceStr;
   
   result += '</pre>\n';
   result += '</td>\n';
   result += '</tbody>\n'; 
   result += '</table>\n'; 
   
   return result;
}
