// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
    if (x>y) {
      return x;
    } else if (y>x){
      return y;
    } else {
      return "they are equal!";
    }
}
console.assert(max(5,8)===8,'max function');
console.assert(max(9,3)===9,'max function');
console.assert(max(7,7)==='they are equal!','max function');
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
    if (x>y && x>z) {
      return x;
    } else if (y>x && y>z) {
      return y;
    } else if (z>x && z>y) {
      return z;
    } else if (x===z || x===y || y===z) {
      return "Sorry, two max numbers are equal!";
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if (char==='a' || char==='e' || char==='i' || char==='o' || char==='u') {
      return true;
    } else if (char==='y') {
      return "maybe true!";
    } else {
      return false;
    }
}
console.assert(isVowel('e'),'isVowel function');
console.assert(isVowel('t')===false,'isVowel function');
console.assert(isVowel('y')==='maybe true!','isVowel function');
// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function translate(phrase){
    var holder = phrase.split('');
    var count = 0;
    for(i=0; i<phrase.length; i++) {
      if (phrase[i]!='a' && phrase[i]!='e' && phrase[i]!='i' && phrase[i]!='o' && phrase[i]!='u' && phrase[i]!='y' && phrase[i]!=' ' && phrase[i]!='.') {
        holder[i]=holder[i] + 'o' + holder[i];
      }
    }
    holder = (holder.toString());
    count = holder.length;
     for(i=0; i<count; i++) {
       if (holder[i]===','){
         holder = holder.replace(',','');
       }
    }
    return holder;
}
console.assert(translate('help me')==='hohelolpop mome', 'translate function');
console.assert(translate('please send money to help')==='poploleasose sosenondod momononey toto hohelolpop', 'translate function');

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
    var strLength = phrase.length;
    var holder = [''];
    for(i=1; i<=strLength; i++) {
      holder[(i-1)] = phrase.charAt(strLength-i);
    }
    holder = (holder.toString());
    count = holder.length;
     for(i=0; i<count; i++) {
       if (holder[i]===','){
         holder = holder.replace(',','');
       }
    }
    return holder;
}

console.assert(reverse('help me')==='em pleh', 'reverse function');
console.assert(reverse('if you do what I say I will be nice')==='ecin eb lliw I yas I tahw od uoy fi','reverse function');
