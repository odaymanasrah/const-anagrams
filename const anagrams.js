const anagrams = [
    "oz bilal tochberer",  
    "it's razorbill beachcomber", 
    "och robe tilblazer", 
    "bib chorizo cellarmaster", 
    "thor bble carizole", 
    "zll borcht aberoie", 
    "brzl orche atobile", 
    "dame shelburne characterizing", 
    "uber englishman characterized", 
    "agnes rhumbline characterized", 
    "rehab scrutinized charlemagne", 
    "dreams zurich interchangeable", 
    "bam hamster technocratic", 
    "mechatronic masterbatch", 
    "bam ratchet mechatronics"
  ];
  
  function sortString(str) {
    return str.toLowerCase().replace(/\s/g, '').split('').sort().join('');
  }
  
  function isAnagramInArray(phrase, arr) {
    const sortedPhrase = sortString(phrase);
    const matchingAnagrams = [];
  
    for (const anagram of arr) {
      const sortedAnagram = sortString(anagram);
  
      if (sortedAnagram === sortedPhrase) {
        matchingAnagrams.push(anagram);
      }
    }
  
    return matchingAnagrams;
  }
  
  console.log(isAnagramInArray("Bob Ziroll Teacher", anagrams));
  
  function isAnagramInArray(phrase, anagrams) {
    const sortedPhrase = phrase.toLowerCase().replace(/\s/g, '').split('').sort().join('');
    const matchingAnagrams = [];
  
    for (const anagram of anagrams) {
      const sortedAnagram = anagram.toLowerCase().replace(/\s/g, '').split('').sort().join('');
      if (sortedAnagram === sortedPhrase) {
        matchingAnagrams.push(anagram);
      }
    }
  
    return matchingAnagrams;
  }
  