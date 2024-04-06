import React from 'react';

function GenerateCombinations({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data provided</div>;
  }

  const combinations = [];

  // Iterate over each item in the input data
  data.forEach(item => {
    const { header, paragraph } = item;

    // Check if paragraph is an object
    if (typeof paragraph !== 'object' || paragraph === null) {
      return; // Skip invalid item
    }

    // Initialize an object to store combinations for the current header
    const combinationObj = {};

    // Iterate over each paragraph entry and generate combinations
    Object.entries(paragraph).forEach(([key, sentence]) => {
      const index = parseInt(key);

      // Iterate from next index to end to find consecutive sentences
      for (let i = index + 1; i <= Object.keys(paragraph).length; i++) {
        const nextSentence = paragraph[i];
        if (nextSentence) {
          // Construct combination by concatenating sentences with labels
          const combinedSentence = "Statement"+(index-1) + ":" + sentence + "<br/>" + "Statement" + (i-1) + ":" + nextSentence ;
          combinationObj[`${header}`] = combinationObj[`${header}`] || [];
          combinationObj[`${header}`].push(combinedSentence);
        }
      }
    });

    // Push combination object to combinations array
    combinations.push(combinationObj);
  });
console.log(combinations)
  // Render combinations
  return (
    <div>
      {combinations.map((combinationObj, index) => (
        <div key={index}>
          {Object.entries(combinationObj).map(([header, combinationList]) => (
            <div key={header}>
              <h3>{header}:</h3>
              <ul>
                {combinationList.map((combination, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: combination }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GenerateCombinations;
