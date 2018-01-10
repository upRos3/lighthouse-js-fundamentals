/* /abc/  A sequence of characters
/[abc]/ Any character from a set of characters
/[^abc]/  Any character not in a set of characters
/[0-9]/ Any character in a range of characters
/x+/  One or more occurrences of the pattern x
/x+?/ One or more occurrences, nongreedy
/x* /  Zero or more occurrences
/x?/  Zero or one occurrence
/x{2,4}/  Between two and four occurrences
/(abc)/ A group
/a|b|c/ Any one of several patterns
/\d/  Any digit character
/\w/  An alphanumeric character (“word character”)
/\s/  Any whitespace character
/./ Any character except newlines
/\b/  A word boundary
/^/ Start of input
/$/ End of input */



/* For each of the following items, write a regular expression to test whether any of the given
substrings occur in a string. The regular expression should match only strings containing one
of the substrings described. Do not worry about word boundaries unless explicitly mentioned.
When your expression works, see whether you can make it any smaller.

1) car and cat

2) pop and prop

3) ferret, ferry, and ferrari

4) Any word ending in ious

5) A whitespace character followed by a dot, comma, colon, or semicolon

6) A word longer than six letters

7) A word without the letter e

*/

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}

// Fill in the regular expressions

verify(/ca[rt]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s[.,:;]/,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/\w{7}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/\b[^e\W]+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);


